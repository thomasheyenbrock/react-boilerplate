/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import Middleware = Redux.Middleware;

const sagaMiddleware = createSagaMiddleware();
const devtools: any = window.devToolsExtension || (() => (noop) => noop);

import {Task, SagaIterator} from 'redux-saga';

export interface IStore<T> extends Redux.Store<T> {
  runSaga?: (saga: (...args: any[]) => SagaIterator, ...args: any[]) => Task; // TODO: cleanup
  asyncReducers?: object;
}

export default function configureStore(initialState: object = {}, history): IStore<any> {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares: Middleware[] = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const enhancers: Redux.GenericStoreEnhancer[] = [
    applyMiddleware(...middlewares),
    devtools(),
  ];

  const store: IStore<any> = createStore(
    createReducer(),
    fromJS(initialState),
    compose.apply(this, enhancers), // TODO: investigate why rest arguments don't work here
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {}; // Async reducer registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      System.import('./reducers').then((reducerModule) => {
        const createReducers = reducerModule.default;
        const nextReducers = createReducers(store.asyncReducers);

        store.replaceReducer(nextReducers);
      });
    });
  }

  return store;
}

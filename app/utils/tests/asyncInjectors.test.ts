/**
 * Test async injectors
 */

import expect = require('expect');
import configureStore from '../../store';
import { createMemoryHistory } from 'react-router';
import { put } from 'redux-saga/effects';
import { fromJS } from 'immutable';

import {
  injectAsyncReducer,
  injectAsyncSagas,
  getAsyncInjectors,
} from '../asyncInjectors';

// Fixtures

const initialState = fromJS({ reduced: 'soon' });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return state.set('reduced', action.payload);
    default:
      return state;
  }
};

const sagas = [
  function* testSaga() {
    yield put({ type: 'TEST', payload: 'yup' });
  },
];

describe('asyncInjectors', () => {
  let store;

  describe('getAsyncInjectors', () => {
    beforeEach(() => {
      store = configureStore({}, createMemoryHistory);
    });

    it('given a store, should return all async injectors', () => {
      const { injectReducer, injectSagas } = getAsyncInjectors(store);

      injectReducer('test', reducer);
      injectSagas(sagas);

      const actual = store.getState().get('test');
      const expected = initialState.merge({ reduced: 'yup' });

      expect(actual.toJS()).toEqual(expected.toJS());
    });
  });

  describe('helpers', () => {
    beforeEach(() => {
      store = configureStore({}, createMemoryHistory);
    });

    describe('injectAsyncReducer', () => {
      it('given a store, it should provide a function to inject a reducer', () => {
        const injectReducer = injectAsyncReducer(store);

        injectReducer('test', reducer);

        const actual = store.getState().get('test');
        const expected = initialState;

        expect(actual.toJS()).toEqual(expected.toJS());
      });
    });

    describe('injectAsyncSagas', () => {
      it('given a store, it should provide a function to inject a saga', () => {
        const injectSagas = injectAsyncSagas(store);

        injectSagas(sagas);

        const actual = store.getState().get('test');
        const expected = initialState.merge({ reduced: 'yup' });

        expect(actual.toJS()).toEqual(expected.toJS());
      });
    });
  });
});

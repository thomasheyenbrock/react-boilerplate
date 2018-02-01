/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';

import H1 from 'components/H1';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

/* eslint-disable react/prefer-stateless-function */
export default class FeaturePage extends React.Component {

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta name="description" content="Feature page of React.js Boilerplate application" />
        </Helmet>
        <H1>
          Features
        </H1>
        <List>
          <ListItem>
            <ListItemTitle>
              Quick scaffolding
            </ListItemTitle>
            <p>
              Automate the creation of components, containers, routes, selectors
              and sagas - and their tests - right from the CLI!
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              Instant feedback
            </ListItemTitle>
            <p>
              Enjoy the best DX and code your app at the speed of thought! Your
              saved changes to the CSS and JS are reflected instantaneously
              without refreshing the page. Preserve application state even when
              you update something in the underlying code!
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              Industry-standard routing
            </ListItemTitle>
            <p>
              Write composable CSS that{'\''}s co-located with your components for
              complete modularity. Unique generated class names keep the
              specificity low while eliminating style clashes. Ship only the
              styles that are on the page for the best performance.
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              Offline-first
            </ListItemTitle>
            <p>
              The next frontier in performant web apps: availability without a
              network connection from the instant your users load the app.
            </p>
          </ListItem>
        </List>
      </div>
    );
  }
}

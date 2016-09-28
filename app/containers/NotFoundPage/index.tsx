/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React = require('react');
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import messages from './messages';
import { FormattedMessage } from 'react-intl';
import Button from 'components/Button';
import H1 from 'components/H1';
import RouterAction = ReactRouterRedux.RouterAction;

interface INotFoundProps {
  dispatch?: (action: RouterAction) => void,
}

export class NotFound extends React.Component<INotFoundProps, {}> {
  public render() {
    return (
      <article>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Button
          handleRoute={function redirect() {
          this.props.dispatch(push('/'));
        }}
        >
          <FormattedMessage {...messages.homeButton} />
        </Button>
      </article>
    );
  }
}

// Wrap the component to inject dispatch and state into it
export default connect()(NotFound);

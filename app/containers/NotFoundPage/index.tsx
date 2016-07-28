/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Button from 'components/Button';
import H1 from 'components/H1';

interface INotFoundProps {
  changeRoute?: Function,
}

export class NotFound extends React.Component<INotFoundProps, {}> {
  render() {
    return (
      <article>
        <H1>Page not found.</H1>
        <Button
          handleRoute={function redirect() {
          this.props.changeRoute('/');
        }}
        >
          Home
        </Button>
      </article>
    );
  }
}

// react-redux stuff
function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(null, mapDispatchToProps)(NotFound as any); //TODO: fix

import React = require('react');

class H3 extends React.Component<{}, {}> {
  render() {
    return (
      <h3 {...this.props} />
    );
  }
}

export default H3;

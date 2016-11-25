import React from 'react';

const VoteButtonDown = React.createClass({
  render: function () {
    return (
      <a><i className={this.props.type} onClick={this.props.handleDownClick}></i></a>
    );
  }
});

export default VoteButtonDown;

import React from 'react';

const VoteButton = React.createClass({
  render: function () {
    return (
      <a><i className={this.props.type} onClick={this.props.handleClick}></i></a>
    );
  }
});

export default VoteButton;

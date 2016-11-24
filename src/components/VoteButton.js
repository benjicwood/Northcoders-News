import React from 'react';

const VoteButton = React.createClass({
  render: function () {
    return (
      <a><i className={this.props.type}></i></a>
    );
  }
});

export default VoteButton;

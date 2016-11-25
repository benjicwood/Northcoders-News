import React from 'react';

const VoteButtonUp = React.createClass({
  render: function () {
    return (
      <a><i className={this.props.type} onClick={this.props.handleUpClick}></i></a>
    );
  }
});

export default VoteButtonUp;

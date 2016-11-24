import React from 'react';
import { Link } from 'react-router';

const NavLink = React.createClass({
  render: function () {
    console.log('rendering nav links');
    console.log('***');
    console.log(this.props.topic);
    return (
      <div>
        <Link to={this.props.topic}>{this.props.topic}</Link>
      </div>
    );
  }
});

export default NavLink;

import React from 'react';
import { Link } from 'react-router';

const NavLink = React.createClass({
  render: function () {
    return (
      <div>
        <Link to={this.props.topic}>{this.props.topic}</Link>
      </div>
    );
  }
});

export default NavLink;

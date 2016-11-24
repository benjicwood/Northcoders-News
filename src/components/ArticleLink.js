import React from 'react';
import { Link } from 'react-router';

const ArticleLink = React.createClass({
  render: function () {
    return (
      <div>
        <Link to={`articles/${this.props.id}`}>{this.props.title}</Link>
      </div>
    );
  }
});

export default ArticleLink;

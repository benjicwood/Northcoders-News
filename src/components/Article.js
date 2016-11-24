import React from 'react';

const Article = React.createClass({
  render: function () {
    return (
      <div className='box'>
        {this.props.title}
      </div>
    );
  }
});

export default Article;

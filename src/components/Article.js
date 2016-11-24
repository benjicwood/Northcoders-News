import React from 'react';
import { connect } from 'react-redux';

const Article = React.createClass({
  render: function () {
    return (
      <div className='box'>
        <h3 className='title is-3'>{this.props.currentArticle.title}</h3>
        <p>{this.props.currentArticle.body}</p>
      </div>
    );
  }
});

function mapStateToProps (state, props) {
  var id = props.params.id;
  var filtered = state.articles.filter(function (article) {
    return article._id === id;
  })[0];
  return {
    currentArticle: filtered
  };
}

export default connect (mapStateToProps)(Article);

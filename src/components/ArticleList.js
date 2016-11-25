import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import ArticleCard from './ArticleCard';

const ArticleList = React.createClass({
  componentWillMount () {
    this.props.fetchArticles();
  },
  render () {
    if (!this.props.articles) {
      return (
        <div>Loading...</div>
      );
    } else {
    return (
      <div id='ArticleList'>
        {this.props.articles.map(function (article, i) {
          return <ArticleCard title={article.title} votes={article.votes} comments={article.comments} belongs_to={article.belongs_to} id={article._id} key={i} />;
        })}
      </div>
    );
   };
  }
});

function mapStateToProps (state) {
  if(!state || !state.articles) return {};
  return {
    articles: state.articles
  };
}

function mapDispatchToProps (dispatch, props) {
  return {
    fetchArticles: () => {
      dispatch(actions.fetchArticles(props.params.article));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);

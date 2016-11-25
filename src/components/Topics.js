import React from 'react';
import {connect} from 'react-redux';
import ArticleCard from './ArticleCard';
import * as actions from '../actions/actions';

const Topics = React.createClass({
  render: function () {
    if (!this.props.topicArticles) {
      return (
        <div> Loading articles on a topic
        </div>
      );
    } else {
      return (
        <div>
          {this.props.topicArticles.map(function (article, i) {
            return <ArticleCard title={article.title} votes={article.votes} comments={article.comments} belongs_to={article.belongs_to} id={article._id} key={i} />;
          })
          }
        </div>
      );
    }
  }
});
function mapStateToProps (state, props) {
  const topic = props.params.topic;
  var filteredArticles = state.articles.filter((article) => {
    return article.belongs_to === topic;
  });
  return {
    topicArticles: filteredArticles
  };
}

export default connect(mapStateToProps)(Topics);

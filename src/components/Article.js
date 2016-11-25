import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import CommentCard from './CommentCard';

const Article = React.createClass({
  componentWillMount: function () {
    if (!this.props.currentArticle) { this.props.fetchArticles(); }
    this.props.fetchComments();
  },
  render: function () {
    console.log('****************');
    console.log(this.props.comments);
    if(!this.props.currentArticle) {
      return (
          <div>
          Loading article ...
          </div>
        );
      }
    if (this.props.comments.length === 0) {
    return (
      <div className='box'>
        <h3 className='title is-3'>{this.props.currentArticle.title}</h3>
        <p>{this.props.currentArticle.body}</p>
        <p className='lead'>{this.props.currentArticle.comments} comments</p>
        <div className='box'>
          Loading comments ...
        </div>
      </div>
    );
  } else {
    return (
      <div className='box'>
        <h3 className='title is-3'>{this.props.currentArticle.title}</h3>
        <p>{this.props.currentArticle.body}</p>
        <p className='lead'>{this.props.currentArticle.comments} comments</p>
        <div className='box'>
        <ul>
          {this.props.comments.map((comment, i) => {
            return <li key={i}><CommentCard body={comment.body} author={comment.created_by} id={comment._id} votes={comment.votes} /></li>;
          })}
        </ul>
        </div>
      </div>
    );
    }
  }
});

function mapStateToProps (state, props) {
  if (!state.comments.length === 0) return {};

  var id = props.params.id;
  var filtered = state.articles.filter(function (article) {
    return article._id === id;
  })[0];
  return {
    currentArticle: filtered,
    comments: state.comments
  };
}

function mapDispatchToProps (dispatch, props) {
  var id = props.params.id;
  return {
    fetchComments: () => { dispatch(actions.fetchComments(id + '/comments')); },
    fetchArticles: () => { dispatch(actions.fetchArticles()); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);

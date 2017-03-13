import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
import moment from 'moment';

const Article = React.createClass({
  componentWillMount: function () {
    if (!this.props.currentArticle) { this.props.fetchArticles(); }
    this.props.fetchComments();
  },
  render: function () {
    if (!this.props.currentArticle) {
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
          <CommentForm />
        </div>
      );
    } else {
      return (
        <div>
          <div className=' box ourbox'>
            <h3 className='title is-3'>{this.props.currentArticle.title}</h3>
            <p>{this.props.currentArticle.body}</p>
          </div>
          <div className='box ourbox'>
            <p className='comment-number'>{this.props.currentArticle.comments} comments</p>
            <ul>
              {
              this.props.comments.sort((a, b) => {
                return moment(new Date(a.created_at)) - moment(new Date(b.created_at));
              })
              .map((comment, i) => {
                return <li key={i}><CommentCard body={comment.body}
                  author={comment.created_by}
                  id={comment._id}
                  votes={comment.votes}
                  date={comment.created_at} /></li>;
              })
            }
            </ul>
          </div>
          <CommentForm article_id={this.props.params.id} />
        </div>
      );
    }
  }
});

function mapStateToProps (state, props) {
  if (!state.comments.length === 0) return {};

  var id = props.params.id;
  var filtered = state.articles.articles.filter(function (article) {
    return article._id === id;
  })[0];
  return {
    currentArticle: filtered,
    comments: state.comments.comments
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

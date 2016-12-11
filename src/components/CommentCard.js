import React from 'react';
import VoteButtonUp from './VoteButtonUp';
import VoteButtonDown from './VoteButtonDown';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

const CommentCard = React.createClass({
  render: function () {
    console.log('******');
    console.log(this.props.votes);
    return (
      <div className='box our-box'>
        <article className='media'>
          <div className='media-left'>
          <ul className='detail-list'>
            <li><VoteButtonUp type='fa fa-thumbs-o-up' handleUpClick={this.handleUpClick} /></li>
            <li>{this.props.votes}</li>
            <li><VoteButtonDown type='fa fa-thumbs-o-down' handleDownClick={this.handleDownClick} /></li>
          </ul>
          </div>
          <div className='media-content'>
            <h4 className='title is-5'><strong>{this.props.author}</strong></h4>
            {this.props.body}
          </div>
        </article>
      </div>
    );
  },
handleUpClick (event) {
   this.props.upvoteComment();
   this.props.commentVoteUp();
 },
 handleDownClick (event) {
   this.props.downvoteComment();
   this.props.commentVoteDown();
 },
 deleteComment (event) {

 }
});

function mapDispatchToProps (dispatch, props) {
 return {
   upvoteComment: () => {
     dispatch(actions.upvoteComment(props.id));
   },
   downvoteComment: () => {
     dispatch(actions.downvoteComment(props.id));
   },
   commentVoteUp: () => {
     dispatch(actions.commentVote(props.id, 'up'));
   },
   commentVoteDown: () => {
     dispatch(actions.commentVote(props.id, 'down'));
   }
 };
}

export default connect(null, mapDispatchToProps)(CommentCard);

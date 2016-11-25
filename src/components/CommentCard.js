import React from 'react';
import VoteButton from './VoteButton';
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
            <li><VoteButton type='fa fa-thumbs-o-up' handleClick={this.handleClick} /></li>
            <li>{this.props.votes}</li>
            <li><VoteButton type='fa fa-thumbs-o-down' /></li>
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
  handleClick (event) {
    console.log(event);
    console.log('click')
    this.props.upvoteComment(this.props.id);
  }
});

function mapDispatchToProps (dispatch, props) {
  return {
    upvoteComment: () => {
      dispatch(actions.upvoteComment(props.id));
    }
  };
}

export default connect(null, mapDispatchToProps)(CommentCard);

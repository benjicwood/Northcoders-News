import React from 'react';
import VoteButton from './VoteButton';

const CommentCard = React.createClass({
  render: function () {
    return (
      <div className='box our-box'>
        <article className='media'>
          <div className='media-left'>
          <ul className='detail-list'>
            <li><VoteButton type='fa fa-thumbs-o-up' /></li>
            <li>{this.props.votes} </li>
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
  }
});

export default CommentCard;

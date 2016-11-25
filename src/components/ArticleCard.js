import React from 'react';
import VoteButton from './VoteButton';
import ArticleLink from './ArticleLink';

const ArticleCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <ul className='detail-list'>
            <li><VoteButton type='fa fa-thumbs-o-up' /></li>
            <li>{props.votes} </li>
            <li><VoteButton type='fa fa-thumbs-o-down' /></li>
          </ul>
        </div>
        <div className='media-content'>
          <div className='content'>
            <h3 className='title is-3'><ArticleLink id={props.id} title={props.title} commentsNumber={props.comments} /></h3>
          </div>
          <div className='comment-number'>
            <p>{props.comments} comments</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;

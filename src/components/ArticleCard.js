import React from 'react';
import {connect} from 'react-redux';
import ArticleLink from './ArticleLink';
import VoteButtonUp from './VoteButtonUp';
import VoteButtonDown from './VoteButtonDown';
import * as actions from '../actions/actions';

const ArticleCard = React.createClass({
  render: function () {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src="http://img.photobucket.com/albums/v480/le_charlwood/code-outline.png" alt="Image" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
        <p>
          <strong><ArticleLink id={this.props.id} title={this.props.title} votes={this.props.comments} /></strong>
        </p>
      </div>
      <nav className="level">
        <div className="level-left">
          <a className="level-item">
            <VoteButtonUp id='thumbs' type='fa fa-thumbs-o-up' handleUpClick={this.handleUpClick} />
          </a>
          <a className="level-item" id='thumbs'>
            <p>{this.props.votes}</p>
          </a>
          <a className="level-item">
            <VoteButtonDown id='thumbs' type='fa fa-thumbs-o-down' handleDownClick={this.handleDownClick} />
          </a><br/>
        <small><p className='lead tag is-info is-small'>{this.props.comments} comments</p></small>
        </div>
      </nav>
    </div>
  </article>
</div>
    );
  },
  handleUpClick (event) {
    this.props.upvoteArticle();
    this.props.articleVoteUp();
  },
  handleDownClick (event) {
    this.props.downvoteArticle();
    this.props.articleVoteDown();
  }
});

function mapDispatchToProps (dispatch, props) {
  return {
    upvoteArticle: () => {
      dispatch(actions.upvoteArticle(props.id));
    },
    downvoteArticle: () => {
      dispatch(actions.downvoteArticle(props.id));
    },
    articleVoteUp: () => {
      dispatch(actions.articleVote(props.id, 'up'));
    },
    articleVoteDown: () => {
      dispatch(actions.articleVote(props.id, 'down'));
    }
  };
}

export default connect(null, mapDispatchToProps)(ArticleCard);

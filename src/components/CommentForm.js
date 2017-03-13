import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

const CommentForm = React.createClass({
  getInitialState () {
    return {
      comment: ''
    };
  },
  render: function () {
    return (
      <div className='box comment-form'>
        <form onSubmit={this.handleSubmit}>
          <label> Your comment: </label>
          <div className='error-message'>{this.state.errorMessage}</div>
          <textarea className='textarea my-textarea' name='comment-text' value={this.state.comment} onChange={this.handleCommentChange} />
          <button type='submit' className='mybutton button is-danger'>Submit comment</button>
        </form>
      </div>
    );
  },
  handleCommentChange (event) {
    this.setState({
      comment: event.target.value
    });
  },
  handleSubmit (event) {
    event.preventDefault();
    this.props.addComment(this.props.article_id, this.state);
    this.setState({comment: ''});
  }
});
function mapDispatchToProps (dispatch, props) {
  return {
    addComment: (id, state) => {
      dispatch(actions.postComment(id, state));
    }
  };
}
export default connect(null, mapDispatchToProps)(CommentForm);

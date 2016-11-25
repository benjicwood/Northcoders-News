import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { ROOT } from '../../config';
import request from 'superagent';

const Article = React.createClass({
  render: function () {
    return (
      <div className='box'>
        <h3 className='title is-3'>{this.props.currentArticle.title}</h3>
        <p>{this.props.currentArticle.body}</p>
        <div className='box'>
          {this.props.comments._id}
        </div>
      </div>
    );
  }
});

function mapStateToProps (state, props) {
  var id = props.params.id;
  var filtered = state.articles.filter(function (article) {
    return article._id === id;
  })[0];
  return {
    currentArticle: filtered
  };
}
//
// function mapDispatchToProps (dispatch, props) {
//   var id = props.params.id;
//   return {
//     fetchComments: function () {
//       dispatch(actions.fetchComments(id));
//     }
//   };
// }

export default connect(mapStateToProps)(Article);

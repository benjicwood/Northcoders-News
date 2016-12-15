import * as types from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  comments: []
};

function commentsReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);
if (action.type === types.UPVOTE_COMMENT) {
  var index = newState.comments.findIndex(function (comment) {
    return comment._id === action.id;
  });
  newState.comments = newState.comments.slice();
  newState.comments[index].votes += 1;
}

if (action.type === types.DOWNVOTE_COMMENT) {
  index = newState.comments.findIndex(function (comment) {
    return comment._id === action.id;
  });
  newState.comments = newState.comments.slice();
  newState.comments[index].votes -= 1;
}
if (action.type === types.COMMENT_UPDATE_SUCCESS) {
  newState.serverResponse = action.response;
}
if (action.type === types.COMMENT_UPDATE_ERROR) {
  newState.error = action.error;
}

if (action.type === types.FETCH_COMMENTS_SUCCESS) {
  newState.loading = false;
  newState.comments = action.data.comments;
}
if (action.type === types.FETCH_COMMENTS_REQUEST) {
  newState.loading = true;
}
if (action.type === types.FETCH_COMMENTS_ERROR) {
  newState.error = action.error;
  newState.loading = false;
}
return newState;
}

export default commentsReducer;

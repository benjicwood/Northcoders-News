import * as types from '../actions/types';

const initialState = {
  articles: [],
  loading: false,
  error: null,
  topics: [],
  comments: [],
  serverResponse: null
};

function reducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);
  if (action.type === types.FETCH_ARTICLES_SUCCESS) {
    newState.loading = false;
    newState.articles = action.data.articles;
  }
  if (action.type === types.FETCH_ARTICLES_REQUEST) {
    newState.loading = true;
  }
  if (action.type === types.FETCH_ARTICLES_ERROR) {
    newState.error = action.error;
    newState.loading = false;
  }

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

  if (action.type === types.FETCH_TOPICS_SUCCESS) {
    newState.loading = false;
    newState.topics = action.data.topics;
  }
  if (action.type === types.FETCH_TOPICS_REQUEST) {
    newState.loading = true;
  }
  if (action.type === types.FETCH_TOPICS_ERROR) {
    newState.error = action.error;
    newState.loading = false;
  }
  if (action.type === types.UPVOTE_ARTICLE) {
    var arIndex = newState.articles.findIndex(function (article) {
      return article._id === action.id;
    });
    newState.articles = newState.articles.slice();
    newState.articles[arIndex].votes += 1;
  }

  if (action.type === types.DOWNVOTE_ARTICLE) {
    arIndex = newState.articles.findIndex(function (article) {
      return article._id === action.id;
    });
    newState.articles = newState.articles.slice();
    newState.articles[arIndex].votes -= 1;
  }
  return newState;
}

export default reducer;

import * as types from '../actions/types';

const initialState = {
  articles: [],
  loading: false,
  error: null
};

function articlesReducer (prevState = initialState, action) {
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

export default articlesReducer;

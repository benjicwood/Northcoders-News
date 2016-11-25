import * as types from '../actions/types';

const initialState = {
  articles: [],
  loading: false,
  error: null,
  topics: [],
  comments: [],
  selectedTopic: null
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
  return newState;
}

export default reducer;

import * as types from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  topics: []
};

function topicsReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);
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

export default topicsReducer;

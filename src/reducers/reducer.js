import * as types from '../actions/types';
import { combineReducers } from 'redux';
import commentsReducer from './commentsReducer';
import articlesReducer from './articlesReducer';
import topicsReducer from './topicsReducer';

const reducer = combineReducers({
  comments: commentsReducer,
  articles: articlesReducer,
  topics: topicsReducer
});

export default reducer;

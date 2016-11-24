import * as types from './types';
import request from 'superagent';

import { ROOT } from '../../config';

export function fetchArticles () {
  return (dispatch) => {
    dispatch(articlesRequest());
    request
      .get(`${ROOT}/articles`)
      .end((err, res) => {
        if (err) dispatch(articlesError(err));
        else dispatch(articlesSuccess(res.body));
      });
  };
}

export function fetchTopics () {
  return (dispatch) => {
    dispatch(topicsRequest());
    request
    .get(`${ROOT}/topics`)
    .end((err, res) => {
      if (err) dispatch(topicsError(err));
      else dispatch(topicsSuccess(res.body));
    });
  };
}

export function articlesRequest () {
  return {
    type: types.FETCH_ARTICLES_REQUEST
  };
}

export function articlesSuccess (data) {
  return {
    type: types.FETCH_ARTICLES_SUCCESS,
    data: data
  };
}

export function articlesError (err) {
  return {
    types: types.FETCH_ARTICLES_ERROR,
    error: err
  };
}

  export function addComment (body, article_id) {
  return {
    type: types.ADD_COMMENT,
    body: body,
    article_id: article_id
  };
}

export function topicsRequest () {
  return {
    type: types.FETCH_TOPICS_REQUEST
  };
}

export function topicsSuccess (data) {
  return {
    type: types.FETCH_TOPICS_SUCCESS,
    data: data
  };
}

export function topicsError (err) {
  return {
    types: types.FETCH_TOPICS_ERROR,
    error: err
  };
}

export function upvoteComment (comment_id) {
  return {
    type: types.UPVOTE_COMMENT,
    comment_id: comment_id
  };
}

export function downvoteComment (comment_id) {
  return {
    type: types.DOWNVOTE_COMMENT,
    comment_id: comment_id
  };
}

export function upvoteArticle (article_id) {
  return {
    type: types.UPVOTE_ARTICLE,
    article_id
  };
}

export function downvoteArticle (article_id) {
  return {
    type: types.DOWNVOTE_ARTICLE,
    article_id
  };
}

export function deleteComment (comment_id) {
  return {
    type: types.DELETE_COMMENT,
    comment_id: comment_id
  };
}

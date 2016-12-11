import * as types from './types';
import request from 'superagent';
import { ROOT } from '../../config';

export function commentVote (id, vote) {
  return (dispatch) => {
    request
      .put(`${ROOT}/comments/${id}?vote=${vote}`)
      .end((err) => {
        if (err) dispatch(commentUpdateError(err));
        else dispatch(commentUpdateSuccess(id, vote));
      });
  };
}

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

export function articleVote (id, vote) {
 return (dispatch) => {
   request
     .put(`${ROOT}/articles/${id}?vote=${vote}`)
     .end((err) => {
       if (err) dispatch(articleVoteError(err));
       else dispatch(articleVoteSuccess(id, vote));
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

export function fetchComments (id) {
 return (dispatch) => {
   dispatch(commentsRequest());
   request
   .get(`${ROOT}/articles/${id}`)
   .end((err, res) => {
     console.log('rsponse');
     console.log(res.body);
     if (err) dispatch(commentsError(err));
     else dispatch(commentsSuccess(res.body));
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
   type: types.FETCH_ARTICLES_ERROR,
   error: err
 };
}

export function articleVoteError (error) {
 return {
   type: types.ARTICLE_VOTE_ERROR,
   error: error
 };
}

export function articleVoteSuccess (id, vote) {
 return {
   type: types.ARTICLE_VOTE_SUCCESS,
   id: id,
   vote: vote
 };
}

export function upvoteArticle (id) {
 return {
   type: types.UPVOTE_ARTICLE,
   id: id
 };
}

export function downvoteArticle (id) {
 return {
   type: types.DOWNVOTE_ARTICLE,
   id: id
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
   type: types.FETCH_TOPICS_ERROR,
   error: err
 };
}

export function commentsRequest () {
 return {
   type: types.FETCH_COMMENTS_REQUEST
 };
}

export function commentsSuccess (data) {
 return {
   type: types.FETCH_COMMENTS_SUCCESS,
   data: data
 };
}

export function commentsError (err) {
 return {
   type: types.FETCH_COMMENTS_ERROR,
   error: err
 };
}

export function addComment (data) {
 return {
   type: types.ADD_COMMENT,
   data: data
 };
}

export function deleteComment (comment_id) {
 return {
   type: types.DELETE_COMMENT,
   comment_id: comment_id
 };
}

export function upvoteComment (id) {
 return {
   type: types.UPVOTE_COMMENT,
   id: id
 };
}

export function downvoteComment (id) {
 return {
   type: types.DOWNVOTE_COMMENT,
   id: id
 };
}



export function commentUpdateSuccess (id, vote) {
 return {
   type: types.COMMENT_UPDATE_SUCCESS,
   id: id,
   vote: vote
 };
}

export function commentUpdateError (error) {
 return {
   type: types.COMMENT_UPDATE_ERROR,
   error: error
 };
}

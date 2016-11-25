import {expect} from 'chai';
import reducer from '../src/reducer/reducer';
import * as actions from '../src/actions/actions';

describe('reducer function', function () {
  it('is a function', function () {
    expect(reducer).to.be.a('function');
  });
  it('handles action fetchArticlesSuccess correctly', function () {
    var myaction = actions.articlesSuccess({articles: [{title: 'article', body: 'article'}]});
    var initialState = { articles: [] };
    var newState = reducer(initialState, myaction);
    expect(newState.articles).to.eql([{title: 'article', body: 'article'}]);
    expect(newState.loading).to.be.false;
  });
  it('handles actions fetchArticlesRequest correctly', function () {
    var myaction = actions.articlesRequest();
    var initialState = { loading: false };
    var newState = reducer(initialState, myaction);
    expect(newState.loading).to.be.true;
  });
  it('it handles the fetchArticlesError correctly', function () {
    var myaction = actions.articlesError({"error": {"code": 400}});
    var initialState = { error: false };
    var newState = reducer(initialState, myaction);
    expect(newState.error).to.eql({"error": {"code": 400}});
  });

  it('handles action topicsSuccess correctly', function () {
    var myaction = actions.topicsSuccess({topics: ['topic', 'topic']});
    var initialState = { topics: [] };
    var newState = reducer(initialState, myaction);
    expect(newState.topics).to.eql(['topic', 'topic']);
    expect(newState.loading).to.be.false;
  });
  it('handles actions topicsRequest correctly', function () {
    var myaction = actions.topicsRequest();
    var initialState = { loading: false };
    var newState = reducer(initialState, myaction);
    expect(newState.loading).to.be.true;
  });
  it('handles actions upvoteComment correctly', function () {
    var initialState = { comments: [{body: 'body', votes: 5, _id: 0}] };
    var myaction = actions.upvoteComment(0);
    var newState = reducer(initialState, myaction);
    console.log(newState.comments);
    expect(newState.comments[0].votes).to.eql(6);
  });
});

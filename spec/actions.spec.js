import {expect} from 'chai';
import reducer from '../src/reducers/reducer';
import * as actions from '../src/actions/actions';
import * as types from '../src/actions/types';

describe('actions.articlesRequest', function () {
  it('has a FETCH_ARTICLES_REQUSTequest type', function () {
    expect(types.FETCH_ARTICLES_REQUEST).to.equal('FETCH_ARTICLES_REQUEST');
  });
  it('is a function', function () {
    expect(actions.articlesRequest).to.be.a('function');
  });
  it('returns an object', function () {
    expect(actions.articlesRequest()).to.be.an('object');
  });
});
describe('actions.articlesSuccess', function () {
  it('has a FETCH_ARTICLES_SUCCESS type', function () {
    expect(types.FETCH_ARTICLES_SUCCESS).to.be.a('string');
    expect(types.FETCH_ARTICLES_SUCCESS).to.equal('FETCH_ARTICLES_SUCCESS');
  });
  it('is a function', function () {
    expect(actions.articlesSuccess).to.be.a('function');
  });
  it('should take 1 argument', function () {
    expect(actions.articlesSuccess.length).to.equal(1);
  });
  it('returns an object', function () {
    expect(actions.articlesSuccess()).to.be.an('object');
  });
});
describe('actions.articlesError', function () {
  it('has a FETCH_ARTICLES_ERROR type', function () {
    expect(types.FETCH_ARTICLES_ERROR).to.be.a('string');
    expect(types.FETCH_ARTICLES_ERROR).to.equal('FETCH_ARTICLES_ERROR');
  });
  it('is a function', function () {
    expect(actions.articlesError).to.be.a('function');
  });
  it('should take 1 argument', function () {
    expect(actions.articlesError.length).to.equal(1);
  });
  it('returns an object', function () {
    expect(actions.articlesError()).to.be.an('object');
  });
});
describe('actions.topicsRequest', function () {
  it('has a FETCH_TOPICS_REQUEST type', function () {
    expect(types.FETCH_TOPICS_REQUEST).to.equal('FETCH_TOPICS_REQUEST');
  });
  it('is a function', function () {
    expect(actions.topicsRequest).to.be.a('function');
  });
  it('returns an object', function () {
    expect(actions.topicsRequest()).to.be.an('object');
  });
});
describe('actions.topicsSuccess', function () {
  it('has a FETCH_TOPICS_SUCCESS type', function () {
    expect(types.FETCH_TOPICS_SUCCESS).to.be.a('string');
    expect(types.FETCH_TOPICS_SUCCESS).to.equal('FETCH_TOPICS_SUCCESS');
  });
  it('is a function', function () {
    expect(actions.topicsSuccess).to.be.a('function');
  });
  it('should take 1 argument', function () {
    expect(actions.topicsSuccess.length).to.equal(1);
  });
  it('returns an object', function () {
    expect(actions.topicsSuccess()).to.be.an('object');
  });
});
describe('actions.topicsError', function () {
  it('has a FETCH_TOPICS_ERROR type', function () {
    expect(types.FETCH_TOPICS_ERROR).to.be.a('string');
    expect(types.FETCH_TOPICS_ERROR).to.equal('FETCH_TOPICS_ERROR');
  });
  it('is a function', function () {
    expect(actions.topicsError).to.be.a('function');
  });
  it('should take 1 argument', function () {
    expect(actions.topicsError.length).to.equal(1);
  });
  it('returns an object', function () {
    expect(actions.topicsError()).to.be.an('object');
  });
});

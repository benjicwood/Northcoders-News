import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import App from './components/App';
import ArticleList from './components/ArticleList';
import reducer from './reducers/reducer';
import Topics from './components/Topics';
import Article from './components/Article';
const store = createStore(reducer, applyMiddleware(thunk, createLogger()));

ReactDOM.render(<Provider store={store}>
                  <Router history={browserHistory}>
                    <Route path='/' component={App}>
                      <IndexRoute component={ArticleList} />
                      <Route path='/:topic' component={Topics} />
                      <Route path='/articles/:id' component={Article} />
                    </Route>
                  </Router>
                </Provider>, document.getElementById('app'));

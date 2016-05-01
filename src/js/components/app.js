import React from 'react';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Template from './app-template';
import BookStore from './bookstore/app-bookstore';
import BookStoreDetail from './product/app-bookstore-detail';

export default () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Template}>
        <IndexRoute component={BookStore} />
        <Route path="book/:item" component={BookStoreDetail} />
      </Route>
    </Router>
  );
}

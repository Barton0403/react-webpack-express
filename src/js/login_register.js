import React from 'react';
import { render } from 'react-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage.js';
import { Router, Route, browserHistory } from 'react-router';

render(
  <Router history={browserHistory}>
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
  </Router>,
  document.getElementById('root')
);

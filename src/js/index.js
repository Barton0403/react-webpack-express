import React from 'react';
import { render } from 'react-dom';
import IndexPage from './components/IndexPage';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import { Router, Route, browserHistory } from 'react-router';

render(
  <Router history={browserHistory}>
    <Route path="/" component={IndexPage}>
      <Route path="/tab1" component={Tab1} />
      <Route path="/tab2" component={Tab2} />
    </Route>
  </Router>,
  document.getElementById('react-root')
);

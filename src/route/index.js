import React from 'react';
import { Router, Route } from 'react-router';

import Root from 'container/Root';
import Favorite from 'container/Favorite';

// TODO: Add authentication for routes using store
export default (history, onUpdate) => (
  <Router history={history} onUpdate={onUpdate}>
    <Route path="/" component={Root}/>
    <Route path="/favorites" component={Favorite}/>
    <Route path="*" component={Root}/>
  </Router>
);

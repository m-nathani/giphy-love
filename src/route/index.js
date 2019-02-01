import React from 'react';
import { Route } from 'react-router';

import Root from 'container/Root';

// TODO: Add authentication for routes using store
export default (/* store */) => (
  <Route path="/" component={Root}/>
);

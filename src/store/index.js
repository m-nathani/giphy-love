import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { apiMiddleware } from 'redux-api-middleware';
import reducers from 'reducer';

export default function (initialState, history) {
  const middlewares = [
    apiMiddleware,
    routerMiddleware(history),
  ];

  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  const store = createStoreWithMiddleware(reducers, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducer', () => {
      const nextReducer = require('reducer'); // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}

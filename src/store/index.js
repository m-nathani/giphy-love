import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import reducers from 'reducer';
import { save, load } from 'redux-localstorage-simple';

export default function (initialState, history) {
  const middlewares = [
    apiMiddleware,
    routerMiddleware(history),
    thunk,
    save(),
  ];

  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  const store = createStoreWithMiddleware(reducers, load(), initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducer', () => {
      const nextReducer = require('reducer'); // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}

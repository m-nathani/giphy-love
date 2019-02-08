import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import reducers from 'reducer';
import { save, load } from 'redux-localstorage-simple';

export default function (initialState, history) {
  const localstorageStates = [
    'root.favorites',
    'root.isLoading',
  ];

  const middlewares = [
    apiMiddleware,
    routerMiddleware(history),
    thunk,
    save({
      states: localstorageStates,
      namespace: 'giphy',
    }),
  ];

  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  const store = createStoreWithMiddleware(reducers, load({
    states: localstorageStates,
    namespace: 'giphy',
    preloadedState: {
      root: {
        initial: true,
        data: [],
        favorites: [],
        prevSearchTerm: '',
        searchTerm: '',
        error: false,
        isLoading: false,
        hasMore: false,
        loadedAll: false,
        itemsPerPage: 25,
        showProfile: false,
        noSearchResult: false,
        language: 'en',
        rating: 'all',
      },
    },
  }), initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducer', () => {
      const nextReducer = require('reducer'); // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}

import axios from 'axios';
import config from 'config';
import {
  FETCH_GIPHY_DATA, FETCH_GIPHY_DATA_SUCCESS, FETCH_GIPHY_DATA_FAIL, UPDATE_SEARCH_TERM, TOGGLE_SHOW_PROFILE,
  FETCH_GIPHY_LOAD_MORE, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, SET_GIPHY_LANGUAGE, SET_GIPHY_RATING,
} from 'constant';

export const toggleShowProfile = () => ({
  type: TOGGLE_SHOW_PROFILE,
});

export const updateSearchTerm = value => ({
  type: UPDATE_SEARCH_TERM,
  searchTerm: value,
});

export const fetchGiphyDataFail = err => ({
  type: FETCH_GIPHY_DATA_FAIL,
  error: true,
  message: err,
});

export const fetchGiphyDataSuccess = (data, stateData = []) => ({
  type: FETCH_GIPHY_DATA_SUCCESS,
  data: [...stateData, ...data.data],
  offset: data.pagination.offset,
  hasMore: data.pagination.total_count - data.pagination.count > 0, // there are more result pages
  loadedAll: data.pagination.total_count < data.pagination.offset, // there are no more load more result pages
  pagination: data.pagination,
});

export const loadMoreGiphyData = () => (dispatch, getState) => {
  const state = getState().root;
  const {
    data, searchTerm, hasMore, loadedAll,
  } = state;
  let { offset } = state;
  if (hasMore && !loadedAll) {
    offset += state.itemsPerPage;
    dispatch({ type: FETCH_GIPHY_LOAD_MORE, error: false });
    let url = `${config.apiUrl}?api_key=${config.apiKey}&q=${searchTerm}&offset=${offset}&lang=${state.language}`;
    if (state.rating !== 'all') url += `&rating=${state.rating}`;
    axios.get(url)
      .then((response) => {
      // dispatch to add to the previous result to current.
        dispatch(fetchGiphyDataSuccess(response.data, data));
      })
      .catch(error => dispatch(fetchGiphyDataFail(error)));
  }
};

export const fetchGighyData = () => (dispatch, getState) => {
  const state = getState().root;
  // make a request only if search term has been entered
  if (state.searchTerm) {
    dispatch({ type: FETCH_GIPHY_DATA, error: false });
    let url = `${config.apiUrl}?api_key=${config.apiKey}&q=${state.searchTerm}&offset=${0}&lang=${state.language}`;
    if (state.rating !== 'all') url += `&rating=${state.rating}`;
    axios.get(url)
      .then((response) => {
        dispatch(fetchGiphyDataSuccess(response.data, []));
      })
      .catch(error => dispatch(fetchGiphyDataFail(error)));
  }
};

export const addToFavorites = prop => ({
  type: ADD_TO_FAVORITES,
  item: prop,
});

export const removeFromFavorites = props => ({
  type: REMOVE_FROM_FAVORITES,
  item: props,
});

export const setLanguage = value => ({
  type: SET_GIPHY_LANGUAGE,
  language: value,
});

export const setRating = value => ({
  type: SET_GIPHY_RATING,
  rating: value,
});

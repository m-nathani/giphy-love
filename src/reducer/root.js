import {
  FETCH_GIPHY_DATA, FETCH_GIPHY_DATA_SUCCESS, FETCH_GIPHY_DATA_FAIL,
  UPDATE_SEARCH_TERM, TOGGLE_SHOW_PROFILE, FETCH_GIPHY_LOAD_MORE,
} from 'constant';

const initialState = {
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
};

const toggleShowProfile = (state) => {
  state.showProfile = !state.showProfile;
  return { ...state };
};

const updateSearchTerm = (state, action) => {
  state.prevSearchTerm = state.searchTerm;
  return { ...state, ...action };
};

const loadMoreGiphyData = (state, action) => ({
  ...state, ...action, ...{ initial: false, isLoading: true },
});

const fetchGiphyData = (state, action) => ({
  ...state, data: [], ...action, ...{ isLoading: true, initial: false },
});

const fetchGiphyDataSuccess = (state, action) => ({
  ...state,
  type: action.type,
  data: [...action.data],
  prevSearchTerm: state.searchTerm,
  offset: action.offset,
  hasMore: action.hasMore,
  ...{ noSearchResult: action.pagination.total_count === 0, isLoading: false },
});

const fetchGiphyDataFail = (state, action) => ({ ...state, ...action, ...{ noSearchResult: true, isLoading: false } });

export default function root(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH_TERM: return updateSearchTerm(state, action);
    case FETCH_GIPHY_DATA: return fetchGiphyData(state, action);
    case FETCH_GIPHY_DATA_SUCCESS: return fetchGiphyDataSuccess(state, action);
    case FETCH_GIPHY_DATA_FAIL: return fetchGiphyDataFail(state, action);
    case FETCH_GIPHY_LOAD_MORE: return loadMoreGiphyData(state, action);
    case TOGGLE_SHOW_PROFILE: return toggleShowProfile(state);
    default:
      return state;
  }
}

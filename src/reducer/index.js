import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
// import undoable, { includeAction } from 'redux-undo';

// import all reducer here.
// one important thing that needs to be kept in mind is to use the same name as the name
// you'd want to keep the object name of your state. For example, if you imported the dashboard
// reducer as `dashboard` so every state that would get updated via dashboard reducer will be
// assigned to `state.dashboard` property.
import root from './root';

export default combineReducers({
  routing,
  root,
});

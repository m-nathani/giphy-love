import { REQUEST, FAILURE, SUCCESS } from 'constant/types';

const initialState = { text: 'Hello, world.' };

export default function root(state = initialState, action) {
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case REQUEST:
      return nextState;
    case FAILURE:
      return nextState;
    case SUCCESS:
      return nextState;
    default:
      return state;
  }
}

import { Action } from '../actions';

const filter = (state = '0', action: Action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default filter;

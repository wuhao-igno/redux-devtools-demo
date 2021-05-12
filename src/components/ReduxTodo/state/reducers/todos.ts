import * as R from 'ramda';
import { Todo, COMPLETE_STATUS } from '../../types';
import { Action } from '../actions';

const todos = (state: Todo[] = [], action: Action): Todo[] => {
  switch (action.type) {
    case 'ADD_ITEM':
      return R.append(
        {
          id: action.id,
          text: action.text,
          isComplete: COMPLETE_STATUS.UNCOMPLETED,
        },
        state,
      );
    case 'TOGGLE_ITEM':
      return R.update(
        action.index,
        {
          ...action.item,
          isComplete:
            action.item?.isComplete === COMPLETE_STATUS.COMPLETED
              ? COMPLETE_STATUS.UNCOMPLETED
              : COMPLETE_STATUS.COMPLETED,
        },
        state,
      );
    case 'DELETE_ITEM':
      return R.remove(action.index, 1, state);
    case 'EDIT_ITEM':
      return R.update(
        action.index,
        {
          ...action.item,
          text: action.text,
        },
        state,
      );
    default:
      return state;
  }
};

export default todos;

import getId from '@/utils/getId';
import { Todo } from '../../types';

export type Action =
  | {
      type: 'ADD_ITEM';
      id: string;
      text: string;
    }
  | {
      type: 'TOGGLE_ITEM';
      item: Todo;
      index: number;
    }
  | {
      type: 'DELETE_ITEM';
      index: number;
    }
  | {
      type: 'EDIT_ITEM';
      item: Todo;
      index: number;
      text: string;
    }
  | {
      type: 'SET_FILTER';
      filter: string;
    }
  | {
      type: 'DONE_ALL';
    };

export const addItem = (text: string) => ({
  type: 'ADD_ITEM' as const,
  id: getId(),
  text,
});

export const toggleItemCompletion = (item: Todo, index: number) => ({
  type: 'TOGGLE_ITEM' as const,
  item,
  index,
});

export const deleteItem = (index: number) => ({
  type: 'DELETE_ITEM' as const,
  index,
});

export const editItem = (item: Todo, index: number, text: string) => ({
  type: 'EDIT_ITEM' as const,
  item,
  index,
  text,
});

export const setFilter = (filter: string) => ({
  type: 'SET_FILTER' as const,
  filter,
});

export const doneAll = () => ({
  type: 'DONE_ALL' as const,
});

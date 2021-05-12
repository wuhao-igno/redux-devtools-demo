import { Todo } from '../types';

export interface State {
  todos: Todo[];
  filters: string;
}

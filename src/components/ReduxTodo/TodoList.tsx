import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Todo } from './types';
import TodoItem from './TodoItem';
import { toggleItemCompletion, editItem, deleteItem, Action } from './state/actions';
import { State } from './state/types';

const TodoList = (props: Props) => {
  const { todos, ...passThroughProps } = props;
  return (
    <>
      {todos.map((item, index) => (
        <TodoItem key={item.id} item={item} index={index} {...passThroughProps} />
      ))}
    </>
  );
};

const getFilteredTodos = (todos: Todo[], filter: string) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter((t) => t.isComplete);
    case 'SHOW_ACTIVE':
      return todos.filter((t) => !t.isComplete);
    case 'SHOW_ALL':
    default:
      return todos;
  }
};

const mapStateToProps = (state: State) => ({
  todos: getFilteredTodos(state.todos, state.filters),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onToggleItem: (item: Todo, index: number) => {
    dispatch(toggleItemCompletion(item, index));
  },
  onEditItem: (item: Todo, index: number, text: string) => {
    dispatch(editItem(item, index, text));
  },
  onDeleteItem: (index: number) => {
    dispatch(deleteItem(index));
  },
});

type Props = {
  todos: Todo[];
  onToggleItem: (item: Todo, index: number) => void;
  onEditItem: (item: Todo, index: number, text: string) => void;
  onDeleteItem: (index: number) => void;
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

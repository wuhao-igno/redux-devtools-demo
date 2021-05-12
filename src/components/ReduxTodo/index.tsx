import React from 'react';
import Card from '../common/Card';
import TodoItemCreator from './TodoItemCreator';
import TodoList from './TodoList';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';

const ReduxTodo: React.FC = () => (
  <>
    <Card>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      <TodoList />
    </Card>
  </>
);

export default ReduxTodo;

import React from 'react';
import Card from '../common/Card';
import TodoItemCreator from './TodoItemCreator';
import TodoList from './TodoList';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';
import AutoIncrement from './AutoIncrement';

const ReduxTodo: React.FC = () => (
  <>
    <Card>
      <TodoListStats />
      <TodoListFilters />
      <AutoIncrement />
      <TodoItemCreator />
      <TodoList />
    </Card>
  </>
);

export default ReduxTodo;

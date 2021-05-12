import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoApp from '../reducers';

const composeEnhancers = composeWithDevTools({
  name: 'todoList',
  trace: true,
});

export const TodoProvider: React.FC = ({ children }) => {
  const store = createStore(todoApp, composeEnhancers());
  return <Provider store={store}>{children}</Provider>;
};

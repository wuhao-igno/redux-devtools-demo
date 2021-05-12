import reducers from '..';

test('添加待办事项', () => {
  let state;
  state = reducers(
    { todos: [], filter: '0' },
    { type: 'ADD_ITEM', id: 'f26eb46de94ed64eee0e3633a81805a6', text: '123' },
  );
  expect(state).toEqual({
    todos: [{ id: 'f26eb46de94ed64eee0e3633a81805a6', text: '123', isComplete: '-1' }],
    filter: '0',
  });
  state = reducers(
    {
      todos: [{ id: 'f26eb46de94ed64eee0e3633a81805a6', text: '123', isComplete: '-1' }],
      filter: '0',
    },
    { type: 'ADD_ITEM', id: '7b6418475f2f01a06d120e74cf9e386b', text: '234' },
  );
  expect(state).toEqual({
    todos: [
      { id: 'f26eb46de94ed64eee0e3633a81805a6', text: '123', isComplete: '-1' },
      { id: '7b6418475f2f01a06d120e74cf9e386b', text: '234', isComplete: '-1' },
    ],
    filter: '0',
  });
  state = reducers(
    {
      todos: [
        { id: 'f26eb46de94ed64eee0e3633a81805a6', text: '123', isComplete: '-1' },
        { id: '7b6418475f2f01a06d120e74cf9e386b', text: '234', isComplete: '-1' },
      ],
      filter: '0',
    },
    { type: 'ADD_ITEM', id: 'af2b97079033a126d3c8b7eb5b929e64', text: '345' },
  );
  expect(state).toEqual({
    todos: [
      { id: 'f26eb46de94ed64eee0e3633a81805a6', text: '123', isComplete: '-1' },
      { id: '7b6418475f2f01a06d120e74cf9e386b', text: '234', isComplete: '-1' },
      { id: 'af2b97079033a126d3c8b7eb5b929e64', text: '345', isComplete: '-1' },
    ],
    filter: '0',
  });
});

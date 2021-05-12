import reducers from '..';

test('reducers', () => {
  let state;
  state = reducers(
    {
      todos: [
        { id: 'f26eb46de94ed64eee0e3633a81805a6', text: '1234', isComplete: '-1' },
        { id: '7b6418475f2f01a06d120e74cf9e386b', text: '2345', isComplete: '-1' },
        { id: 'af2b97079033a126d3c8b7eb5b929e64', text: '3456', isComplete: '-1' },
      ],
      filter: '0',
    },
    { type: 'DELETE_ITEM', index: 0 },
  );
  expect(state).toEqual({
    todos: [
      { id: '7b6418475f2f01a06d120e74cf9e386b', text: '2345', isComplete: '-1' },
      { id: 'af2b97079033a126d3c8b7eb5b929e64', text: '3456', isComplete: '-1' },
    ],
    filter: '0',
  });
  state = reducers(
    {
      todos: [
        { id: '7b6418475f2f01a06d120e74cf9e386b', text: '2345', isComplete: '-1' },
        { id: 'af2b97079033a126d3c8b7eb5b929e64', text: '3456', isComplete: '-1' },
      ],
      filter: '0',
    },
    { type: 'DELETE_ITEM', index: 0 },
  );
  expect(state).toEqual({
    todos: [{ id: 'af2b97079033a126d3c8b7eb5b929e64', text: '3456', isComplete: '-1' }],
    filter: '0',
  });
  state = reducers(
    {
      todos: [{ id: 'af2b97079033a126d3c8b7eb5b929e64', text: '3456', isComplete: '-1' }],
      filter: '0',
    },
    { type: 'DELETE_ITEM', index: 0 },
  );
  expect(state).toEqual({ todos: [], filter: '0' });
});

import reducers from '..';

test('编辑待办事项', () => {
  let state;
  state = reducers(
    {
      todos: [
        { id: 'f26eb46de94ed64eee0e3633a81805a6', text: '123', isComplete: '-1' },
        { id: '7b6418475f2f01a06d120e74cf9e386b', text: '234', isComplete: '-1' },
        { id: 'af2b97079033a126d3c8b7eb5b929e64', text: '345', isComplete: '-1' },
      ],
      filter: '0',
    },
    {
      type: 'EDIT_ITEM',
      item: { id: 'f26eb46de94ed64eee0e3633a81805a6', text: '123', isComplete: '-1' },
      index: 0,
      text: '1234',
    },
  );
  expect(state).toEqual({
    todos: [
      { id: 'f26eb46de94ed64eee0e3633a81805a6', text: '1234', isComplete: '-1' },
      { id: '7b6418475f2f01a06d120e74cf9e386b', text: '234', isComplete: '-1' },
      { id: 'af2b97079033a126d3c8b7eb5b929e64', text: '345', isComplete: '-1' },
    ],
    filter: '0',
  });
  state = reducers(
    {
      todos: [
        { id: 'f26eb46de94ed64eee0e3633a81805a6', text: '1234', isComplete: '-1' },
        { id: '7b6418475f2f01a06d120e74cf9e386b', text: '234', isComplete: '-1' },
        { id: 'af2b97079033a126d3c8b7eb5b929e64', text: '345', isComplete: '-1' },
      ],
      filter: '0',
    },
    {
      type: 'EDIT_ITEM',
      item: { id: '7b6418475f2f01a06d120e74cf9e386b', text: '234', isComplete: '-1' },
      index: 1,
      text: '2345',
    },
  );
  expect(state).toEqual({
    todos: [
      { id: 'f26eb46de94ed64eee0e3633a81805a6', text: '1234', isComplete: '-1' },
      { id: '7b6418475f2f01a06d120e74cf9e386b', text: '2345', isComplete: '-1' },
      { id: 'af2b97079033a126d3c8b7eb5b929e64', text: '345', isComplete: '-1' },
    ],
    filter: '0',
  });
  state = reducers(
    {
      todos: [
        { id: 'f26eb46de94ed64eee0e3633a81805a6', text: '1234', isComplete: '-1' },
        { id: '7b6418475f2f01a06d120e74cf9e386b', text: '2345', isComplete: '-1' },
        { id: 'af2b97079033a126d3c8b7eb5b929e64', text: '345', isComplete: '-1' },
      ],
      filter: '0',
    },
    {
      type: 'EDIT_ITEM',
      item: { id: 'af2b97079033a126d3c8b7eb5b929e64', text: '345', isComplete: '-1' },
      index: 2,
      text: '3456',
    },
  );
  expect(state).toEqual({
    todos: [
      { id: 'f26eb46de94ed64eee0e3633a81805a6', text: '1234', isComplete: '-1' },
      { id: '7b6418475f2f01a06d120e74cf9e386b', text: '2345', isComplete: '-1' },
      { id: 'af2b97079033a126d3c8b7eb5b929e64', text: '3456', isComplete: '-1' },
    ],
    filter: '0',
  });
});

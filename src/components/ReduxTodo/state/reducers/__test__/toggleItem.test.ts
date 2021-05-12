import reducers from '..';

test('改变待办完成状态', () => {
  let state;
  state = reducers(
    {
      todos: [
        { id: 'a00ab24230a7a053b5292229551a5a93', text: '123', isComplete: '-1' },
        { id: 'ef2b4dfaa6c836a961b65bdd197311dd', text: '122', isComplete: '-1' },
        { id: '3c6a77c289117b7db693fb5b119d7442', text: '12345', isComplete: '-1' },
      ],
      filter: '0',
    },
    {
      type: 'TOGGLE_ITEM',
      item: { id: 'a00ab24230a7a053b5292229551a5a93', text: '123', isComplete: '-1' },
      index: 0,
    },
  );
  expect(state).toEqual({
    todos: [
      { id: 'a00ab24230a7a053b5292229551a5a93', text: '123', isComplete: '1' },
      { id: 'ef2b4dfaa6c836a961b65bdd197311dd', text: '122', isComplete: '-1' },
      { id: '3c6a77c289117b7db693fb5b119d7442', text: '12345', isComplete: '-1' },
    ],
    filter: '0',
  });
  state = reducers(
    {
      todos: [
        { id: 'a00ab24230a7a053b5292229551a5a93', text: '123', isComplete: '1' },
        { id: 'ef2b4dfaa6c836a961b65bdd197311dd', text: '122', isComplete: '-1' },
        { id: '3c6a77c289117b7db693fb5b119d7442', text: '12345', isComplete: '-1' },
      ],
      filter: '0',
    },
    {
      type: 'TOGGLE_ITEM',
      item: { id: 'ef2b4dfaa6c836a961b65bdd197311dd', text: '122', isComplete: '-1' },
      index: 1,
    },
  );
  expect(state).toEqual({
    todos: [
      { id: 'a00ab24230a7a053b5292229551a5a93', text: '123', isComplete: '1' },
      { id: 'ef2b4dfaa6c836a961b65bdd197311dd', text: '122', isComplete: '1' },
      { id: '3c6a77c289117b7db693fb5b119d7442', text: '12345', isComplete: '-1' },
    ],
    filter: '0',
  });
  state = reducers(
    {
      todos: [
        { id: 'a00ab24230a7a053b5292229551a5a93', text: '123', isComplete: '1' },
        { id: 'ef2b4dfaa6c836a961b65bdd197311dd', text: '122', isComplete: '1' },
        { id: '3c6a77c289117b7db693fb5b119d7442', text: '12345', isComplete: '-1' },
      ],
      filter: '0',
    },
    {
      type: 'TOGGLE_ITEM',
      item: { id: '3c6a77c289117b7db693fb5b119d7442', text: '12345', isComplete: '-1' },
      index: 2,
    },
  );
  expect(state).toEqual({
    todos: [
      { id: 'a00ab24230a7a053b5292229551a5a93', text: '123', isComplete: '1' },
      { id: 'ef2b4dfaa6c836a961b65bdd197311dd', text: '122', isComplete: '1' },
      { id: '3c6a77c289117b7db693fb5b119d7442', text: '12345', isComplete: '1' },
    ],
    filter: '0',
  });
  state = reducers(
    {
      todos: [
        { id: 'a00ab24230a7a053b5292229551a5a93', text: '123', isComplete: '1' },
        { id: 'ef2b4dfaa6c836a961b65bdd197311dd', text: '122', isComplete: '1' },
        { id: '3c6a77c289117b7db693fb5b119d7442', text: '12345', isComplete: '1' },
      ],
      filter: '0',
    },
    {
      type: 'TOGGLE_ITEM',
      item: { id: 'ef2b4dfaa6c836a961b65bdd197311dd', text: '122', isComplete: '1' },
      index: 1,
    },
  );
  expect(state).toEqual({
    todos: [
      { id: 'a00ab24230a7a053b5292229551a5a93', text: '123', isComplete: '1' },
      { id: 'ef2b4dfaa6c836a961b65bdd197311dd', text: '122', isComplete: '-1' },
      { id: '3c6a77c289117b7db693fb5b119d7442', text: '12345', isComplete: '1' },
    ],
    filter: '0',
  });
  state = reducers(
    {
      todos: [
        { id: 'a00ab24230a7a053b5292229551a5a93', text: '123', isComplete: '1' },
        { id: 'ef2b4dfaa6c836a961b65bdd197311dd', text: '122', isComplete: '-1' },
        { id: '3c6a77c289117b7db693fb5b119d7442', text: '12345', isComplete: '1' },
      ],
      filter: '0',
    },
    {
      type: 'TOGGLE_ITEM',
      item: { id: 'a00ab24230a7a053b5292229551a5a93', text: '123', isComplete: '1' },
      index: 0,
    },
  );
  expect(state).toEqual({
    todos: [
      { id: 'a00ab24230a7a053b5292229551a5a93', text: '123', isComplete: '-1' },
      { id: 'ef2b4dfaa6c836a961b65bdd197311dd', text: '122', isComplete: '-1' },
      { id: '3c6a77c289117b7db693fb5b119d7442', text: '12345', isComplete: '1' },
    ],
    filter: '0',
  });
  state = reducers(
    {
      todos: [
        { id: 'a00ab24230a7a053b5292229551a5a93', text: '123', isComplete: '-1' },
        { id: 'ef2b4dfaa6c836a961b65bdd197311dd', text: '122', isComplete: '-1' },
        { id: '3c6a77c289117b7db693fb5b119d7442', text: '12345', isComplete: '1' },
      ],
      filter: '0',
    },
    {
      type: 'TOGGLE_ITEM',
      item: { id: '3c6a77c289117b7db693fb5b119d7442', text: '12345', isComplete: '1' },
      index: 2,
    },
  );
  expect(state).toEqual({
    todos: [
      { id: 'a00ab24230a7a053b5292229551a5a93', text: '123', isComplete: '-1' },
      { id: 'ef2b4dfaa6c836a961b65bdd197311dd', text: '122', isComplete: '-1' },
      { id: '3c6a77c289117b7db693fb5b119d7442', text: '12345', isComplete: '-1' },
    ],
    filter: '0',
  });
});

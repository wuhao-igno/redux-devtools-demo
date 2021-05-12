import reducers from '..';

test('更变筛选项', () => {
  let state;
  state = reducers({ todos: [], filter: '0' }, { type: 'SET_FILTER', filter: '1' });
  expect(state).toEqual({ todos: [], filter: '1' });
  state = reducers({ todos: [], filter: '1' }, { type: 'SET_FILTER', filter: '-1' });
  expect(state).toEqual({ todos: [], filter: '-1' });
  state = reducers({ todos: [], filter: '-1' }, { type: 'SET_FILTER', filter: '0' });
  expect(state).toEqual({ todos: [], filter: '0' });
});

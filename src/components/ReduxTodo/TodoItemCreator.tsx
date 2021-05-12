import React, { useState, useCallback } from 'react';
import { connect, DispatchProp } from 'react-redux';
import Button from '../common/Button';
import Input from '../common/Input';
import { addItem } from './state/actions';

const TodoItemCreator = (props: DispatchProp) => {
  const { dispatch } = props;
  const [inputValue, setInputValue] = useState('');

  const onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  const addTodoItem = useCallback(() => {
    dispatch(addItem(inputValue));
    setInputValue('');
  }, [dispatch, inputValue, setInputValue]);

  return (
    <div className="m-2">
      <Input value={inputValue} onChange={onChange} />
      <Button onClick={addTodoItem}>新增</Button>
    </div>
  );
};

export default connect()(TodoItemCreator);

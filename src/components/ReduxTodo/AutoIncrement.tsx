import React, { useState, useEffect } from 'react';
import { connect, DispatchProp } from 'react-redux';
import Button from '../common/Button';
import { addItem, doneAll } from './state/actions';

let interval: NodeJS.Timeout;

let autoIncrementIndex = 1;

const TodoItemCreator = (props: DispatchProp) => {
  const { dispatch } = props;
  const [isAutoIncrement, setIsAutoIncrement] = useState(false);

  useEffect(() => {
    if (isAutoIncrement) {
      interval = setInterval(() => {
        dispatch(addItem(`自动生成的 TODO 项 ${autoIncrementIndex}`));
        autoIncrementIndex += 1;
        if (Math.random() > 0.95) {
          dispatch(doneAll());
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
  }, [dispatch, isAutoIncrement]);

  return (
    <div className="m-2">
      <Button onClick={() => setIsAutoIncrement((auto) => !auto)}>
        {isAutoIncrement ? '停止自动增加' : '自动增加'}
      </Button>
    </div>
  );
};

export default connect()(TodoItemCreator);

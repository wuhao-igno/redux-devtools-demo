import React from 'react';
import { connect } from 'react-redux';
import { Todo, COMPLETE_STATUS } from './types';
import { State } from './state/types';

type Props = {
  totalNum: number;
  totalCompletedNum: number;
  totalUncompletedNum: number;
  percentCompleted: number;
};

const TodoListStats = (props: Props) => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } = props;
  const formattedPercentCompleted = Math.round(percentCompleted * 100);
  return (
    <ul>
      <li className="m-2">总待办数: {totalNum}</li>
      <li className="m-2">已完成待办: {totalCompletedNum}</li>
      <li className="m-2">未完成待办: {totalUncompletedNum}</li>
      <li className="m-2">完成待办比例: {formattedPercentCompleted}</li>
    </ul>
  );
};

const getStats = (todos: Todo[]) => {
  const totalNum = todos.length;
  const totalCompletedNum = todos.filter((item) => item.isComplete === COMPLETE_STATUS.COMPLETED)
    .length;
  const totalUncompletedNum = totalNum - totalCompletedNum;
  const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;
  return {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  };
};

const mapStateToProps = (state: State) => ({
  ...getStats(state.todos),
});

export default connect(mapStateToProps)(TodoListStats);

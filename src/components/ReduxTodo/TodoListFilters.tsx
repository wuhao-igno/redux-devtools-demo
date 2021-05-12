/* eslint-disable react/require-default-props */
import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import Select from '../common/Select';
import { setFilter } from './state/actions';
import { State } from './state/types';

const Filters = (props: Props) => {
  const { filter, onChangeFilter: handleChangeFilter } = props;
  const updateFilter = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
    handleChangeFilter(value);
  };
  return (
    <div className="m-2">
      <span>筛选项: </span>
      <Select value={filter} onChange={updateFilter}>
        <option value="0">全部</option>
        <option value="1">已完成</option>
        <option value="-1">未完成</option>
      </Select>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  filter: state.filters,
});

const mapDispatchToProps = (dispatch: Dispatch<ReturnType<typeof setFilter>>) => ({
  onChangeFilter: (filter: string) => {
    dispatch(setFilter(filter));
  },
});

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const TodoListFilters = connect(mapStateToProps, mapDispatchToProps)(Filters);

export default TodoListFilters;

import React, { useCallback } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import { Todo, COMPLETE_STATUS } from './types';

type Props = {
  item: Todo;
  index: number;
  onToggleItem: (item: Todo, index: number) => void;
  onEditItem: (item: Todo, index: number, text: string) => void;
  onDeleteItem: (index: number) => void;
};

const TodoItem = (props: Props) => {
  const {
    item,
    index,
    onToggleItem: handleToggleItem,
    onEditItem: handleEditItem,
    onDeleteItem: handleDeleteItem,
  } = props;

  const handleTextChange = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      handleEditItem(item, index, value);
    },
    [item, index, handleEditItem],
  );

  const handleClickDeleteButton = useCallback(() => {
    handleDeleteItem(index);
  }, [index, handleDeleteItem]);

  const handleCompletionChange = useCallback(() => {
    handleToggleItem(item, index);
  }, [handleToggleItem, item, index]);

  return (
    <div className="flex items-center m-2">
      <input
        className="border-solid border-2 rounded-sm border-gray-300 h-4 w-4 mr-2"
        type="checkbox"
        checked={item.isComplete === COMPLETE_STATUS.COMPLETED}
        onChange={handleCompletionChange}
      />
      <Input value={item.text} onChange={handleTextChange} />
      <Button onClick={handleClickDeleteButton}>删除</Button>
    </div>
  );
};

export default TodoItem;

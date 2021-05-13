import React from 'react';

const ShowMoreButton: React.FC<{
  total: number;
  onShowMore: () => void;
}> = ({ total, onShowMore }) => (
  <button
    onClick={onShowMore}
    type="button"
    className={`rounded-sm border-gray-300 border-2 border-solid mx-2 px-1 ${
      total > 8 ? 'text-red-600' : ''
    }`}
  >
    显示更多；剩余{8 - total}条
  </button>
);

export default ShowMoreButton;

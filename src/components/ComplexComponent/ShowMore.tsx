import React, { useEffect } from 'react';
import MoreList from './MoreList';
import ShowMoreButton from './ShowMoreButton';

const ShowMore: React.FC<{
  showMore: boolean;
  list: string[];
  onShowMore: () => void;
  setError: React.Dispatch<React.SetStateAction<string>>;
}> = ({ showMore, list, onShowMore, setError }) => {
  useEffect(() => {
    if (Math.random() > 0.95) {
      setError('出现错误');
    }
  }, [setError]);
  return (
    <>
      <ShowMoreButton total={list.length} onShowMore={onShowMore} />
      {showMore ? (
        <div className="m-2 p-1">
          <div className="m-1">由 Props 控制的隐藏内容</div>
          <div className="m-1">
            <MoreList list={list} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ShowMore;

import React, { useCallback, useState } from 'react';
import Card from '../common/Card';
import ShowMore from './ShowMore';

const ComplexComponent: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [error, setError] = useState('');
  const [list, setList] = useState<string[]>([]);

  const handleShowMore = useCallback(() => {
    if (list.length === 0) {
      setShowMore(true);
    }
    if (list.length > 7) {
      alert('无更多内容');
    } else {
      setList(list.concat([`${list.length + 1}: random content`]));
    }
  }, [list]);

  return (
    <Card>
      <div className="m-2">默认显示的内容</div>
      {error ? <div className="m-2 text-red-600">存在错误: {error}</div> : null}
      <ShowMore list={list} onShowMore={handleShowMore} showMore={showMore} setError={setError} />
    </Card>
  );
};

export default ComplexComponent;

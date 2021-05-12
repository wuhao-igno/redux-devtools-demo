import React, { useEffect, useState } from 'react';
import Card from '../common/Card';
import Input from '../common/Input';

const ComplexComponent: React.FC<{ showMore: boolean }> = ({ showMore }) => {
  const [error, setError] = useState('');
  useEffect(() => {
    if (Math.random() > 0.95) {
      setError('出现错误');
    }
  }, []);
  return (
    <Card>
      <div className="m-2">默认显示的内容</div>
      {showMore ? (
        <div className="m-2 p-1">
          <div className="m-1">由 Props 控制的隐藏内容</div>
          <div className="m-1">
            <Input />
            {error ? <div className="text-xs text-red-600 font-light">{error}</div> : null}
          </div>
        </div>
      ) : null}
    </Card>
  );
};

export default ComplexComponent;

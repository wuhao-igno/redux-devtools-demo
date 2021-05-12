import React, { useEffect } from 'react';
import { useState, StateInspector } from 'reinspect';
import Button from '../common/Button';
import Card from '../common/Card';
import Input from '../common/Input';

const ReinspectComponent = () => {
  const [showMore, setShowMore] = useState(false, 'showMore');
  const [error, setError] = useState('', 'error');
  const [value, setValue] = useState('', 'value');

  useEffect(() => {
    if (value && value.length > 10) {
      setError('输入内容过多');
    } else {
      setError('');
    }
  }, [value]);

  return (
    <Card>
      <div className="m-2">默认显示的内容</div>
      <div className="m-2">
        <Button onClick={() => setShowMore(true)}>显示隐藏内容</Button>
      </div>
      {showMore ? (
        <div className="m-2 p-1">
          <div className="m-1">由 Props 控制的隐藏内容</div>
          <div className="m-1">
            <Input value={value} onChange={(e) => setValue(e.target.value)} />
            {error ? <div className="text-xs text-red-600 font-light">{error}</div> : null}
          </div>
        </div>
      ) : null}
    </Card>
  );
};

export default () => (
  <StateInspector name="ReinspectComponent">
    <ReinspectComponent />
  </StateInspector>
);

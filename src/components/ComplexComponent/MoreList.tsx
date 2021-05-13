/* eslint-disable react/no-array-index-key */
import React from 'react';

interface Props {
  list: string[];
}

const MoreList: React.FC<Props> = (props) => {
  const { list } = props;

  return (
    <>
      {list.map((line, index) => (
        <div key={index} className="m-1 font-light">
          {line}
        </div>
      ))}
    </>
  );
};

export default MoreList;

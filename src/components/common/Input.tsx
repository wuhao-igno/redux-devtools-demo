import React from 'react';

const Input = <T extends string | number | readonly string[] | undefined = string>({
  value,
  onChange,
}: {
  value?: T;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) => (
  <input
    className="border-solid border-2 rounded-sm border-gray-300 px-2"
    type="text"
    onChange={onChange}
    value={value}
  />
);

export default Input;

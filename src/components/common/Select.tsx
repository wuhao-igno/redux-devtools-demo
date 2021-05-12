import React from 'react';

const Select = <T extends string | number | readonly string[] | undefined = string>({
  value,
  onChange,
  children,
}: {
  value?: T;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  children: React.ReactNode;
}) => (
  <select
    className="border-solid border-2 rounded-sm border-gray-300"
    value={value}
    onChange={onChange}
  >
    {children}
  </select>
);

export default Select;

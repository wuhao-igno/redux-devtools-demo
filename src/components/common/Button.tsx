import React from 'react';

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => (
  <button
    onClick={onClick}
    type="button"
    className="rounded-sm border-gray-300 border-2 border-solid mx-2 px-1"
  >
    {children}
  </button>
);

export default Button;

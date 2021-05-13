import React from 'react';

const Button = ({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}) => (
  <button
    onClick={onClick}
    type="button"
    className="rounded-sm border-gray-300 border-2 border-solid mx-2 px-1"
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;

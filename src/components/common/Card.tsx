import React from 'react';

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-md border-solid bg-gray-50 shadow-md p-4">{children}</div>
);

export default Card;

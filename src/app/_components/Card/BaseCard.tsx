import React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

const BaseCard: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`${className} rounded-md p-3 bg-white border`}>
      {children}
    </div>
  );
};

export default BaseCard;
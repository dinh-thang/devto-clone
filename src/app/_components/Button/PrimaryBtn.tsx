import React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onclick?: () => void;
}

const PrimaryBtn: React.FC<ButtonProps> = ({ children, className, onclick }) => {
  return (
    <button onClick={onclick} className={`h-[40px] text-base hover:bg-[#3b49df] px-2 hover:text-white border border-[#3b49df] text-[#3b49df] rounded-md ${className}`}>
      <span className="hover:underline">{children}</span>
    </button>
  );
};

export default PrimaryBtn;
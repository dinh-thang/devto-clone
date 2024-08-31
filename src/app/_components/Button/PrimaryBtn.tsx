import React from 'react';
import {BTN_PRIMARY_BG} from "~/app/_constants/styles";

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onclick?: () => void;
}

const PrimaryBtn: React.FC<ButtonProps> = ({ children, className, onclick }) => {
  return (
    <button onClick={onclick} className={`${className} h-[27px] text-[10px] hover:bg-[#3b49df] px-[8px] hover:text-white border border-[#3b49df] text-[#3b49df] rounded`}>
      <span className="hover:underline">{children}</span>
    </button>
  );
};

export default PrimaryBtn;
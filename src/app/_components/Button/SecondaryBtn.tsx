import React from 'react';
import {type ButtonProps} from "~/app/_components/Button/PrimaryBtn";

const SecondaryBtn: React.FC<ButtonProps> = ({ children, className, onclick }) => {
  return (
    <button onClick={onclick} className={`${className} hover:underline h-[40px] text-[16px] text-black/50 hover:bg-[#3b49df]/15 rounded px-[8px] hover:text-[#3b49df]`}>
      {children}
    </button>
  );
};

export default SecondaryBtn;
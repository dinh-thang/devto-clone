import React from 'react';
import {type ButtonProps} from "~/app/_components/Button/PrimaryBtn";

const SecondaryBtn: React.FC<ButtonProps> = ({ children, className, onclick }) => {
  return (
    <button onClick={onclick} className={`${className} h-[27px] text-[10px] hover:bg-[#3b49df]/15 rounded px-[8px] hover:text-[#3b49df]`}>
      <span className="hover:underline">{children}</span>
    </button>
  );
};

export default SecondaryBtn;
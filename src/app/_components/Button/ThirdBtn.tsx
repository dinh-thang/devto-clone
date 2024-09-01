import React from 'react';
import {type ButtonProps} from "~/app/_components/Button/PrimaryBtn";

const ThirdBtn: React.FC<ButtonProps> = ({ children, onclick }) => {
  return (
    <button onClick={onclick} className="py-2 px-3 rounded hover:bg-white hover:text-[#3b49d] text-base">
      {children}
    </button>
  );
};

export default ThirdBtn;
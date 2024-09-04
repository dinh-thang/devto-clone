import React from 'react';
import ThirdBtn from "~/app/_components/Button/ThirdBtn";

const NavBar = ({ className="" } : {className?: string}) => {
  const navList: string[] = [
    "Relevant",
    "Latest",
    "Top",
  ]

  return (
    <div className={`${className} flex flex-row w-full`}>
      {navList.map((item, index) => (
        <ThirdBtn key={index}>
          {item}
        </ThirdBtn>
      ))}
    </div>
  );
};

export default NavBar;
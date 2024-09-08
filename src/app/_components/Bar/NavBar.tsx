"use client"

import React from 'react';
import ThirdBtn from "~/app/_components/Button/ThirdBtn";
import Link from "next/link";
import {pageRoutes} from "~/app/_constants/pageRoutes";

const NavBar = ({ className="", currentTab } : {className?: string, currentTab: string}) => {
  const navList = [
    {
      name: "Relevant",
      link: pageRoutes.HOME,
    },
    {
      name: "Latest",
      link: pageRoutes.LATEST,
    },
    {
      name: "Top",
      link: pageRoutes.TOP,
    },
  ]
  const [selected, setSelected] = React.useState(currentTab);

  return (
    <div className={`${className} flex flex-row w-full`}>
      {navList.map((item, index) => (
        <ThirdBtn onclick={() => setSelected(item.name)} key={index}>
          <Link href={item.link} className={`text-lg ${item.name === selected ? 'font-bold' : ''}`}>{item.name}</Link>
        </ThirdBtn>
      ))}
    </div>
  );
};

export default NavBar;
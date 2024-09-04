import React from 'react';
import SearchBox from "~/app/_components/Header/SearchBox";
import DevToLogo from "~/app/_components/Icon/DevToLogo";

const HeaderBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-10">
      <div className="mx-2 lg:mx-[2vw] xl:mx-[4vw] 2xl:mx-[8vw] flex h-[56px]">
        <DevToLogo/>
        <SearchBox/>
      </div>
    </header>
);
};

export default HeaderBar;
import React from 'react';
import SearchBar from "~/app/_components/Header/SearchBar";
import DevToLogo from "~/app/_components/Icon/DevToLogo";

const HeaderBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-10">
      <div className="mx-4 md:mx-8 lg:mx-14 xl:mx-48 flex h-[56px]">
        <DevToLogo/>
        <SearchBar/>
      </div>
    </header>
  );
};

export default HeaderBar;
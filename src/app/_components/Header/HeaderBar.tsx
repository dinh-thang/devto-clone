import React from 'react';
import SearchBox from "~/app/_components/Header/SearchBox";
import DevToLogo from "~/app/_components/Icon/DevToLogo";
import AuthSection from "~/app/_components/Header/AuthSection";

const HeaderBar = () => {
  return (
    <header className="sticky top-0 left-0 right-0 bg-white h-14 shadow z-50">
      <div className="flex items-center justify-center mx-auto px-4 max-w-1380px h-full">
        <DevToLogo/>
        <SearchBox/>
        <div className="flex-grow"/>
        <AuthSection/>
      </div>
    </header>
);
};

export default HeaderBar;
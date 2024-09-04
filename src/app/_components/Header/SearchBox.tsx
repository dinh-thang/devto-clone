"use client"

import React from 'react';

import SearchIcon from "~/app/_components/Icon/SearchIcon";
import AuthSection from "~/app/_components/Header/AuthSection";

const SearchBox = () => {

  return (
    <form className="flex w-full ml-4 h-full content-center items-center">
      <div className="flex border border-black/15 h-[40px] rounded w-1/2">
        <button className="w-[40px] h-[40px] relative group flex items-center justify-center hover:bg-[#2f3ab2]/15 rounded">
          <SearchIcon className="text-black w-[40px] h-[25px]"/>
        </button>

        <div className="flex items-center w-full">
          <input type="text" placeholder="Search..." className="flex-grow placeholder-black/75 text-base h-full border-none outline-none"/>
          <a className="text-xs mr-2 text-gray-500" href="https://www.algolia.com/developers/?utm_source=devto&utm_medium=referral">
            Powered by Algolia
          </a>
        </div>
      </div>

      <AuthSection/>
    </form>
  );
};

export default SearchBox;
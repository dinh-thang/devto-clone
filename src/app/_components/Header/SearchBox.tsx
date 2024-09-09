import React from 'react';

import SearchIcon from "~/app/_components/Icon/SearchIcon";

const SearchBox = () => {

  return (
    <div className="flex mx-4 content-center items-center w-[450px] lg:w-[680px]">
      <form className="flex border border-black/15 rounded-md w-full h-full">
        <button className="py-1.5 hover:bg-[#2f3ab2]/15 rounded-md">
          <SearchIcon className="mx-1.5"/>
        </button>

        <div className="flex items-center w-full">
          <input type="text" placeholder="Search..." className="flex-grow placeholder-black/75 text-base h-full border-none outline-none"/>
          <a className="text-xs mr-2 text-gray-500" href="https://www.algolia.com/developers/?utm_source=devto&utm_medium=referral">
            Powered by Algolia
          </a>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
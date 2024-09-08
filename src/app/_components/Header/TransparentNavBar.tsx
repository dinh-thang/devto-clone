import React from 'react';
import DevToLogo from "~/app/_components/Icon/DevToLogo";

const TransparentNavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 z-10">
      <div className="flex items-center justify-center mx-auto px-4 max-w-1380px h-full">
        <DevToLogo/>
        <div className="pl-4 font-medium">
          <p>Create Post</p>
        </div>

        <div className="flex-grow"/>
      </div>
    </header>
  );
};

export default TransparentNavBar;
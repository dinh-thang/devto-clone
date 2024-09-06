import React from 'react';
import {HydrateClient} from "~/trpc/server";
import Menu from "~/app/_components/SideMenu/Menu";
import NavBar from "~/app/_components/Bar/NavBar";
import PostsContainer from "~/app/_components/Container/PostsContainer";

const Page = () => {
  return (
    <HydrateClient>
      <div className="grid grid-cols-10 gap-4 w-full h-full">
        <div className="col-start-1 col-span-2">
          <Menu/>
        </div>

        <div className="col-start-3 col-span-5">
          <NavBar currentTab="Top" className="mb-2"/>
          <PostsContainer/>
        </div>

        <div className="col-span-3 bg-white rounded border">
        </div>
      </div>
    </HydrateClient>
  );
};

export default Page;
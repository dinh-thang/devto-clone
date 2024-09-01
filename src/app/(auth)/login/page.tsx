import React from 'react';

import OAuthLoginForm from "~/app/_components/Form/OAuthLoginForm";
import DevToLogo from "~/app/_components/Icon/DevToLogo";

const Page = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-start-2 flex justify-center">
        <DevToLogo width={60} height={48}/>
      </div>

      <div className="col-start-2 flex flex-col justify-center mt-4">
        <h1 className="font-black text-xl text-center">Join the DEV Community</h1>
        {/* TODO: make the number of user real time */}
        <p className="text-black/50 text-xs text-center ">DEV Community is a community of 1,982,894 amazing developers</p>
      </div>

      <div className="col-start-2 mt-4 ">
        <OAuthLoginForm />
      </div>

      <div>

      </div>
    </div>
  );
};

export default Page;
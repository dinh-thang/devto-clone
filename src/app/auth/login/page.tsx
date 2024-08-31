import React from 'react';

import OAuthLoginForm from "~/app/_components/Form/OAuthLoginForm";
import DevToLogo from "~/app/_components/Icon/DevToLogo";

const Page = () => {
  return (
    <div className="flex flex-col flex-grow">
      <div className="flex flex-col flex-grow">
        <DevToLogo/>
        <h1>Join the DEV Community</h1>
        {/* TODO: make the number of user real time */}
        <p>DEV Community is a community of 1,982,894 amazing developers</p>
      </div>

      <div>
        <OAuthLoginForm />
      </div>

      <div>

      </div>

      <div>
      </div>
    </div>
  );
};

export default Page;
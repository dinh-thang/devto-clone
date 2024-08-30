import React from 'react';
import Image from 'next/image';

import LoginForm from "~/components/Form/LoginForm";
import OAuthLoginForm from "~/components/Form/OAuthLoginForm";

const Page = () => {
  return (
    <div>
      <div>
        <Image src="/devto-logo.png" alt="logo" width="60" height="48" />
      </div>

      <div>
        <OAuthLoginForm />
      </div>

      <div>
        <loginForm />
      </div>
    </div>
  );
};

export default Page;
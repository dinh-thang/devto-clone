import React from 'react';
import Image from 'next/image';

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
      </div>
    </div>
  );
};

export default Page;
import React from 'react';
import Image from "next/image";
import {pageRoutes} from "~/app/_constants/pageRoutes";
import Link from "next/link";

const DevToLogo = ({ width=50, height=40}) => {
  return (
    <Link href={pageRoutes.HOME} legacyBehavior passHref>
      <a>
        <Image
          src="/devto-logo.png"
          width={width}
          height={height}
          alt="logo"
        />
      </a>
    </Link>
  );
};

export default DevToLogo;
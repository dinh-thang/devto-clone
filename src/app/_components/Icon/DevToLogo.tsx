import React from 'react';
import Image from "next/image";

const DevToLogo = () => {
  return (
    <Image src="/devto-logo.png" width={34} height={29} className="py-1.5" alt='logo'/>
  );
};

export default DevToLogo;
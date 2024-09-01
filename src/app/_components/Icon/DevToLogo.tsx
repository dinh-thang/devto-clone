import React from 'react';
import Image from "next/image";

const DevToLogo = () => {
  return (
    <Image src="/devto-logo.png" width={50} height={40} className="py-1.5" alt='logo'/>
  );
};

export default DevToLogo;
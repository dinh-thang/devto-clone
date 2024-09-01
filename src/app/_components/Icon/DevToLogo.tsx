import React from 'react';
import Image from "next/image";

const DevToLogo = ({ width=50, height=40}) => {
  return (
    <Image src="/devto-logo.png" width={width} height={height} className="py-1.5" alt='logo'/>
  );
};

export default DevToLogo;
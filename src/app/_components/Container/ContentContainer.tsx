import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const ContentContainer : React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="px-4 md:px-8 lg:px-14 xl:px-48 bg-gray-100 h-screen w-full pt-2">
      {children}
    </div>
  );
};

export default ContentContainer;
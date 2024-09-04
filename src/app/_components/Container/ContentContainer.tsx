import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const ContentContainer : React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="px-2 lg:px-[2vw] xl:px-[4vw] 2xl:px-[8vw] h-full w-full pt-3">
      {children}
    </div>
  );
};

export default ContentContainer;
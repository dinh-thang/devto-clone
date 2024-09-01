import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const ContentContainer : React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="px-2 lg:px-[4vw] xl:px-[8vw] 2xl:px-[12vw] h-full w-full pt-3">
      {children}
    </div>
  );
};

export default ContentContainer;
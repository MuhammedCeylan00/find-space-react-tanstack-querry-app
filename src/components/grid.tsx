import React from 'react';

interface Props {
    children: React.ReactNode;
};

const GridContainer = ({ children }: Props) => {
  return (
    <div className='mr-[200px] ml-[200px]'>
      {children}
    </div>
  )
}

export default GridContainer;

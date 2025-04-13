import { memo } from 'react';

import { IWelcomeCardProps } from "../interfaces";

const WelcomeCard = ({ title, description }: IWelcomeCardProps) => (
  <div className="bg-gradient-to-r from-lime-100 to-lime-200 p-8 rounded-lg mb-8">
    <div className='flex flex-col items-center justify-center w-full'>
      <h1 className='text-3xl font-bold text-gray-800 mb-4'>{title}</h1>
      <p className="text-gray-600 text-center max-w-2xl mb-4">
       {description}
      </p>
    </div>
  </div>
)

export default memo(WelcomeCard);

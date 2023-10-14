import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='my-2 md:my-4 lg:my-6'>
      <Link to='/' className='my-4 mx-4 px-3 py-2 bg-lime-400 hover:bg-lime-500 rounded-lg font-semibold text-xl hover:text-white'>
        Go to Home
      </Link>
      <div className='flex justify-center'>
        <img
          src='https://i.ibb.co/1ZYVdV8/Taras-Migulko.gif'
          alt=''
          className='w-9/12 md:h-[500px] rounded-lg'
        />
      </div>
    </div>
  );
};

export default ErrorPage;
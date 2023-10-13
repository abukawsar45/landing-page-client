import React from 'react';

const AllinOne = () => {
  return (
    <div className='flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-8'>
      <div className='flex flex-col justify-center w-full lg:w-11/12 '>
        <h3 className='text-xl md:text-3xl lg:text-6xl headLine-font'>
          <span className='font-semibold  text-transparent bg-clip-text bg-gradient-to-br from-[#0076CE] to-[#9400D3] '>
            All-in-One
          </span>{' '}
          platform that Makes Easier
        </h3>
        <p className='mt-2 md:mt-3 lg:mt-4 text-black text-2xl '>We are more than a platform; We are your success partner, Discover out services to achieve your business and educational goals
        </p>
        <div className='my-4 md:mt-6 lg:mt-14'>
          <div>
             <p className='mt-2 md:mt-3 lg:mt-4 text-[#616161] '>
          <span className='uppercase font-semibold'>Connect</span> with up </p>
          </div>
        </div>
      </div>
      <div className='flex md:gap-2 lg:gap-4 md:justify-center w-full lg:w-11/12 '>
        
      </div>
    </div>
  );
};

export default AllinOne;
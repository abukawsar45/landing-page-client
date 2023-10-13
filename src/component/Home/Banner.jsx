import React from 'react';
import image1 from './../../assets/banner1.png'
import image2 from './../../assets/banner2.png'
import image3 from './../../assets/banner3.png'
import './Banner.css'

const Banner = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-2 md:gap-4 lg:gap-8'>
      <div className='flex flex-col justify-center w-full lg:w-11/12 '>
        <h3 className='text-xl md:text-3xl lg:text-6xl headLine-font'>
          Find{' '}
          <span className='font-semibold  text-transparent bg-clip-text bg-gradient-to-br from-[#0076CE] to-[#9400D3] '>
            Partners
          </span>{' '}
          (CAs) available online
        </h3>
        <p className='mt-2 md:mt-3 lg:mt-4 text-slate-600 '>
          <span className='uppercase font-semibold'>Connect</span> with us where
          your services are listed and visible to a myriad of businesses seeking
          CA&apos;s for compliance support.
        </p>
        <div className='my-4 md:mt-6 lg:mt-14'>
          <input
            type='text'
            placeholder='Search by name'
            className='relative rounded-lg px-4 md:px-8 py-2 lg:py-7 text-xl text-[#AEB0B4] border-2 border-[#BFBFBF]  w-8/12 lg:w-8/12'
          />
          <button className='absolute  bg-[#0076CE] text-xl border-2 border-gray-300 text-white rounded-lg -ml-8 px-4 md:px-16 py-2 lg:py-7 text-center'>
            Search
          </button>
        </div>
      </div>
      <div className='flex md:gap-2 lg:gap-4 w-full lg:w-11/12 '>
        <div className='lg:mt-[17%]'>
          <img src={image1} alt='' />
        </div>
        <div>
          <img src={image2} alt='' className='lg:mb-[17%]' />
        </div>
        <div>
          <img src={image3} alt='' className='lg:mt-[9%] lg:mb-[9%]' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
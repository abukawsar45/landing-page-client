import React, { useState, useEffect } from 'react';
import SingleCard from './../SingleCard/SingleCard';
import vectorbg from './../../assets/vectorbg.png';

const CardSection = () => {
  const [getData, setGetData] = useState([]);
  // console.log(getData);

  const backgroundImageStyle = {
    backgroundImage: `url(${vectorbg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setGetData(data);
      });
  }, []);
  return (
    <div
      style={backgroundImageStyle}
      className='my-4 md:my-6 lg:my-32 px-2 md:px-4 lg:px-12 '
    >
      <div className='md:text-center'>
        <h3 className='text-2xl md:text-3xl lg:text-6xl headLine-font'>
          Want to
          <span className='font-semibold  text-transparent bg-clip-text bg-gradient-to-br from-[#0076CE] to-[#9400D3] '>
            {' '}
            Join
          </span>{' '}
          Us?
        </h3>
        <p className='my-2 md:my-3 lg:my-4 text-2xl'>
          To remain with us, it is essential that you diligently follow the
          steps provided{' '}
        </p>
      </div>
      <div className=' grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8'>
        {getData.map((item) => (
          <SingleCard key={item.id} item={item} />
        ))}
      </div>

      <p className='py-3 md:py-6 lg:py-8'>
        * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200
        <span className='text-semibold'>every day</span> until you file the form
        . There is no maximum penalty amount. So, if you don't file the form for
        a year, you will owe ₹73,000 per form
      </p>
    </div>
  );
};

export default CardSection;

import React, { useState, useEffect } from 'react';
import SingleCard from './../SingleCard/SingleCard';
import vectorbg from './../../assets/vectorbg.png';
import loading from './../../assets/loading.gif';
import Banner from './../Banner/Banner';

const CardSection = () => {
  const [getData, setGetData] = useState([]);
  const [loadingTime, setLoadingTime] = useState(false);
  // console.log(getData);

  const handleSearchBox = (e) => {
    e.preventDefault();
    setLoadingTime(true);
    const searchValue = e.target.searchName.value;
    fetch(`https://user-info-data-server.vercel.app/userby/${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        setGetData(data);
        //console.log(data);
        setLoadingTime(false);
      });
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${vectorbg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  useEffect(() => {
    setLoadingTime(true);
    fetch('https://user-info-data-server.vercel.app/allusers')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setGetData(data);
        setLoadingTime(false);
      });
  }, []);

  return (
    <div style={backgroundImageStyle} className='px-2 md:px-4 lg:px-12 my-16 '>
      <Banner handleSearchBox={handleSearchBox} />
      <div>
        {loadingTime && (
          <div className='flex justify-center items-center py-4 pd:py-8 lg:my-10'>
            <img src={loading} alt={loading} className='w-3/4' />
          </div>
        )}
      </div>
      <div>
        {!loadingTime && (
          <>
            {/* if getData is empty */}
            <div>
              {getData.length !== 0 ? (
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
                    To remain with us, it is essential that you diligently
                    follow the steps provided{' '}
                  </p>
                </div>
              ) : (
                ''
              )}
            </div>
            {getData.length === 0 ? (
              <p className='text-2xl my-4 text-center py-4 md:py-6 lg:py-12 '>
                No matching data found. Please try again.
              </p>
            ) : (
              <div className=' grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5 lg:gap-8 '>
                {getData.map((item) => (
                  <SingleCard key={item._id} item={item} />
                ))}
              </div>
            )}

            {getData.length !== 0 ? (
              <p className='py-3 md:py-6 lg:py-8'>
                * For forms AOC-4 and MGT-7, you will be charged a penalty of
                ₹200
                <span className='text-semibold'>every day</span> until you file
                the form. There is no maximum penalty amount. So, if you don't
                file the form for a year, you will owe ₹73,000 per form.
              </p>
            ) : (
              ''
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CardSection;

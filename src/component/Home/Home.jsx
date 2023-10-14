import React from 'react';
import Banner from './../Banner/Banner';
import CardSection from './../CardSection/CardSection';
import AllinOne from './../AllinOne/AllinOne';


const Home = () => {
  return (
    <div className='px-2 md:px-4 lg:px-12 my-20 lg:mt-48 lg:mb-32 '>
      {/* <Banner /> */}
      <CardSection />
      <AllinOne />
    </div>
  );
};

export default Home;
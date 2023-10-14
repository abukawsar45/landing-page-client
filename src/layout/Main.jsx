import React from 'react';
import {Outlet} from 'react-router-dom'
import Navbar from './../shared/Navbar';
import Footer from './../shared/Footer';

const Main = () => {
  return (
    <div className='mx-2 lg:mx-0 my-2 md:my-4 lg:my-8'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Main;
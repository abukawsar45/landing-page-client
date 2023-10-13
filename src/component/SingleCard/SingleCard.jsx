import React from 'react';
import './SingleCard.css'

const SingleCard = ({item}) => {
  console.log(item);
  const { id, about, deliveryTime, image, intro, name, price, rating, reviewCount, taskComplexity, testimonial } = item || {};
  // console.log( deliveryTime)
  return (
    <div className='bg-white flex flex-col justify-between rounded-lg px-8 py-6'>
      <h4 className='font-semibold text-xl text-center card-title'>{name}</h4>
      <p className='text-center'>{intro}</p>
      <div className='mt-4 px-2 md:px-3 lg:px-4 py-1 md:py-2 lg:py-3 flex justify-between bg-[#F4F4F4] rounded-lg'>
        <div>
          <p className='text-xl text-[#0076CE]'>Delivery time</p>
          <p >{deliveryTime}</p>
        </div>
        <div>
          <p className='text-xl text-[#FF6666]'>Penalty fees</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
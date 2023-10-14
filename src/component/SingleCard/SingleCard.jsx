import React from 'react';
import './SingleCard.css'
import { Link } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';

const SingleCard = ({item}) => {
  // console.log(item);
  const { _id, about, deliveryTime, image, intro, name, price, rating, reviewCount, taskComplexity, testimonial } = item || {};
  // console.log( deliveryTime)
  return (
    <>
      <div className='bg-white relative hover:bg-slate-200 flex flex-col justify-between rounded-lg px-8 py-6'>
        <Link to={`/cardDetails/${_id}`}>
          <button className='group rounded-lg md:absolute -left-[2%] -top-[2%] bg-gradient-to-br from-[#0076CE] to-[#9400D3] p-2 '>
            <FaInfoCircle className='text-4xl text-white group-hover:text-slate-300' />
          </button>
        </Link>
        <h4 className='font-semibold text-xl text-center card-title'>{name}</h4>
        <p className='text-center'>{intro}</p>
        <div className='mt-4 px-2 md:px-3 lg:px-4 py-2 md:py-2 lg:py-3 flex justify-between bg-[#F4F4F4] rounded-lg'>
          <div>
            <p className='text-xl text-[#0076CE]'>Delivery time</p>
            <p>{deliveryTime}</p>
          </div>
          <div>
            <p className='text-xl text-[#FF6666]'>Penalty fees</p>
            <p>{price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
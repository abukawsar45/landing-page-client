import {useState, useEffect} from 'react';
import { useLoaderData, useParams, Link } from 'react-router-dom';
import { GiAlliedStar, GiCalendar } from 'react-icons/gi';
import { BsCalendarDay } from 'react-icons/bs';
import RecommendedCard from './../RecommendedCard/RecommendedCard';


const CardDetails = () => {
  const [getCardData, setGetCardData] = useState({});
  const [withoutCard, setWithoutCard] = useState([]);
  // console.log(withoutCard);
  const getData = useLoaderData();
  // console.log(getData);
  const {id: searchId} = useParams();
  // console.log(searchId);

   const [selectedCard, setSelectedCard] = useState(false);
  //  console.log(selectedCard);

   // ...


  const {
    _id,
    about,
    deliveryTime,
    image,
    intro,
    name,
    price,
    rating,
    reviewCount,
    taskComplexity,
    testimonial,
  } = getCardData || {};
  
  const {
    averageResponseTime,
    benefits,
    description,
    from,
    partnerSince,
    services,
  } = about || {};

  useEffect(() => {
    setWithoutCard(true);
    const specificCard = getData.find((card) => card._id == searchId);
    setGetCardData(specificCard);
    const withoutSpecificCard = getData.filter((card) => card._id != searchId);
    setWithoutCard(withoutSpecificCard);
    // console.log(withoutSpecificCard)
  }, [selectedCard, searchId]);


  return (
    <div className=' md:my-36 px-2 md:px-4 lg:px-12 my-20 lg:mt-48 lg:mb-32  '>
      <div className='mb-4'>
        <Link
          to='/'
          className='my-4 px-4 py-2 text-xl bg-lime-400 hover:bg-lime-500 rounded-lg font-semibold hover:text-white'
        >
          Home
        </Link>
      </div>
      <div>
        <div className='grid  grid-cols-12 gap-3 md:gap-5 lg:gap-8'>
          <div className='col-span-12 md:col-span-5'>
            <div>
              <h3 className='text-4xl font-bold'>{name}</h3>
              <p className='my-2 md:my-3 lg:my-4 text-xl'>{intro}</p>
              <div className=' flex items-center'>
                <GiAlliedStar className='text-2xl text-[#0076CE]' />
                <p className='mx-2 text-xl text-[#0076CE] font-bold'>
                  {' '}
                  {rating}{' '}
                </p>{' '}
                <span className='text-xl'>({reviewCount} )</span>
              </div>
              <div className='my-3 md:my-6 lg:my-8 bg-gray-50 p-2 md:p-4 lg:p-6 shadow-lg shadow-slate-300 rounded-lg'>
                <div className='flex justify-between items-center'>
                  <p className='text-xl '>{taskComplexity}</p>
                  <p className='text-2xl font-bold'>{price} </p>
                </div>
                <div className='flex items-center gap-3 my-2 md:my-6 lg:my-8'>
                  <BsCalendarDay className='text-2xl font-bold text-[#0076CE]' />
                  <p className='text-xl '>{deliveryTime}</p>
                </div>
                <div className='flex justify-between items-center gap-3 my-2 md:my-4 lg:my-6'>
                  <button className='bg-[#0076CE] font-semibold text-white rounded-lg border-2 border-[#0076CE] hover:text-[#0076CE] hover:border-[#0076CE]   hover:bg-white px-10 py-3'>
                    Request Proposal
                  </button>
                  <button className='text-[#0076CE] font-semibold bg-white rounded-lg border-2 border-[#0076CE] hover:text-white hover:bg-[#0076CE] px-10 py-3'>
                    Chat with me
                  </button>
                </div>
              </div>
              <div className='bg-gray-50 p-2 md:p-4 lg:p-6 shadow-lg shadow-slate-300 rounded-lg'>
                <h3 className='text-4xl font-bold'>What People say?</h3>
                <p className='my-2 md:my-3 lg:my-4 text-xl'>
                  {testimonial?.text}
                  <span className='text-base'>({testimonial?.author})</span>
                </p>
              </div>
            </div>
          </div>
          <div className=' col-span-12 md:col-span-7'>
            <div>
              <img
                src={image || 'https://i.ibb.co/5RMWQpJ/images-2.jpg'}
                alt={image}
                className='rounded-lg w-full'
                onError={(e) => {
                  e.target.src = 'https://i.ibb.co/5RMWQpJ/images-2.jpg';
                }}
              />
              <div className='mt-2 md:mt-4 lg:mt-8'>
                <h3 className='text-4xl font-bold'>About {name}</h3>
                <div className='flex justify-between items-center mt-2 md:mt-4  lg:mt-6'>
                  <div>
                    <p className='uppercase font-semibold text-[#999999] mb-2'>
                      from
                    </p>
                    <p className='uppercase font-semibold'>{from} </p>
                  </div>
                  <div>
                    <p className='uppercase text-[#999999] mb-2 font-semibold'>
                      partner since
                    </p>
                    <p className='uppercase font-semibold'>{partnerSince} </p>
                  </div>
                  <div>
                    <p className='uppercase text-[#999999] mb-2 font-semibold'>
                      AVERAGE RESPONSE TIME
                    </p>
                    <p className='uppercase font-semibold'>
                      {averageResponseTime}{' '}
                    </p>
                  </div>
                </div>
                <div className='mt-3 md:mt-4 lg:mt-8'>
                  <p className='uppercase text-[#999999] mb-2 font-semibold '>
                    about
                  </p>
                  <p className='text-xl '>{description} </p>
                </div>
                <div className='flex justify-between'>
                  <div className='mt-3 md:mt-4 lg:mt-8'>
                    <p className='uppercase text-[#999999] mb-2 font-semibold '>
                      services offer
                    </p>
                    <p className='text-xl mt-2 '>
                      {services?.map((service) => (
                        <li key={service} className=''>
                          {service}
                        </li>
                      ))}{' '}
                    </p>
                  </div>
                  <div className='mt-3 md:mt-4 lg:mt-8'>
                    <p className='uppercase text-[#999999] mb-2 font-semibold '>
                      why me?
                    </p>
                    <p className='text-xl mt-2 '>
                      {benefits?.map((benefit) => (
                        <li key={benefit} className=''>
                          {benefit}
                        </li>
                      ))}{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* recommended part */}
        <div className='my-4 md:my-8 lg:my-32'>
          <h3 className='text-4xl font-bold my-3 md:my-5 lg:my-8'>
            Recommended for you
          </h3>
          <div className=' grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8'>
            {withoutCard?.slice(0, 3)?.map((item) => (
              <RecommendedCard
                key={item._id}
                setSelectedCard={setSelectedCard}
                selectedCard={selectedCard}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

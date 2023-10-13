import { useState } from 'react';
import ActiveLink from './../utils/ActiveLink/ActiveLink';
import {Link} from 'react-router-dom'

const Navbar = () => {
  const user = false;
  const [showNavLinks, setShowNavLinks] = useState(false);
  // console.log(showNavLinks)
  const navData = (
    <>
      <li onClick={() => setShowNavLinks(!showNavLinks)}>
        <Link to='/'>Logoipsum</Link>
      </li>

      <li onClick={() => setShowNavLinks(!showNavLinks)}>
        <ActiveLink to='/solutions'>Solutions</ActiveLink>
      </li>
      <li onClick={() => setShowNavLinks(!showNavLinks)}>
        <ActiveLink to='/features'>Features</ActiveLink>
      </li>
      <li onClick={() => setShowNavLinks(!showNavLinks)}>
        <ActiveLink to='/about'> About</ActiveLink>
      </li>
   
      {!user && (
        <>
          <li
            onClick={() => setShowNavLinks(!showNavLinks)}
            className='md:hidden'
          >
            <ActiveLink to='/login'>
              <button className='px-3 py-1 rounded-lg bg-white border-2 border-sky-500 text-blue-500 font-semibold hover:text-white hover:bg-blue-500'>
                Login
              </button>
            </ActiveLink>
          </li>
          <li
            onClick={() => setShowNavLinks(!showNavLinks)}
            className='md:hidden'
          >
            <ActiveLink to='/register'>
              <button className='px-3 py-1 rounded-lg bg-blue-400 border-2 border-blue-400 font-semibold text-white hover:bg-blue-500'>
                Register
              </button>
            </ActiveLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div data-aos='fade-down' className='bg-base-100 my-2 md:my-4'>
      <div className='md:hidden'>
        <label tabIndex={0} className=' md:hidden '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-10 w-10  p-2 bg-yellow-500 hover:bg-yellow-600 rounded-full '
            onClick={() => setShowNavLinks(!showNavLinks)}
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h8m-8 6h16'
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className={`flex flex-col gap-2 bg-orange-400 mt-3 z-1 lg:hidden shadow  rounded-md w-52 ${
            showNavLinks ? 'px-2 py-3' : 'p-0'
          }`}
        >
          {showNavLinks && navData}
        </ul>
      </div>

      <div className='hidden md:flex justify-between items-center md:mx-4 lg:mx-8'>
        <div className=''>
          <ul className='flex items-center gap-4 lg:gap-8 px-1'>{navData}</ul>
        </div>
        <div className=''>
          {!user && (
            <div className=''>
              <div className=' flex flex-row gap-4  justify-end  '>
                <span onClick={() => setShowNavLinks(!showNavLinks)}>
                  <ActiveLink to='/login'>
                    <button className='px-3 py-1 rounded-lg bg-white border-2 border-sky-500 text-blue-500 font-semibold hover:text-white hover:bg-blue-500'>
                      Login
                    </button>
                  </ActiveLink>
                </span>
                <span onClick={() => setShowNavLinks(!showNavLinks)}>
                  <ActiveLink to='/register'>
                    <button className='px-3 py-1 rounded-lg bg-blue-400 border-2 border-blue-400 font-semibold text-white hover:bg-blue-500'>
                      Register
                    </button>
                  </ActiveLink>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

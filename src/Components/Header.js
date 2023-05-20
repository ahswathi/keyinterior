import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Popup from './Popup';
import '../Styles/Header.css'

const Header = () => { 
    const [isPopupOpen, setPopupOpen] = useState(false);

    const togglePopup = () => {
      setPopupOpen(!isPopupOpen);
    };
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  return (
    <div className='lg:px-[80px] md:px-[80px] sm:px-[40px] px-[20px] bg-[#060606] '> 
        <div className='flex justify-between py-[20px]  lg:py-[40px] md:py-[40px] sm:py-[30px]'>
        <div className='logo h-[45px] lg:h-[90px]  md:h-[90px]  sm:h-[45px]'>
        <a href="/">
         <img src="logo.png" alt="logo" className='h-[45px] lg:h-[90px] md:h-[90px]  sm:h-[45px]'/>
         </a>
        </div>
        <div className='nav-menu flex  lg:py-[30px] md:py-[30px]  ' >
            <ul className='font-poppins lg:flex lg:block md:flex md:block hidden nav lg:text-[16px] md:text-[10px] text-[12px]'>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>About Us</Link>
                </li>
                <li>
                    <Link to={'/services'}>Services</Link>
                </li>
                {/* <li  to={'/services'} className="relative">
                    <button
                        onClick={handleDropdownToggle}
                        className="focus:outline-none text-white"
                    >
                        Services 
                    </button>
                    <ul
                        className={`absolute mt-2  ${isDropdownOpen ? 'block' : 'hidden'}`}
                    >
                        <li>
                        <Link to="/construction">Construction </Link>
                        </li>
                        <li>
                        <Link to="/interior">Interior </Link>
                        </li>
                    </ul>
                </li> */}
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
            {/* <button className='text-[#000000] font-bold	text-[14px] px-8 py-2  bg-[#FFC12B] 
            hover:bg-transparent hover:text-white hover:border-[#FFC12B] hover:border transition-colors duration-300'>
            Enquire now</button> */}
            <Popup />
            </ul>
            <button className='block md:hidden sm:block lg:hidden py-3 px-4 mx-2 rounded group'>
                <div className='w-6 h-1 bg-gray-500 mb-1'></div>
                <div className='w-6 h-1 bg-gray-500 mb-1'></div>
                <div className='w-6 h-1 bg-gray-500 mb-1'></div>
              {/*   <div className='absolute ham-bar top-0 -right-full h-screen w-8/12 bg-white border
                opacity-0 group-focus:right-0  group-focus:opacity-100 transition-all duration-300'>  */}
                  <div className='absolute ham-bar top-0  h-screen  bg-white border
 opacity-1000 group-focus:right-0  group-focus:opacity-100 transition-all duration-600'> 
                <div className="text-right"> 
                <button
                    onClick={togglePopup}
                    className="mt-4  text-black font-bold py-2 px-4 rounded pr-[40px]"
                    > X
                </button>
            </div>
                    <ul className='flex flex-col w-ful  pt-[200px] text-center '>
                    <li className='ps-[35%]'>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className='ps-[35%]'>
                        <Link to={'/about'}>About Us</Link>
                    </li>
                    <li className='ps-[35%]'>
                        <Link to={'/services'}>Services</Link>
                    </li>
                    <li className='ps-[35%]'>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                    {/* <Popup /> */}
                    </ul>
                </div>
            </button>
        </div>
        {/* <div>
            <button className='text-[#000000] font-bold	text-[14px] px-8 py-2 w-[50%] bg-[#FFC12B] my-[20px]'>Enquire now</button>
        </div> */}
        </div>
        <div className="border-t border-gray-300  px-[80px] "></div>
    </div>
  )
}

export default Header
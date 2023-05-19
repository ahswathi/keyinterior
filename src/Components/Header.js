import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Header.css'

const Header = () => {
  return (
    <div className='lg:px-[80px] md:px-[80px] sm:px-[40px] px-[20px] bg-[#060606] '> 
        <div className='flex justify-between py-[20px]  lg:py-[40px] md:py-[40px] sm:py-[30px]'>
        <div className='logo h-[45px] lg:h-[90px]  md:h-[90px]  sm:h-[45px]'>
            <img src="logo.png" alt="logo" className='h-[45px] lg:h-[90px] md:h-[90px]  sm:h-[45px]'/>
        </div>
        <div className='nav-menu flex  lg:py-[30px] md:py-[30px]  ' >
            <ul className='lg:flex lg:block md:flex md:block hidden nav lg:text-[16px] md:text-[10px] text-[12px]'>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>About Us</Link>
                </li>
                <li>
                    <Link to={'/services'}>Services</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
            <button className='text-[#000000] font-bold	text-[14px] px-8 py-2  bg-[#FFC12B] '>Enquire now</button>
            </ul>
            <button className='block md:hidden sm:block lg:hidden py-3 px-4 mx-2 rounded group'>
                <div className='w-6 h-1 bg-gray-500 mb-1'></div>
                <div className='w-6 h-1 bg-gray-500 mb-1'></div>
                <div className='w-6 h-1 bg-gray-500 mb-1'></div>
                <div className='absolute ham-bar top-0 -right-full h-screen w-8/12 bg-white border
                opacity-0 group-focus:right-0  group-focus:opacity-100 transition-all duration-300'>
                    <ul className='flex flex-col w-ful  pt-[200px] text-center px-auto '>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About Us</Link>
                    </li>
                    <li>
                        <Link to={'/services'}>Services</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
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
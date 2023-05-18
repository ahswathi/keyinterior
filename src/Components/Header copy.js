import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Header.css'

const Header = () => {
  return (
    <div className='lg:px-[80px] md:px-[80px] sm:px-[40px] px-[40px] bg-[#060606] '> 
        <div className='flex justify-between py-[40px] '>
        <div className='logo'>
            <img src="logo.png" alt="logo" />
        </div>
        <div className='nav-menu ' >
            <ul className='lg:flex sm:flex hidden  nav'>
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
            <button className='block md:hidden sm:hidden lg:hidden py-3 px-4 mx-2 rounded '>
                <div className='w-6 h-1 bg-gray-500 mb-1'></div>
                <div className='w-6 h-1 bg-gray-500 mb-1'></div>
                <div className='w-6 h-1 bg-gray-500 mb-1'></div>
                <div className='absolute top-0 -right-full transform group-focus:right-0 
                transition-all duration-300'>
                    <ul className='flex flex-col w-ful  pt-10 text-base'>
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
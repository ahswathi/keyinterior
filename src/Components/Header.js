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
        <div className='nav-menu flex ' >
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
            <button className='block md:hidden sm:block lg:hidden py-3 px-4 mx-2 rounded '>
                <div className='w-6 h-1 bg-gray-500 mb-1'></div>
                <div className='w-6 h-1 bg-gray-500 mb-1'></div>
                <div className='w-6 h-1 bg-gray-500 mb-1'></div>
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
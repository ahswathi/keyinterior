import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Header.css'

const Header = () => {
  return (
    <div className=' px-[80px] bg-[#060606] '> 
        <div className='flex justify-between py-[40px] '>
        <div className='logo'>
            <img src="logo.png" alt="logo" />
        </div>
        <div className='nav-menu flex'>
            <ul className='flex  nav'>
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
            <button className='text-[#000000] font-bold	text-[14px] px-8 py-2  bg-[#FFC12B] '>Enquire now</button>

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
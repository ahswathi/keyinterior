import React from 'react'
import Sliderimg from '../Components/Sliderimg'
import Sliderimg2 from '../Components/Sliderimg2'

const Homebody = () => {
  return (
    <div className='lg:px-[80px] px-[20px] lg:pb-[80px]  sm:px-[80px]  pb-[20px] '>
    <div className='lg:flex  md:flex  justify-center items-center lg:py-[40px]'>
        <div className=' w-[100%] h-[100%] py-[20px]'>
            <Sliderimg/>
        </div>
        <div className="font-normal text-white w-full lg:ps-[40px] md:ps-[40px]">
            <p className='lg:text-[42px] md:text-[28px] sm:text-[28px] text-[22px] pb-[20px]'>Construction</p>
            <p className='font-poppins lg:text-[18px] md:text-[12px] text-[12px] lg:py-4  md:py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href='/construction'><button className='font-poppins border  border-[#FFC12B] text-[14px] px-8 py-2 mt-[20px]
            transition-colors duration-300 hover:bg-[#FFC12B] hover:text-black'>Read more</button></a>
        </div>
    </div>
    <div className='lg:flex lg:flex-row-reverse md:flex md:flex-row-reverse justify-center items-center lg:py-[40px] pt-[40px] pb-[20px]'>
        <div className=' w-[100%] h-[100%] pt-[40px] pb-[20px]'>
            <Sliderimg2/>
        </div>
        <div className="font-normal text-white w-full lg:pe-[40px] pe-[40px]">
            <p className='lg:text-[42px] md:text-[28px] sm:text-[28px] text-[22px] pb-[20px]'>Interior</p>
            <p className='font-poppins lg:text-[18px] md:text-[12px] text-[12px] lg:py-4  md:py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href='/interior'><button className='font-poppins border  border-[#FFC12B] text-[14px] px-8 py-2 mt-[20px] 
            transition-colors duration-300 hover:bg-[#FFC12B] hover:text-black'>Read more</button></a>
        </div>
    </div>
    </div>
  )
}

export default Homebody
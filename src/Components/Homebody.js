import React from 'react'
import Sliderimg from '../Components/Sliderimg'
import Sliderimg2 from '../Components/Sliderimg2'

const Homebody = () => {
  return (
    <div className='lg:px-[80px] px-[40px] lg:pb-[80px]  sm:px-[80px]  pb-[40px] '>
    <div className='lg:flex  md:flex  justify-center items-center lg:py-[40px]'>
        <div className=' w-[100%] h-[100%] py-[40px]'>
            <Sliderimg/>
        </div>
        <div className="font-normal text-white w-full lg:ps-[40px] md:ps-[40px]">
            <p className='lg:text-[42px] md:text-[42px] sm:text-[28px] text-[28px]'>Construction</p>
            <p className='font-poppins lg:text-[18px] md:text-[18px] text-[12px] lg:py-4  md:py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className='font-poppins border  border-[#FFC12B] text-[14px] px-8 py-2 mt-[20px]
            transition-colors duration-300 hover:bg-[#FFC12B] hover:text-black'>Read more</button>
        </div>
    </div>
    <div className='lg:flex lg:flex-row-reverse md:flex justify-center items-center lg:py-[40px] pt-[40px]'>
        <div className=' w-[100%] h-[100%] pt-[40px]'>
            <Sliderimg2/>
        </div>
        <div className="font-normal text-white w-full lg:pe-[40px] pe-[40px]">
            <p className='lg:text-[42px] md:text-[42px] sm:text-[28px] text-[28px]'>Interior</p>
            <p className='font-poppins lg:text-[18px] md:text-[18px] text-[12px] lg:py-4  md:py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className='font-poppins border  border-[#FFC12B] text-[14px] px-8 py-2 mt-[20px] 
            transition-colors duration-300 hover:bg-[#FFC12B] hover:text-black'>Read more</button>
        </div>
    </div>
    </div>
  )
}

export default Homebody
import React from 'react'
import Sliderimg from '../Components/Sliderimg'
import Sliderimg2 from '../Components/Sliderimg2'

const Homebody = () => {
  return (
    <div className='lg:px-[80px] px-[40px] lg:pb-[80px] pb-[40px] '>
    <div className='lg:flex  md:flex  justify-center items-center lg:py-[40px]'>
        <div className=' w-[100%] h-[100%] py-[40px]'>
            <Sliderimg/>
        </div>
        <div className="font-normal text-white w-full lg:ps-[40px]">
            <p className='text-[42px]'>Construction</p>
            <p className='text-[18px] py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className='border  border-[#FFC12B] text-[14px] px-8 py-2'>Read more</button>
        </div>
    </div>
    <div className='lg:flex md:flex  justify-center items-center lg:py-[40px] pt-[40px]'>
        <div className="font-normal text-white w-full lg:pe-[40px] ">
            <p className='text-[42px]'>Interior</p>
            <p className='text-[18px] py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className='border  border-[#FFC12B] text-[14px] px-8 py-2'>Read more</button>
        </div>
        <div className=' w-[100%] h-[100%] py-[40px]'>
            <Sliderimg2/>
        </div>
    </div>
    </div>
  )
}

export default Homebody
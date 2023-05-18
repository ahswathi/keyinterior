import React from 'react'
import Layout from '../Components/Layout'
import Brand from '../Components/Brand'
import Sliderimg from '../Components/Sliderimg'
import Sliderimg2 from '../Components/Sliderimg2'

const Services = () => {
  return (
    <Layout>
       <div className="font-normal text-white lg:p-[80px] md:p-[80px] sm:pt-[40px] py-[20px] px-[40px]">
        <p className='lg:text-[58px] md:text-[58px] sm:text-[38px] text-[38px]'>Services</p> 
        <img src="images/About.png" alt="logo" className='py-[20px]' />
      </div>
      <div className='text-white lg:p-[80px] md:p-[80px] sm:p-[40px] px-[40px]'>
      <p className='lg:text-[52px] md:text-[52px] sm:text-[38px] text-[38px] '>Who we are</p> 
      <p className='lg:text-[18px] md:text-[18px] text-[10px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
        <div className='lg:flex  md:flex justify-center items-center lg:py-[60px] md:py-[60px] py-[20px]'>
            <div className=' w-full	'>
                <Sliderimg/>
            </div>
            <div className="font-normal text-white w-full lg:ps-[40px] md:ps-[40px]">
                <p className='lg:text-[42px] md:text-[42px] sm:text-[28px] text-[28px] '>Title</p>
                <p className='lg:text-[18px] md:text-[18px] text-[12px] lg:py-4  md:py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                {/* <button className='border  border-[#FFC12B] text-[14px] px-8 py-2'>Read more</button> */}
            </div>
        </div>
        <div className='lg:flex lg:flex-row-reverse md:flex  justify-center items-center pb-[60px]'>
            <div className='w-full lg:ps-[40px] md:ps-[40px] py-[20px]'>
              <Sliderimg2/>
            </div>
            <div className="font-normal text-white w-full ">
                <p className='lg:text-[42px] md:text-[42px] sm:text-[28px] text-[28px]'>Title</p>
                <p className='lg:text-[18px] md:text-[18px] text-[12px] lg:py-4  md:py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               {/*  <button className='border border-[#FFC12B] text-[14px] px-8 py-2'>Read more</button> */}
            </div>
        </div>
    </div>
       <Brand/>
    </Layout>
  )
}

export default Services
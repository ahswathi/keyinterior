import React from 'react'
import Layout from '../Components/Layout'
import Brand from '../Components/Brand'
import Sliderimg from '../Components/Sliderimg'
import Sliderimg2 from '../Components/Sliderimg2'

const Services = () => {
  return (
    <Layout>
    <div className="font-normal text-white p-[80px]">
      <p className='text-[58px]'>Services</p> 
      <img src="images/About.png" alt="logo" className='py-[20px]' />
    </div>
    <div className='px-[80px] text-white pb-[80px]'>
      <p className='text-[52px]'>Who we are</p> 
      <p className='text-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
        <div className='flex justify-center items-center py-[60px]'>
            <div className=' w-full	'>
              <Sliderimg/>
            </div>
            <div className="font-normal text-white w-full ps-[40px]">
                <p className='text-[42px]'>Title</p>
                <p className='text-[18px] py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <button className='border  border-[#FFC12B] text-[14px] px-8 py-2'>Read more</button>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <div className="font-normal text-white w-full ">
                <p className='text-[42px]'>Title</p>
                <p className='text-[18px] py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <button className='border border-[#FFC12B] text-[14px] px-8 py-2'>Read more</button>
            </div>
            <div className='w-full ps-[40px] py-[20px]'>
              <Sliderimg2/>
                {/* <img src="images/img3.png" alt="logo" class="object-cover "/> */}
            </div>
        </div>
    </div>
       <Brand/>
    </Layout>
  )
}

export default Services
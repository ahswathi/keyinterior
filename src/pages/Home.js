import React from 'react'
import Brand from '../Components/Brand'
import Footer from '../Components/Footer'
import Homebody from '../Components/Homebody'
import Layout from '../Components/Layout'
import Slidermain from '../Components/Slidermain'
import Testimonial from '../Components/Testimonial'
import '../Styles/Header.css'

const Home = () => {
  return (
    <Layout>
        <p className="lg:text-[58px] font-normal text-white lg:p-[80px] 
        text-[28px] p-[40px]">
          Transform Your Home into a Haven with Our Interior Design Solutions
        </p>
        {/* <img src="images/index1.png" alt="logo" className='lg:px-[80px] lg:py-[80px] 
                                                          px-[40px] py-[20px]' /> */}
          <div  className='lg:px-[80px] lg:py-[40px] md:px-[80px] md:py-[40px] md:px-[40px] md:py-[20px] px-[40px] py-[10px]' >
            <Slidermain/>
          </div>
        <div className="font-normal text-white lg:py-[80px] py-[20px] text-center">
          <p className='lg:text-[52px] text-[22px]'>YouTube Videos</p> 
          <p className='lg:text-[18px] text-[12px] px-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
          <img src="images/Frame.png" alt="logo" className='py-[20px]' />
        </div>
        <div className="font-normal text-white lg:pt-[40px] pb-[40px] text-center">
          <p className='lg:text-[52px] text-[22px]'>Our services</p> 
          <p className='lg:text-[18px] text-[12px] px-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
        </div>
        <Homebody/>
        <div  className='enquire-img'>
          <div>
              <img src="images/index2.png" alt="logo" className='py-[20px] w-full' />
          </div>
          <div className="enquire-text font-normal text-white lg:pt-[40px] pt-[20px] pb-[40px] text-center">
            <p className='lg:text-[52px] text-[18px]'>For more information enquire now </p> 
            <p className='lg:text-[18px] text-[8px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
            <button className='text-[#000000] font-bold	lg:text-[14px] text-[8px] px-4 lg:px-8 lg:py-3 py-1 lg:w-[50%] w-[40%] bg-[#FFC12B] my-[20px]'>Enquire now</button>
        </div>
        </div>
        <div className="font-normal text-white pt-[10px] lg:pt-[40px] pb-[20px] lg:pb-[40px] text-center">
          <p className='lg:text-[52px] text-[22px]'>Google reviews</p> 
          <p className='lg:text-[18px] text-[8px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
          {/* <img src="images/Group.png" alt="logo" className='py-[60px] w-full px-[160px]' /> */}
          <Testimonial/>
        </div>
        <Brand/>
    </Layout>
  )
}

export default Home
import React from 'react'
import Brand from '../Components/Brand'
import Footer from '../Components/Footer'
import Homebody from '../Components/Homebody'
import Layout from '../Components/Layout'
import Slidermain from '../Components/Slidermain'
import Testimonial from '../Components/Testimonial'
import '../Styles/Header.css'
import Popup from '../Components/Popup'

const Home = () => {
  return (
    <Layout>
        <p className="lg:text-[58px] md:text-[58px] sm:text-[48px]  font-normal text-white lg:p-[80px] md:p-[80px] sm:pt-[20px]  sm:px-[80px] 
        text-[28px] px-[20px] py-[20px]">
          Transform Your Home into a Haven with <br/>Our Interior Design Solutions
        </p>
        {/* <img src="images/index1.png" alt="logo" className='lg:px-[80px] lg:py-[80px] 
                                                          px-[40px] py-[20px]' /> */}
          <div  className='lg:px-[80px] lg:py-[40px] md:px-[80px] md:py-[40px] sm:py-[20px] sm:px-[80px]
          md:px-[40px] md:py-[20px] px-[20px] py-[10px]' >
            <Slidermain/>
          </div>
        <div className="font-normal text-white lg:py-[80px] py-[40px] text-center">
          <p className='lg:text-[52px] sm:text-[42px] text-[22px]'>YouTube Videos</p> 
          <p className='font-poppins lg:text-[18px] sm:text-[16px] text-[12px] px-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
          <img src="images/Frame.png" alt="logo" className='py-[20px]' />
        </div>
        <div className="font-normal text-white lg:pt-[40px] text-center">
          <p className='lg:text-[52px] sm:text-[42px] text-[22px]'>Our services</p> 
          <p className='font-poppins lg:text-[18px] sm:text-[16px] text-[12px] px-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
        </div>
        <Homebody/>
        <div  className='enquire-img'>
          <div>
              <img src="images/index2.png" alt="logo" className='py-[20px] w-full opacity-0.1' />
          </div>
          <div className="enquire-text font-normal text-white sm:px-[80px] lg:pt-[40px] pt-[10px] pb-[40px] text-center">
            <p className='lg:text-[52px] sm:text-[36px] text-[18px]'>For more information enquire now </p> 
            <p className='font-poppins lg:text-[18px] sm:text-[12px] text-[8px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
            <button className='text-[#000000] font-bold	lg:text-[14px] text-[8px] px-4 
            lg:px-8  sm:w-[30%] lg:py-3 sm:py-2 py-1 lg:w-[50%] w-[40%] bg-[#FFC12B] my-[20px]
            hover:bg-transparent hover:text-white hover:border-[#FFC12B] hover:border transition-colors duration-300'>Enquire now</button>
        </div>
        </div>
        <div className="font-normal text-white pt-[10px] lg:pt-[40px] pb-[60px] lg:pb-[40px] text-center">
          <p className='lg:text-[52px] sm:text-[36px] text-[22px]'>Google reviews</p> 
          <p className='font-poppins lg:text-[18px] sm:text-[16px] text-[8px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
          {/* <img src="images/Group.png" alt="logo" className='py-[60px] w-full px-[160px]' /> */}
          <Testimonial/>
        </div>
        <Brand/>
    </Layout>
  )
}

export default Home
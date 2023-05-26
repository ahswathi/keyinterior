import React from 'react'
import Footer from '../Components/Footer'
import Brand from '../Components/Brand'
import Layout from '../Components/Layout'

const About = () => {
  return (
    <Layout>
    <div className="font-normal text-white lg:p-[80px] md:p-[80px] sm:pt-[40px] py-[20px] px-[20px] ">
      <p className='lg:text-[58px] md:text-[58px] sm:text-[38px] text-[38px] '>About us</p> 
      <div className=''> <img src="images/About.png" alt="logo" className='py-[20px] h-[200px] lg:h-[480px] w-full
      lg:rounded-tr-[100px] lg:rounded-bl-[100px] rounded-tr-[45px] rounded-bl-[45px]' /></div>
    </div>
    <div className='text-white lg:p-[80px] md:p-[80px] sm:p-[40px] px-[20px] '>
      <p className='lg:text-[52px] md:text-[52px] sm:text-[38px] text-[38px] text-center lg:text-left'>Who we are</p> 
      <p className='font-poppins lg:text-[18px] md:text-[18px] text-[12px]  font-normal	text-center lg:text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
        <div className='lg:flex  md:flex justify-center items-center lg:py-[60px] md:py-[60px] py-[20px]'>
            <div className=' w-full	'>
                <img src="images/img3.png" alt="logo" class="object-cover "/>
            </div>
            <div className="font-normal text-white w-full lg:ps-[40px] md:ps-[40px]">
                <p className='lg:text-[42px] md:text-[42px] sm:text-[28px] text-[22px] '>Title</p>
                <p className='font-poppins lg:text-[18px] md:text-[18px] text-[12px] lg:py-4  md:py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                {/* <button className='border  border-[#FFC12B] text-[14px] px-8 py-2'>Read more</button> */}
            </div>
        </div>
        <div className='lg:flex lg:flex-row-reverse md:flex justify-center items-center pb-[40px]'>
          <div className='w-full lg:ps-[40px] md:ps-[40px] py-[20px]'>
                <img src="images/img1.png" alt="logo" class="object-cover "/>
            </div>
            <div className="font-normal text-white w-full ">
                <p className='lg:text-[42px] md:text-[42px] sm:text-[28px] text-[22px]'>Title</p>
                <p className='font-poppins lg:text-[18px] md:text-[18px] text-[12px] lg:py-4  md:py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               {/*  <button className='border border-[#FFC12B] text-[14px] px-8 py-2'>Read more</button> */}
            </div>
            
        </div>
    </div>
       <Brand/>
    </Layout>
  )
}

export default About
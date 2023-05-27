import React from 'react'
import Layout from '../Components/Layout'
import Brand from '../Components/Brand'
import Sliderimg from '../Components/Sliderimg'
import Sliderimg2 from '../Components/Sliderimg2'

const Services = () => {
  return (
    <Layout>
      {/*  <div className='relative'> */}
      <div className="font-normal text-white lg:p-[80px] md:p-[40px] sm:pt-[40px] py-[20px] px-[20px] ">
      <p className='lg:text-[58px] md:text-[58px] sm:text-[38px] text-[38px] '>Services</p> 
      <div className=''> <img src="images/About.png" alt="logo" className='py-[20px] h-[200px] lg:h-[480px] md:h-[380px] w-full
      lg:rounded-tr-[100px] lg:rounded-bl-[100px] rounded-tr-[45px] rounded-bl-[45px]' /></div>
    </div>
      <div className='text-white lg:pb-[80px] md:pb-[80px] sm:pb-[40px] lg:px-[40px]'>
      {/* <p className='lg:text-[52px] md:text-[52px] sm:text-[38px] text-[38px] '>Who we are</p> 
      <p className='font-poppins lg:text-[18px] md:text-[18px] text-[10px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>  */}
        <div className='lg:flex  md:flex justify-center items-center lg:py-[60px] md:py-[60px] py-[20px] lg:px-[40px] md:px-[40px] px-[20px]'>
            <div className=' w-full	pb-[20px] lg:pb-[0px]'>
                <Sliderimg/>
            </div>
            <div className="font-normal text-white w-full lg:ps-[40px] md:ps-[40px]">
                <p className='lg:text-[42px] md:text-[28px] sm:text-[28px] text-[28px] pb-[20px] lg:pb-[0px]'>Construction</p>
                <p className='font-poppins lg:text-[18px] md:text-[18px] text-[12px] lg:py-4 pb-[20px] lg:pb-[0px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a href='/construction'><button className='font-poppins border  border-[#FFC12B] text-[14px] px-8 py-2 md:py-4
                transition-colors duration-300 hover:bg-[#FFC12B] hover:text-black '>Read more</button></a>
            </div>
        </div>
        <div className='lg:flex lg:flex-row-reverse md:flex   md:flex-row-reverse justify-center items-center pb-[60px] lg:px-[40px]  md:px-[40px] px-[20px]'>
            <div className='w-full lg:ps-[40px] md:ps-[40px] py-[20px]'>
              <Sliderimg2/>
            </div>
            <div className="font-normal text-white w-full ">
                <p className='lg:text-[42px] md:text-[28px] sm:text-[28px] text-[28px] pb-[20px] lg:pb-[0px]'>Interior Design</p>
                <p className='font-poppins lg:text-[18px] md:text-[18px] text-[12px] lg:py-4  pb-[20px] lg:pb-[0px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a href='/interior'><button className='font-poppins border border-[#FFC12B] text-[14px] px-8 py-2 md:py-4
                transition-colors duration-300 hover:bg-[#FFC12B] hover:text-black'>Read more</button></a>
            </div>
        </div>
    </div>{/* <div className='circle2'></div> */}
       <Brand/>{/* </div> */}
    </Layout>
  )
}

export default Services
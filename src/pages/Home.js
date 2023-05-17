import React from 'react'
import Brand from '../Components/Brand'
import Footer from '../Components/Footer'
import Homebody from '../Components/Homebody'
import Layout from '../Components/Layout'
import '../Styles/Header.css'

const Home = () => {
  return (
    <Layout>
        <p className="text-[58px] font-normal text-white py-[80px] p-[80px]">
          Transform Your Home into a Haven with Our Interior Design Solutions
        </p>
        <img src="images/index1.png" alt="logo" className='py-[20px] p-[80px]' />
        <div className="font-normal text-white py-[80px] text-center">
          <p className='text-[52px]'>YouTube Videos</p> 
          <p className='text-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
          <img src="images/Frame.png" alt="logo" className='py-[20px]' />
        </div>
        <div className="font-normal text-white pt-[40px] pb-[40px] text-center">
          <p className='text-[52px]'>Our services</p> 
          <p className='text-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
        </div>
        <Homebody/>
        <div  className='enquire-img'>
          <div>
              <img src="images/index2.png" alt="logo" className='py-[20px] w-full' />
          </div>
          <div className="enquire-text font-normal text-white pt-[40px] pb-[40px] text-center">
            <p className='text-[52px]'>For more information enquire now </p> 
            <p className='text-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
            <button className='text-[#000000] font-bold	text-[14px] px-8 py-2 w-[50%] bg-[#FFC12B] my-[20px]'>Enquire now</button>
        </div>
        </div>
        <Brand/>
    </Layout>
  )
}

export default Home
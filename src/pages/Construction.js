import React from 'react'
import Layout from '../Components/Layout'
import Brand from '../Components/Brand'

const Construction = () => {
  return (
    <Layout>
    <div className="font-normal text-white p-[80px]">
      <p className='text-[58px]'>Construction</p> 
      <img src="images/construction.png" alt="logo" className='py-[20px]' />
    </div>
    <div className='px-[80px] text-white pb-[80px]'>
      <p className='text-[52px]'>How it works</p> 
      <p className='text-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
        <div className='flex justify-center items-center py-[60px]'>
            <div className=' w-full	'>
                <img src="images/img1.png" alt="logo" class="object-cover "/>
            </div>
            <div className="font-normal text-white w-full ps-[40px]">
                <p className='text-[42px]'>Title</p>
                <p className='text-[18px] py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <div className="font-normal text-white w-full ">
                <p className='text-[42px]'>Title</p>
                <p className='text-[18px] py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className='w-full ps-[40px] py-[20px]'>
                <img src="images/img3.png" alt="logo" class="object-cover "/>
            </div>
        </div>
   
      <div className='flex justify-center items-center py-[60px]'>
            <div className=' w-full	'>
                <img src="images/img2.png" alt="logo" class="object-cover "/>
            </div>
            <div className="font-normal text-white w-full ps-[40px]">
                <p className='text-[42px]'>Title</p>
                <p className='text-[18px] py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <div className="font-normal text-white w-full ">
                <p className='text-[42px]'>Title</p>
                <p className='text-[18px] py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className='w-full ps-[40px] py-[20px]'>
                <img src="images/img4.png" alt="logo" class="object-cover "/>
            </div>
        </div>
        <div className='flex justify-center items-center py-[60px]'>
            <div className=' w-full	'>
                <img src="images/img5.png" alt="logo" class="object-cover "/>
            </div>
            <div className="font-normal text-white w-full ps-[40px]">
                <p className='text-[42px]'>Title</p>
                <p className='text-[18px] py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
    </div>
       <Brand/>
    </Layout>
  )
}

export default Construction
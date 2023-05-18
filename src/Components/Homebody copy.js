import React from 'react'

const Homebody = () => {
  return (
    <div className='md:px-[80px]  px-[40px]'>
    <div className='md:flex flex  justify-center items-center md:py-[60px] py-[20px]
    '>
        <div className=' w-full	'>
            <img src="images/index3.png" alt="logo" class="object-cover "/>
        </div>
        <div className="font-normal text-white w-full md:ps-[40px]">
            <p className='md:text-[42px] text-[22px] py-2'>Construction</p>
            <p className='md:text-[18px] md:py-4 text-[10px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className='border  border-[#FFC12B] text-[14px] md:px-8 px-4 md:py-2 py-2 my-4'>Read more</button>
        </div>
    </div>
    <div className='md:flex flex-col-reverse justify-center items-center md:py-[60px] py-[20px]
    '>
        <div className="font-normal text-white w-full md:ps-[40px]">
            <p className='md:text-[42px] text-[22px] py-2'>Interior</p>
            <p className='md:text-[18px] md:py-4 text-[10px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className='border border-[#FFC12B] md:px-8 px-4 md:py-2 py-2 my-4'>Read more</button>
        </div>
        <div className='w-full ps-[40px] py-[80px]'>
            <img src="images/img3.png" alt="logo" class="object-cover "/>
        </div>
    </div>
    </div>
  )
}

export default Homebody
import React from 'react'

const Homebody = () => {
  return (
    <div className='px-[80px]  '>
    <div className='flex justify-center items-center py-[60px]'>
        <div className=' w-full	'>
            <img src="images/index3.png" alt="logo" class="object-cover "/>
        </div>
        <div className="font-normal text-white w-full ps-[40px]">
            <p className='text-[42px]'>Construction</p>
            <p className='text-[18px] py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className='border  border-[#FFC12B] text-[14px] px-8 py-2'>Read more</button>
        </div>
    </div>
    <div className='flex justify-center items-center'>
        <div className="font-normal text-white w-full ">
            <p className='text-[42px]'>Interior</p>
            <p className='text-[18px] py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className='border border-[#FFC12B] text-[14px] px-8 py-2'>Read more</button>
        </div>
        <div className='w-full ps-[40px] py-[80px]'>
            <img src="images/img3.png" alt="logo" class="object-cover "/>
        </div>
    </div>
    </div>
  )
}

export default Homebody
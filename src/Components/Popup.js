import React, { useState } from 'react';
import '../Styles/Header.css'
import { useForm } from "react-hook-form";

const Popup = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const togglePopup = () => {
      setPopupOpen(!isPopupOpen);
    };

    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
    const onSubmit = (data) => console.log(data);
  
  return (
    <>
    <button onClick={togglePopup}
    className='text-black bg-[#FFC12B] lg:w-[200px]  md:w-[300px]  w-[100px] font-bold
            lg:text-[14px] md:text-[14px]	text-[10px] mx-auto 
            lg:py-3 lg:px-3 md:py-3 md:px-3 py-2 
            hover:bg-[#FFC12B] hover:text-black
            lg:bg-[#FFC12B] lg:text-[#000000] md:bg-[#FFC12B] md:text-[#000000] 
            lg:px-8 lg:py-2  md:px-8 md:py-2  
            hover:bg-transparent hover:text-white hover:border-[#FFC12B] 
            hover:border transition-colors duration-300'>
            Enquire now</button>
    {/* <button
      onClick={togglePopup}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Open Popup
    </button> */}
    {isPopupOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-10 bg-[#000000E3]">
        <div className="p-6 rounded shadow-lg lg:w-[45%] lg:h-auto">
            <div className='w-auto h-auto
            bg-[#201A0C] rounded-[44px] pb-[80px]'>
                <div className="text-right"> 
                    <button
                        onClick={togglePopup}
                        className="mt-4  text-[#cecece] font-bold py-2 px-4 rounded pr-[40px]"
                        > X
                    </button>
                </div>
                <div className='px-[30px] lg:px-[60px] md:px-[60px]'>
                    <div className="  justify-center items-center  font-normal text-white pb-[30px]"> 
                    <p className='lg:text-[32px] md:text-[32px] sm:text-[28px] text-[22px]'>Enquire now</p> 
                    <p className='font-poppins lg:text-[12px] md:text-[12px] text-[10px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p> 
                    </div>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete>
                <div className='flex-col font-poppins '>
                      <error className='text-red-700 text-[12px]'>
                        {errors.name?.type === "required" && "Name is required *"}
                      </error>
                      <input 
                        type='text' 
                        placeholder='Name '
                        {...register("name", { required: true })}
                        className="form-input w-[100%] p-2 my-3"/><br/>

                      <error className='text-red-700 text-[12px]'>
                          {errors.email?.type === "required" && "Email is required *"}
                          {errors.email?.type === "pattern" &&
                            "Entered email is in wrong format"}
                      </error>
                      <input 
                          type='email' 
                          placeholder='Email' 
                          {...register("email", {
                            required: true,
                            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                          })}
                          className="form-input w-[100%] p-2 my-3"/><br/>

                        <error className='text-red-700 text-[12px]'>
                          {errors.number?.type === "required" && "Number is required *"}
                        {errors.number?.type === "minLength" &&
                          "Entered number is less than 6 digits"}
                        {errors.number?.type === "maxLength" &&
                          "Entered number is more than 12 digits"}
                      </error>
                      <input 
                          type="text"
                          id='number'
                          placeholder='Phone number' 
                          {...register("number", {
                            required: true,
                            minLength: 6,
                            maxLength: 12,
                          })}
                          className="form-input w-[100%] p-2 my-3"/><br/>

                  <select className="form-input w-[100%] p-2 my-3">
                      <option value="" disabled selected>How did you find us?</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                  </select>
                  <button  type="submit" className='text-[#000000] font-bold	text-[14px] px-8 py-2 w-[100%] bg-[#FFC12B] my-[20px]
                  hover:bg-transparent hover:text-white hover:border-[#FFC12B] hover:border transition-colors duration-300'>SEND</button>
                </div>
            </form>
                </div>
            </div>
            
        </div>
      </div>
    )}
  </> 
  );
}

export default Popup
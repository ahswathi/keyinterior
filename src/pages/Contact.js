import React from 'react';
import { useForm } from "react-hook-form";
import Layout from '../Components/Layout'

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Layout>
      <div className='lg:p-[80px] md:p-[40px] sm:p-[40px] p-[20px]'>
        <div className="lg:flex  md:flex sm:flex justify-center items-center pb-[20px]">
          <div className="font-normal text-white pe-[40px]">
            <p className='lg:text-[58px] md:text-[58px] sm:text-[38px] text-[32px] '>Contact us</p> 
            <p className='lg:text-[18px] md:text-[18px] text-[12px] pb-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry</p> 
          </div>
          <div className='w-full'>
            <img src="images/contact.png" alt="logo" />
          </div>
        </div>
        <div className="font-normal text-white lg:pe-[40px] md:pe-[40px] sm:pe-[40px]
        text-center lg:py-[80px] md:py-[80px]  sm:py-[20px] py-[20px]">
           <p className='lg:text-[58px] md:text-[58px] sm:text-[38px] text-[32px]'>Google map</p> 
           <p className='lg:text-[18px] md:text-[18px] text-[12px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p> 
        </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77492134983!2d77.3012646607384!3d12.954459535201728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1683980794732!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" ></iframe>
        </div>
        <div className='lg:flex  md:flex sm:flex justify-between items-between py-[40px]'>
          <div className='text-[22px] sm:text-[16px] lg:py-[80px] md:py-[80px] sm:py-[40px] py-[40px]'>
            <p className='text-white'>Back office Location</p>
            <p className='text-[#767676]'>438 Marine Parade Elwood,<br/>
            Victoria P.O Box 3184</p>
            <a href='#' className='text-[#4880FF]'>Click to Google Map</a>
          </div>
          <div className='text-[22px] sm:text-[16px] lg:py-[80px] md:py-[80px] sm:py-[40px] py-[10px]'>
            <p className='text-white'>Experience Centre Location</p>
            <p className='text-[#767676]'>438 Marine Parade Elwood,<br/>
            Victoria P.O Box 3184</p>
            <a href='#' className='text-[#4880FF]'>Click to Google Map</a>
          </div>
          <div className='text-[22px] sm:text-[16px] lg:py-[80px] md:py-[80px] sm:py-[40px] py-[40px]'>
            <p className='text-white'>Product Unit Location</p>
            <p className='text-[#767676]'>438 Marine Parade Elwood,<br/>
            Victoria P.O Box 3184</p>
            <a href='#' className='text-[#4880FF]'>Click to Google Map</a>
          </div>
        </div>
        <div className='lg:flex  md:flex  items-center bg-[#0C0B0A] lg:rounded-s-[44px] md:rounded-s-[44px] sm:rounded-s-[44px]'>
          <div className='px-[20px] lg:px-[40px] md:px-[40px]'>
            <div className="font-normal text-white pb-[30px]">
              <p className='lg:text-[52px] md:text-[52px] sm:text-[38px] text-[32px]'>Enquire now</p> 
              <p className='font-poppins lg:text-[18px] md:text-[18px] text-[12px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p> 
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                          placeholder='Phone number ' 
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
            <div className='font-poppins  lg:flex  md:flex sm:flex lg:justify-between md:justify-between sm:justify-between lg:pt-[40px] md:pt-[40px] py-[20px]'>
              <div className='flex justify-center items-center pb-[20px]'>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5572 0.899414V2.61894C16.2579 2.61894 17.8512 3.04882 19.3372 3.90858C20.7515 4.75043 21.8793 5.87887 22.7207 7.29389C23.5801 8.78056 24.0097 10.3747 24.0097 12.0763H25.7284C25.7284 10.0523 25.2182 8.17156 24.1977 6.43413C23.2131 4.75043 21.8793 3.41601 20.1965 2.43086C18.4599 1.4099 16.5802 0.899414 14.5572 0.899414ZM5.66852 3.4787C5.18515 3.4787 4.76444 3.63095 4.40639 3.93545L1.64044 6.75654L1.721 6.7028C1.27343 7.07895 0.978042 7.54465 0.834821 8.09992C0.709503 8.65518 0.745308 9.19253 0.942237 9.71197C1.44351 11.1091 2.11486 12.542 2.95628 14.0108C4.13785 16.0348 5.5432 17.8528 7.17234 19.4649C9.78612 22.0979 13.0354 24.1757 16.9203 25.6982H16.9472C17.4663 25.8773 17.9855 25.9131 18.5047 25.8056C19.0418 25.6982 19.5162 25.4653 19.9279 25.1071L22.6402 22.3934C22.9982 22.0352 23.1773 21.5964 23.1773 21.0769C23.1773 20.5396 22.9982 20.0918 22.6402 19.7336L19.1223 16.187C18.7643 15.8288 18.3167 15.6497 17.7796 15.6497C17.2426 15.6497 16.795 15.8288 16.4369 16.187L14.7451 17.9066C13.3845 17.2617 12.203 16.4647 11.2004 15.5154C10.1979 14.5481 9.40121 13.3749 8.81043 11.9957L10.5291 10.2762C10.905 9.88213 11.093 9.41643 11.093 8.87908C11.093 8.32381 10.8782 7.87602 10.4485 7.5357L10.5291 7.6163L6.93066 3.93545C6.5726 3.63095 6.15189 3.4787 5.66852 3.4787ZM14.5572 4.33846V6.05798C15.6492 6.05798 16.6518 6.32666 17.5648 6.86401C18.4957 7.40136 19.2297 8.13574 19.7668 9.06715C20.3039 9.98064 20.5724 10.9837 20.5724 12.0763H22.2911C22.2911 10.6792 21.942 9.3806 21.2438 8.18052C20.5456 7.01626 19.6146 6.08485 18.451 5.38629C17.2515 4.68774 15.9536 4.33846 14.5572 4.33846ZM5.66852 5.19822C5.72223 5.19822 5.78489 5.22509 5.8565 5.27882L9.37436 8.87908C9.39226 8.95072 9.37436 9.01341 9.32065 9.06715L6.76953 11.5927L6.95751 12.13L7.30661 12.8823C7.59305 13.4913 7.92425 14.0824 8.30021 14.6556C8.81938 15.4616 9.39226 16.1512 10.0189 16.7244C10.8603 17.5483 11.8718 18.3006 13.0533 18.9813C13.6441 19.3216 14.1454 19.5724 14.5572 19.7336L15.0942 19.9754L17.6991 17.3692C17.7349 17.3334 17.7617 17.3155 17.7796 17.3155C17.7975 17.3155 17.8244 17.3334 17.8602 17.3692L21.4855 20.9963C21.5213 21.0322 21.5392 21.059 21.5392 21.0769C21.5392 21.0769 21.5213 21.0949 21.4855 21.1307L18.8001 23.7906C18.4062 24.1309 17.9766 24.2204 17.5111 24.0592C13.859 22.6442 10.8155 20.7098 8.38077 18.2558C6.87695 16.7513 5.56111 15.0407 4.43324 13.1241C3.62763 11.7449 3.00104 10.4105 2.55347 9.12088V9.09402C2.48186 8.93281 2.47291 8.74474 2.52662 8.5298C2.58032 8.29694 2.67879 8.11783 2.82201 7.99245L5.48055 5.27882C5.53425 5.22509 5.59691 5.19822 5.66852 5.19822ZM14.5572 7.77751V9.49703C15.2733 9.49703 15.882 9.74779 16.3832 10.2493C16.8845 10.7508 17.1351 11.3598 17.1351 12.0763H18.8538C18.8538 11.3061 18.6569 10.5896 18.263 9.92691C17.887 9.26418 17.3679 8.74474 16.7055 8.36859C16.0431 7.97453 15.327 7.77751 14.5572 7.77751Z" fill="white"/>
                </svg>
                <div className='ps-2'>
                  <p className='text-[white]'>PHONE</p>
                  <p className='text-[#FFC12B]'>03 5432 1234</p>
                </div>
              </div>
              <div className='flex justify-center items-center pb-[20px]'>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.89687 1.98438V6.37305H8.14141V4.61758H2.875V20.4168H4.63047V21.2945C4.63047 22.0077 4.88647 22.6203 5.39849 23.1323C5.92878 23.6626 6.55051 23.9277 7.26367 23.9277C7.97683 23.9277 8.58942 23.6626 9.10143 23.1323C9.63173 22.6203 9.89687 22.0077 9.89687 21.2945V20.4168H23.9406V6.37305H20.4297V1.98438H9.89687ZM11.6523 3.73984H18.6742V8.12852H11.6523V3.73984ZM4.63047 6.37305H6.38594V18.6613H4.63047V6.37305ZM8.14141 8.12852H9.89687V9.88398H20.4297V8.12852H22.1852V18.6613H8.14141V8.12852ZM10.7746 11.6395V13.3949H12.5301V11.6395H10.7746ZM14.2855 11.6395V13.3949H16.041V11.6395H14.2855ZM17.7965 11.6395V13.3949H19.552V11.6395H17.7965ZM10.7746 15.1504V16.9059H12.5301V15.1504H10.7746ZM14.2855 15.1504V16.9059H16.041V15.1504H14.2855ZM17.7965 15.1504V16.9059H19.552V15.1504H17.7965ZM6.38594 20.4168H8.14141V21.2945C8.14141 21.5323 8.04998 21.7425 7.86711 21.9254C7.70254 22.09 7.50139 22.1723 7.26367 22.1723C7.02595 22.1723 6.81566 22.09 6.6328 21.9254C6.46823 21.7425 6.38594 21.5323 6.38594 21.2945V20.4168Z" fill="white"/>
                </svg>
                <div className='ps-2'>
                  <p className='text-[white]'>FAX</p>
                  <p className='text-[#FFC12B]'>03 5432 1234</p>
                </div>
              </div>  
              <div className='flex justify-center items-center pb-[20px]'>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.94254 2.8623V4.61999L2.41016 8.2218V23.1477H24.5397V8.2218L19.0073 4.61999V2.8623H7.94254ZM9.78667 4.70643H17.1632V11.7948L13.4749 14.1864L9.78667 11.7948V4.70643ZM10.7087 6.55056V8.39469H16.2411V6.55056H10.7087ZM7.94254 6.80989V10.5846L5.03228 8.71165L7.94254 6.80989ZM19.0073 6.80989L21.9176 8.71165L19.0073 10.5846V6.80989ZM10.7087 9.31675V11.1609H16.2411V9.31675H10.7087ZM4.25429 10.4117L13.4749 16.3763L22.6956 10.4117V21.3036H4.25429V10.4117Z" fill="white"/>
                </svg>
                <div className='ps-2'>
                  <p className='text-[white]'>EMAIL</p>
                  <p className='text-[#FFC12B]'>info@marcc.com.au</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="images/contact2.png" alt="logo" className='lg:rounded-e-[44px] md:rounded-e-[44px] sm:rounded-e-[44px]'/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
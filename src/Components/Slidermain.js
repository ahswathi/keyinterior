import React from 'react'
import '../Styles/Slidermain.css'


const Slidermain = () => {
  return (
    <div>
        <section class="container">
            <div class="slidermain-wrapper">
            <div class="slidermain">
                <img id="slidermain-1" src="images/Home.png" alt="key-interiors" width='100%' height='100%' 
                  className='lg:rounded-tr-[100px] lg:rounded-bl-[100px] rounded-tr-[45px] rounded-bl-[45px]'/>
                <img id="slidermain-2" src="images/Home.png" alt="key-interiors"  width='100%' height='100%' 
                   className='lg:rounded-tr-[100px] lg:rounded-bl-[100px] rounded-tr-[45px] rounded-bl-[45px]'/>
                <img id="slidermain-3" src="images/Home.png" alt="key-interiors"  width='100%' height='100%' 
                   className='lg:rounded-tr-[100px] lg:rounded-bl-[100px] rounded-tr-[45px] rounded-bl-[45px]'/>
            </div>
            <div class="slidermain-nav">
                <a href="#slidermain-1"></a>
                <a href="#slidermain-2"></a>
                <a href="#slidermain-3"></a>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Slidermain
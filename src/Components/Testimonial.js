import React from 'react'
import '../Styles/Testimonial.css'

const Testimonial = () => {
  return (
    <div>
        <section className='lg:py-[60px] sm:py-[80px]  sm:px-[80px]  lg:px-[40px] py-[20px] px-[40px]'>
            <div class="testimonial-wrapper">
            <div class="testimonial">
                <img id="testimonial-1" src="images/Group.png" alt="key-interiors" width='100%' height='100%'/>
                <img id="testimonial-2" src="images/Group.png" alt="key-interiors"  width='100%' height='100%'/>
                <img id="testimonial-3" src="images/Group.png" alt="key-interiors"  width='100%' height='100%'/>
            </div>
            <div class="testimonial-nav">
                <a href="#testimonial-1"></a>
                <a href="#testimonial-2"></a>
                <a href="#testimonial-3"></a>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Testimonial
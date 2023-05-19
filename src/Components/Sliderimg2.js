import React from 'react'
import '../Styles/Slider2.css'


const Sliderimg2 = () => {
  return (
    <div>
        <section class="container">
            <div class="slider-wrapper2">
            <div class="slider2">
                <img id="slide-12" src="images/img3.png" alt="key-interiors" width='100%' height='100%'/>
                <img id="slide-22" src="images/img4.png" alt="key-interiors"  width='100%' height='100%'/>
                <img id="slide-32" src="images/img2.png" alt="key-interiors" width='100%' height='100%' />
            </div>
            <div class="slider-nav2">
                <a href="#slide-12"></a>
                <a href="#slide-22"></a>
                <a href="#slide-32"></a>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Sliderimg2
import React from 'react'
import '../Styles/Slider.css'


const Sliderimg = () => {
  return (
    <div>
        <section class="container">
            <div class="slider-wrapper">
            <div class="slider">
                <img id="slide-1" src="images/index3.png" alt="key-interiors" width='100%' height='100%'/>
                <img id="slide-2" src="images/img2.png" alt="key-interiors"  width='100%' height='100%'/>
                <img id="slide-3" src="images/img3.png" alt="key-interiors" width='100%' height='100%' />
            </div>
            <div class="slider-nav">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Sliderimg
import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const options = {
  margin: 20,
  responsiveClass: true,
  nav: true,
  autoplay: false,
  /* navText: ["<",  ">"], */
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      500: {
          items: 2,
      },
      700: {
          items: 3,
      },/* 
      900: {
          items: 4,
      }, */
      /* 1000: {
          items: 5,

      } */
  },
};

const VideoCarousel = () => {
    
  
    return (
    
<div>
<OwlCarousel className="slider-items owl-carousel" {...options}>
                      
<div class="item hover:tansition all  h-[350px] ">
        <video controls className='rounded-[24px] transition-transform duration-700 transform-gpu hover:scale-70 hover:rounded-[24px] hover:border hover:border-[#FFC12B]'>
        <source  className=' w-[400px] h-[350px]' src='https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' type="video/mp4" />.
      </video></div>
                      <div class="item hover:tansition all  h-[250px] ">
        <video controls className='rounded-[24px] transition-transform duration-300 transform-gpu hover:scale-70 hover:rounded-[24px] hover:border hover:border-[#FFC12B]'>
        <source  className=' w-[400px] h-[250px]' src='https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' type="video/mp4" />.
      </video></div>
                      <div class="item hover:tansition all  h-[250px] ">
        <video controls className='rounded-[24px] transition-transform duration-300 transform-gpu hover:scale-70 hover:rounded-[24px] hover:border hover:border-[#FFC12B]'>
        <source  className=' w-[400px] h-[250px]' src='https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' type="video/mp4" />.
      </video></div>
                      <div class="item hover:tansition all  h-[250px] ">
        <video controls className='rounded-[24px] transition-transform duration-300 transform-gpu hover:scale-70 hover:rounded-[24px] hover:border hover:border-[#FFC12B]'>
        <source  className=' w-[400px] h-[250px]' src='https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' type="video/mp4" />.
      </video></div>
                      <div class="item hover:tansition all  h-[252px] ">
        <video controls className='rounded-[24px] transition-transform duration-300 transform-gpu hover:scale-70 hover:rounded-[24px] hover:border hover:border-[#FFC12B]'>
        <source  className=' w-[400px] h-[250px]' src='https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' type="video/mp4" />.
      </video></div>
                      <div class="item hover:tansition all  h-[250px] ">
        <video controls className='rounded-[24px] transition-transform duration-300 transform-gpu hover:scale-70 hover:rounded-[24px] hover:border hover:border-[#FFC12B]'>
        <source  className=' w-[400px] h-[250px]' src='https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' type="video/mp4" />.
      </video></div>
                      <div class="item hover:tansition all  h-[250px] ">
        <video controls className='rounded-[24px] transition-transform duration-300 transform-gpu hover:scale-70 hover:rounded-[24px] hover:border hover:border-[#FFC12B]'>
        <source  className=' w-[400px] h-[250px]' src='https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' type="video/mp4" />.
      </video></div>
                      
                  </OwlCarousel>
</div>
    );
  };
  

export default VideoCarousel
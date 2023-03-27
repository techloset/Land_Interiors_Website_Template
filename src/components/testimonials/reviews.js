import React from 'react'
import bgImg from './bg.png'
import client from './Ellipse 30.png'
import './reviews.css'
import { useRef } from 'react'
import arrowNext from '../blogSection/arrowIcon.png'
import arrowPrev from '../blogSection/arrowIcon2.png'
import Slider from "react-slick";

const Reviews = () => {
const slide=React.useRef(null)

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "11.5%",
      slidesToShow: 1,
      dots: false,
     
      autoplay:false,
      autoplaySpeed:700,
      responsive: [
        {
          breakpoint: 1280,
          settings: {

            slidesToShow: 1,
            centerMode: false,
           
            infinite: true,
            dots: true

          }
        },]


    };
  return (
    <div className='flex items-center flex-col  gap-10 relative overflow-hidden '>
      <p className='font-medium md:text-4xl max-md:text-3xl max-sm:text-2xl  mt-10'>Our Happy Costumers</p>
      <p className='md:w-2/3 max-md:w-11/12 text-center ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet 
luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</p>





  
   
    
        <div className='w-[100%] sm:w-[90%] xl:w-full text-center '>

        <Slider ref={slide} {...settings}>
          <div className=''>  
          <div className='bg-cover h-[33.5rem]  bg-no-repeat relative flex justify-center items-center  md:mb-28 mx-[6.5%]' style={{backgroundImage:`url(${bgImg})`}}>
<div id='' className='bg-white bottom-5 lg:w-[60%] pt-[50px] sm:pt-[81px]  lg:bottom-[-20%] right-[10%] left-[10%] lg:right-auto lg:left-[17%] drop-shadow-xl  box-border lg:px-[10%]  pb-5 flex items-center   absolute z-0  flex-col '>
<img src={client} alt="" className='absolute max-sm:w-[100px] top-[-27%] sm:top-[-35%]'  />

<p className='pb-6 max-sm:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
<p className='text-[22px] font-semibold'>-Jeo Stanlee</p>
</div>

</div>
          </div>
          <div className=''>  
          <div className='bg-cover h-[33.5rem]  bg-no-repeat relative  flex justify-center items-center md:mb-28 mx-[6.5%]' style={{backgroundImage:`url(${bgImg})`}}>
<div id='' className='bg-white bottom-5 lg:w-[60%] pt-[50px] sm:pt-[81px]  lg:bottom-[-20%] right-[5%] left-[5%] sm:right-[10%] sm:left-[10%] lg:right-auto lg:left-[17%] drop-shadow-xl  box-border lg:px-[10%]  pb-5 flex items-center   absolute z-0  flex-col '>
<img src={client} alt="" className='absolute max-sm:w-[100px] top-[-27%] sm:top-[-35%]'  />

<p className='pb-6 max-sm:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
<p className='text-[22px] font-semibold'>-Jeo Stanlee</p>
</div>

</div>
          </div>
    
        
        </Slider>
        </div>
   <button onClick={()=>slide?.current?.slickPrev()} className='absolute left-0 bottom-[35%] max-sm:hidden lg:hidden' style={{}}  >
          <img src={arrowPrev} alt="" className='  max-md:w-12 max-sm:w-8  ' />

          </button>
          <button onClick={()=>slide?.current?.slickNext()} className='absolute right-0 bottom-[35%]  max-sm:hidden  lg:hidden' >
<img src={arrowNext} alt="" className='  max-md:w-12 max-sm:w-8 '/>
          </button>
        </div>

      

  )
}

export default Reviews

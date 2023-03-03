import React from 'react'
import bgImg from './bg.png'
import client from './Ellipse 30.png'
import './reviews.css'
import { useRef } from 'react'
import Slider from "react-slick";

const Reviews = () => {
const slide=React.useRef(null)

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "150px",
      slidesToShow: 1,
      dots: true,
     
      autoplay:true,
      autoplaySpeed:700,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerMode: false,
           
            infinite: true,
            dots: true

          }
        },]


    };
  return (
    <div className='flex items-center flex-col  gap-10 '>
      <p className='font-medium md:text-4xl max-md:text-3xl max-sm:text-2xl  mt-10'>Our Happy Costumers</p>
      <p className='md:w-2/3 max-md:w-11/12 text-center ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet 
luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</p>





  
   
    
        <div className='w-11/12 overflow-hidden '>

        <Slider {...settings}>
          <div className=''>
          <div className='bg-cover bg-no-repeat  relative divParent md:mb-28 mx-10' style={{backgroundImage:`url(${bgImg})`}}>

<img src={client} alt="" className='absolute z-10 Imgclass'  />
<div id='bg-white' className='bg-white  drop-shadow-xl md:pt-20 max-md:h-28 max-sm:h-32 max-md:pt-7 box-border px-5 pb-5 flex items-center   absolute z-0  flex-col  md:w-2/3 max-md:w-11/12'>

<p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
<p>-Jeo Stanlee</p>
</div>

</div>
          </div>
          <div>
          <div className='bg-cover bg-no-repeat   relative divParent' style={{backgroundImage:`url(${bgImg})`}}>

<img src={client} alt="" className='absolute z-20 Imgclass'  />
<div id='bg-white' className='bg-white  drop-shadow-xl md:pt-20 max-md:h-28 max-sm:h-32 max-md:pt-7 box-border px-5 pb-5 flex items-center   absolute z-10  flex-col  md:w-2/3 max-md:w-11/12'>

<p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
<p>-Jeo Stanlee</p>
</div>

</div>
          </div>
        
        </Slider>
        </div>

        </div>

      

  )
}

export default Reviews

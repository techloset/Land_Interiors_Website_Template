
import Img1 from './image 12.png';
import Img2 from './image 13.png';
import Img3 from './image 15.png';
import Img4 from './image 14.png';
import Img5 from './image 21.png';
import Img6 from './image 20.png';
import { useRef } from 'react';

import React, { Component } from "react";

import Slider from "react-slick";
import { useState } from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './blog.css'
import arrowNext from './arrowIcon.png'
import arrowPrev from './arrowIcon2.png'
export default function Blog() {
  
const slide=React.useRef(null)

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots:false,
      autoplay:true,
      autoplaySpeed:1000,
      swipe:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            autoplay:true,
            autoplaySpeed:1000,
          }
          
    },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            autoplay:true,
            autoplaySpeed:1000,
          }
          
    },
 
  ]
  }
    
    
    return (
      <div className='my-14'>
   
      <div     className='flex  justify-center items-center flex-col gap-10  '>
   
        <h1 className='blogs font-medium text-4xl  '>Blogs</h1>
       
    
        <div className='sliderParent w-5/6 relative'
        
      
        >
          <Slider ref={slide} {...settings}>
          <div  >
            <div className='mr-5'>

<img src={Img6} alt="" />
<p className='font-medium text-2xl leading-9 max-sm:text-lg  text-black'>Modern Interior</p>
<p className='text-justify w-11/12 max-lg:text-sm'>Lorem ipsum dolor sit amet, 
consectetur adipiscing elit ut
 aliquam,</p>
  </div>
              
            </div>
            <div  >
            <div className='mr-5'>

<img src={Img6} alt="" />
<p className='font-medium text-2xl leading-9 max-sm:text-lg text-black'>Exterior Project</p>
<p className='md:w-10/12 max-lg:text-sm  '>Lorem ipsum dolor sit amet, 
consectetur adipiscing elit ut
 aliquam,</p>
  </div>
              
            </div>
            <div  >
            <div className='mr-5'>

<img src={Img6} alt="" />
<p className='font-medium text-2xl leading-9  text-black max-sm:text-lg'>Grey Beauty</p>
<p className='md:w-10/12 max-lg:text-sm  '>Lorem ipsum dolor sit amet, 
consectetur adipiscing elit ut
 aliquam,</p>
  </div>
              
            </div>
            <div  >
              <div className='mr-5'>

            <img src={Img6} alt="" />
            <p className='font-medium text-2xl leading-9 max-lg:text-lg text-black'>Plantation interior</p>
            <p className='md:w-10/12 max-lg:text-sm'>Lorem ipsum dolor sit amet, 
consectetur adipiscing elit ut
 aliquam,</p>
              </div>
             
            </div>
            <div  >
            <div className='mr-5'>

<img src={Img6} alt="" />
<p className='font-medium text-2xl leading-9 max-lg:text-lg text-black'>Role of furnitures</p>
<p className='md:w-10/12 max-lg:text-sm'>Lorem ipsum dolor sit amet, 
consectetur adipiscing elit ut
 aliquam,</p>
  </div>
             
            </div>
          </Slider>
          <button onClick={()=>slide?.current?.slickPrev()} className='absolute previous'style={{}}  >
          <img src={arrowPrev} alt="" className='  max-md:w-12 max-sm:w-8  ' />

          </button>
          <button onClick={()=>slide?.current?.slickNext()} className='absolute Next' >
<img src={arrowNext} alt="" className='max-md:w-12 max-sm:w-8'/>
          </button>
        </div>
        <button style={{width:'200px',height: '60px'
  }} className="text-white font-bold  bg-purple-900    ">View All</button>

      </div>
      
      </div>
    );

}


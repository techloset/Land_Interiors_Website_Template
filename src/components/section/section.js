import React from 'react'
import Image from './image 15.png'
import './section.css'
import { useEffect ,useState} from 'react'
const Section = () => {

  return (
    <>
    <div className='flex relative lg:mt-14 '>

     <img src={Image} className='lg:w-[68.125rem] '  alt="" /> 
   

     <div className= {`absolute new pt-6 md:pt-[3.8125rem] xl:pr-[4.75rem] lg:pb-[4.8125rem]   lg:w-[61.125rem] left-[10%] right-[10%] md:left-[5%] md:right-[5%] lg:left-auto bottom-0 lg:bottom-auto  lg:right-[0px] lg:top-[100px]  bg-white z-20 bg-opacity-75    text-center `}>
        <p  className='text-[14px] sm:text-[20px] md:text-[36px]  '>Get personalised home interiors</p>
        <p className=' pb-[20px] md:pb-[80px] lg:pb-[44px] sm:text-[24px] md:text-[48px]'><b>in just 50 days</b></p>
        <button className="width py-2  px-4 text-[11px] sm:text-[16px] md:text-[30px] md:px-[51px] md:py-[25px] text-white font-semibold   bg-[#4B2A63]">Speak With A Online Consultant</button>
    
     </div>
    </div>
  
    </>
  )
}

export default Section

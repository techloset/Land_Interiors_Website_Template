import React from 'react'
import Image from './image 15.png'
import './section.css'
import { useEffect ,useState} from 'react'
const Section = ({shouldAnimate}) => {
  let className=''
  if(window.location.pathname=='/' ){

    
      className=(shouldAnimate<=660 && shouldAnimate>=100 ) ?'  animate__fadeInUp':'invisible'
   
  }
  return (
    <>
    <div className='flex relative '>

     <img src={Image} className='mt-14 width-Height '  alt="" /> 
   

     <div className= {`absolute new max-md:left-28 max-lg:right-28  max-md:pb-0 max-md:bottom-0 md:right-0 md:top-52 md:p-10 max-md:px-5 max-md:pt-7  bg-white z-20 bg-opacity-75    text-center animate__animated ${className}`}>
        <p  className='pb-2'>Get personalised home interiors</p>
        <p className='pb-3'><b>in just 50 days</b></p>
        <button className="width text-white font-bold   bg-purple-900">Speak With A Online Consultant</button>
    
     </div>
    </div>
  
    </>
  )
}

export default Section

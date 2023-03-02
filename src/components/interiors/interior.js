import React from 'react'
import First from './Group 5.png'
import Second from './Group.png'
import Third from './bx_bx-home-smile.png'
import './interior.css'
const Interior = ({shouldAnimate}) => {
  return (
   <>
   <div className='flex items-center flex-col gap-16  mt-20 mb-36'>

   <p className='text-3xl  font-medium animate-bounce'>Why LAND Interiors</p>
   <div className='flex sm:gap-32 max-sm:flex-col max-sm:gap-10 justify-around sm:ml-8  sm:mr-8'>

<div className={`flex flex-col items-center w-150  gap-4  leading-3 ${shouldAnimate<=1090&& shouldAnimate>=520?'animate__animated animate__slideInLeft':''} ` }>

   <img src={First} alt=""  className='w-20 hover:animate__pulse animate__animated ' />
   <p  className='text-center font-normal text-xl' >50 days or we
pay you rent</p>
</div>
<div className={`flex flex-col items-center w-150  gap-4  leading-3 ${shouldAnimate<=1090&& shouldAnimate>=520?'sm:animate__animated sm:animate__slideInUp':''} ` }>

   <img src={Third} alt=""  className='width' />
   <p className='font-normal text-center text-xl '>1500+happy
customers</p>
</div>
<div className={`flex flex-col items-center w-150  leading-3 m-0 ${shouldAnimate<=1090&& shouldAnimate>=520?'animate__animated animate__slideInRight':''} ` } style={{gap:'22px'}}>

   <img src={Second} alt=""  className='w-20 ' />
   <p  className='font-normal text-xl text-center'>300+ design
experties</p>
   </div>
   </div>
</div>
   </>
  )
}

export default Interior

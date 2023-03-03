import React from 'react'
import First from './Group 5.png'
import Second from './Group.png'
import Third from './bx_bx-home-smile.png'
import './interior.css'
const Interior = ({shouldAnimate}) => {
   let className=''
   function animate(type){
      // className?`${className} animate__slideInLeft`:'invisible'
      if(window.location.pathname=='/'){
         let className=''
               if(window.innerWidth>=640){
         
                  if(shouldAnimate<=1090 && shouldAnimate>=520){
                     if(type=='left')return 'animate__slideInLeft'
                     else if(type=='top') return 'animate__slideInUp'
                     else if(type=='right')return 'animate__slideInRight'
                     
                  }
                  else {
                     return 'invisible'
                  }
               
               }
            
            }
   }


  return (
   <>
   <div className='flex items-center flex-col gap-16  mt-20 mb-36'>

   <p className='text-3xl  font-medium animate-bounce'>Why LAND Interiors</p>
   <div className='flex sm:gap-32 max-sm:flex-col max-sm:gap-10 justify-around sm:ml-8  sm:mr-8'>

<div className={`flex flex-col items-center w-150  gap-4  leading-3 animate__animated ${animate("left")} ` }>

   <img src={First} alt=""  className='w-20 hover:animate__pulse  ' />
   <p  className='text-center font-normal text-xl' >50 days or we
pay you rent</p>
</div>
<div className={`flex flex-col items-center w-150  gap-4  leading-3 animate__animated ${animate("top")} ` }>

   <img src={Third} alt=""  className='width' />
   <p className='font-normal text-center text-xl '>1500+happy
customers</p>
</div>
<div className={`flex flex-col items-center w-150  leading-3 m-0 animate__animated ${animate("right")} ` } style={{gap:'22px'}}>

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

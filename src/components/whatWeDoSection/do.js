import React from 'react'
import Img1 from './image 3.png'
import Img2 from './image 4.png'
import Img3 from './image 8.png'
import Img4 from './image 9.png'
const Do = () => {
  return (
    
    <>
  <div className='my-24 '>
    
 
    <div className='flex flex-col items-center gap-[5.5625rem] lg:gap-[3.75rem] px-10  '>
      <p className='font-medium text-3xl leading-9 '>What we do?</p>
      <div className='grid lg:grid-cols-4 max-lg:grid-cols-2 gap-[78px]  justify-evenly  max-sm:grid-cols-1'>

      <div className='font-semibold text-lg leading-6 text-center text-[#4B2A63] '>
        <img src={Img1} alt=""  className='pb-[2.5rem]'/>
        
    <p>Modular Kitchen</p>
      </div>
      <div  className='font-semibold text-lg leading-6 text-center text-[#4B2A63]'>

      <img src={Img2} alt="" className='pb-[2.5rem]'/>
      <p>Bedroom</p>
      </div>
      <div  className='font-semibold text-lg leading-6 text-center text-[#4B2A63] '>
      <img src={Img3} alt="" className='pb-[2.5rem]'/>
      <p>Living room</p>
      </div>
      <div  className=' font-semibold text-lg leading-6 text-center text-[#4B2A63] '>
      <img src={Img4} alt="" className='pb-[2.5rem]' />
      <p>Home office</p>
      </div>
    </div>
      <p className='text-center w-[70%] xl:w-[43%] hidden lg:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deleniti, id velit aut tempore nam voluptate beatae autem voluptas ipsa numquam est ducimus quaerat laudantium.</p>
      </div>
     </div>
      </>
  )
}

export default Do

import React from 'react'
import Img1 from './image 11.png'
import Img2 from './image 17.png'
import Img3 from './image 18.png'
import Img4 from './image 19.png'
import './projects.css'
import { useEffect ,useState} from 'react'
const Projects = () => {
  

  return (
    
    <div className='flex relative max-lg:justify-center max-lg:flex-col max-lg:items-center mt-[14.125rem] lg:mt-[7.75rem]'>

<div className="  grid grid-cols-2 grid-rows-3 gap-3 max-h-[36.5625rem] w-[72%] m-auto lg:w-auto lg:ml-[6rem] mb-[3.375rem] lg:mb-0 "  >
  <img src={Img1} alt="" class="h-full w-full row-start-1 row-end-3 " />
  <img src={Img3} alt="" class="h-full w-full "/>
  <img src={Img2} alt="" class="h-full w-full row-start-2 row-end-4"/>
  <img src={Img4} alt="" class="h-full w-full"/>
</div>



<div  className= {` w-[72%] lg:w-[60%] xl:w-[50%] lg:px-[4.25rem] lg:pb-[3.625rem]  bottom-[1.75rem] lg:min-h-[32.4375rem]   flex flex-col items-center justify-center  top-[2.25rem] lg:absolute right-[6.6rem] lg:bg-white z-20   lg:bg-opacity-75    lg:text-center `}>
  <p id='projectsSection' className='absolute top-[-14%] left-[13.5%] lg:static font-medium text-3xl leading-9 mt-[63px]  mb-[2.8125rem] '>Our Projects</p>


   <p   className='  text-[18px] mb-[1.875rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
     <p  className='   text-[18px] mb-[3.4375rem]'> magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>


   <button  className="text-white font-bold self-center px-[2rem] py-[1rem]  sm:px-[5.5rem] sm:py-[1.3125rem] bg-purple-900 whitespace-nowrap  ">View All</button>

</div>
</div>

  
  )
}

export default Projects

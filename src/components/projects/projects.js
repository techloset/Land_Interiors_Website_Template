import React from 'react'
import Img1 from './image 11.png'
import Img2 from './image 17.png'
import Img3 from './image 18.png'
import Img4 from './image 19.png'
import './projects.css'
import { useEffect ,useState} from 'react'
const Projects = ({shouldAnimate}) => {
  

  return (
    
    <div className='flex relative max-lg:justify-center max-lg:flex-col max-lg:items-center'>

<div className="lg:ml-10  grid grid-cols-2 grid-rows-3 gap-3 lg:w-1/2 max-lg:w-5/6 "  >
  <img src={Img1} alt="" class="h-full w-full row-start-1 row-end-3 " style={{}}/>
  <img src={Img3} alt="" class="h-full w-full "/>
  <img src={Img2} alt="" class="h-full w-full row-start-2 row-end-4"/>
  <img src={Img4} alt="" class="h-full w-full"/>
</div>



<div  className= {`box  max-lg:w-5/6 max-lg:text-justify flex flex-col lg:items-center lg:justify-center lg:p-3 lg:absolute right-0 bg-white z-20   bg-opacity-75    lg:text-center ${shouldAnimate>2260&& shouldAnimate<=3190&&window.innerWidth>=1024?'animate__animated animate__fadeInLeft':''}`}>
  <p id='projectsSection' className='font-medium text-3xl leading-9   '>Our Projects</p>


   <p   className='pb-2 max-lg:pt-5  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
     <p  className='pb-3   max-lg:pt-5    '> magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>


   <button style={{width:'30%',height: '60px'
  }} className="text-white font-bold self-center  bg-purple-900 py-2 ">View All</button>

</div>
</div>

  
  )
}

export default Projects

import React from 'react'
import webLogo from "./Artboard 22 2.png";
import logo1 from "./akar-icons_twitter-fill.png";
import logo2 from "./ant-design_youtube-filled.png";
import logo3 from "./brandico_facebook-rect.png";
import logo4 from "./bx_bxl-instagram.png";
import logo5 from "./brandico_linkedin-rect.png";
import { Link } from 'react-router-dom';
// import logo5 from "./akar-icons_twitter-fill.png";

const Footer = () => {
  return (
    <div className='bg-gray-100 flex max-lg:pl-10 box-border justify-evenly items-center  p-5 lg:h-[auto] ' >
      <ul  className='w-full lg:w-[25%] flex flex-col justify-center items-center lg:items-start gap-3 py-3 '>
        <li><img src={webLogo} className='' alt="" /></li>
        <li className='lg:hidden block text-center' >
           <li>
            
             landinteriors@gmail.com 
            </li>
            <li className='whitespace-nowrap'>

+91 98987 65656
            </li>
</li>
        <li className='max-lg:hidden '><p>We introduce our selves as  LAND Interior and Architectural Design Consultancy - one of the best interior designers in Chennai. Chennai Luxury Interior and Architectural Design Consultancy has challenged the conventional way of interior designing and given new dimensions to the art of interior designing.</p></li>
        <li className='flex gap-3    '>
             <img src={logo1}  alt="" />
             <img src={logo2}   alt="" />
             <img src={logo3}  alt="" />
             <img src={logo4}   alt="" />
             <img src={logo5}   alt="" />

        </li>
      </ul>
      <ul className='self-center flex flex-col gap-10 max-lg:hidden'>
        <li className='font-semibold'>WHAT WE DO</li>
        <li>

        <li>
        Interior Design



        </li>
        <li>
        Kitchen


        </li>
        <li>
        Ceiling
        </li>
        <li>
        Bedroom
        </li>
        <li>
        Smart Home
        </li>
        </li>
      </ul>
      <ul className=' flex flex-col gap-10'>
        <li className=' lg:block hidden font-semibold ' >Get in touch</li>
        <ul className='flex flex-col gap-[50px]'>

        <li className='hidden lg:block' >
           <li>
            
             landinteriors@gmail.com 
            </li>
            <li className='whitespace-nowrap'>

+91 98987 65656
            </li>
</li>
            <ul className='lg:flex gap-10  hidden  ' >

<li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/Studio">Studio</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>

</ul>


        </ul>
      </ul>

      
    </div>
  )
}

export default Footer

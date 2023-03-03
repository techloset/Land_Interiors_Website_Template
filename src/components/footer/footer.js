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
    <div className='bg-gray-100 flex max-lg:pl-10 box-border justify-center max-lg:items-center max-xl:gap-20 xl:gap-28 p-5 lg:h-[auto] ' >
      <ul  className='w-1/3 flex flex-col gap-3 py-3 '>
        <li><img src={webLogo} className='max-lg:pl-[20%] max-sm:pl-[30%] max-md:pb-6' alt="" /></li>
      
        <li className='max-lg:hidden '><p>We introduce our selves as  LAND Interior and Architectural Design Consultancy - one of the best interior designers in Chennai. Chennai Luxury Interior and Architectural Design Consultancy has challenged the conventional way of interior designing and given new dimensions to the art of interior designing.</p></li>
        <li className='flex gap-3  max-pt-20 max-md:pt-10 '>
             <img src={logo1}  alt="" />
             <img src={logo2}   alt="" />
             <img src={logo3}  alt="" />
             <img src={logo4}   alt="" />
             <img src={logo5}   alt="" />

        </li>
      </ul>
      <ul className='self-center flex flex-col gap-10 max-lg:hidden'>
        <li>WHAT WE DO</li>
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
      <ul className='lg:self-end flex flex-col lg:gap-10 '>
        <li className=' max-lg:hidden' >Get in touch</li>
        <li className='max-lg:absolute max-lg:text-center max-lg:left-[32%]  max-lg:right-[50%] ' >
           <li>
            
             landinteriors@gmail.com 
            </li>
            <li className='whitespace-nowrap'>

+91 98987 65656
            </li>
            <ul className='flex gap-10  max-lg:hidden' style={{marginBottom:'10%',marginTop:'25%'}}>

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
</li>


      </ul>

      
    </div>
  )
}

export default Footer

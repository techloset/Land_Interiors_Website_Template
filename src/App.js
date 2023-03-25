
import React, { createContext, useState,useContext } from "react";
import { Link } from 'react-router-dom';
import './App.css';
import About from "./components/About/about";
import Nav from './components/nav/nav';
import { Outlet } from 'react-router-dom';

import Project from './components/projects/projects';
import Blog from  './components/blogSection/blog';
import Studio from './components/studio/studio';
import Reviews from "./components/testimonials/reviews";
import Footer from "./components/footer/footer";
import bg2 from './Rectangle25.png'
import Contact from "./components/contacts/contact";
export const DataContext = createContext();

function App() {

        const [shouldAnimate, setShouldAnimate] = useState(0);

  
  window.addEventListener("scroll", handleScroll);
  
        function handleScroll() {
          const scrollPos = window.scrollY;
          setShouldAnimate(scrollPos );
          window.removeEventListener("scroll", handleScroll);
        }

  return (
<>

<Nav {...{shouldAnimate}}></Nav>
    <Outlet>
    </Outlet>
<About />

<div style={{ backgroundImage: `url(${bg2})` }} className='bg-cover  bg-no-repeat bg-center '>

<Project ></Project> 
 <Blog ></Blog>
</div>
<Studio ></Studio>
<Reviews >

</Reviews>
<Contact></Contact>
<Footer ></Footer>

</>
  )
}

export  {App}

import React, { useState } from "react";
import logo from "./images/logo.png";
import "./nav.css";
import Vector from "./images/Vector.png";
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react'

const Nav = ({shouldAnimate}) => {
  const [navDefault, setNavDefault] = useState(false);
  

  function navShow() {
    setNavDefault(!navDefault);
  }

  return (
    <nav id="nav" className="bg-gray-100 flex flex-col">
      <div className=" flex justify-center items-center gap-4 justify-between items-center flex-row ">
        <img
          className={`mt-5 mb-4 ${shouldAnimate<=100? "animate__animated animate__pulse" : ""}`}
          src={logo}
          alt=""
        />

        <div className="flex gap-14 justify-center items-center">
          <p
            className={`max-md:hidden  ${
              shouldAnimate<=100 ? "animate__animated animate__fadeInDown" : ""
            } text-purple-900 font-poppins font-medium text-base leading-6 `}
          >
            Join as Design Expert
          </p>
          <p
            className={`max-md:hidden    ${
              shouldAnimate<=100 ? "animate__animated animate__fadeInDown " : ""
            }  text-purple-900 font-poppins font-medium text-base leading-6 mr-14 `}
          >
            Partner with LAND Interiors
          </p>
        </div>
        <button className="md:hidden mr-10 max-md:cursor-pointer " >
         

<Hamburger easing="ease-out" toggled={navDefault} toggle={navShow} />

        </button>
      </div>
      <ul
        className={` ${shouldAnimate<=220?'  animate__animated  animate__backInDown ':''}  flex justify-center items-center max-md:gap-6 max-md:mb-6  max-md:flex-col  md:p-10 md:gap-24 max-md:${
          navDefault ? "" : "hidden"
        }  `}
      
      >
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
    </nav>
  );
};

export default Nav;

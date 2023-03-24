import React, { useState } from "react";
import logo from "./images/logo.png";
import "./nav.css";
import Vector from "./images/Vector.png";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

const Nav = ({ shouldAnimate }) => {
  const [navDefault, setNavDefault] = useState(false);

  function navShow() {
    setNavDefault(!navDefault);
  }

  return (
    <nav id="nav" className="bg-[#F8F8F8] flex flex-col pb-[2.75rem] lg:pb-[3.625rem] text-[1.25rem] ">
      <div className=" flex mt-[2.3125rem] sm:ml-[1.4375rem] lg:ml-[2.3125rem] justify-between pr-[1.25rem] sm:pr-[4.5625rem]  flex-row ">
        <img
          className={` ${
            shouldAnimate <= 100 ? "animate__animated animate__pulse" : ""
          }  lg:w-[6.9375rem] w-[8.3125rem]` }
          src={logo}
          
          alt=""
        />

        <div className="flex 
text-[#451A64] gap-[6.75rem] justify-center font-medium  items-center mr-[1.3125rem]">
          <p
            className={`hidden  lg:block  ${
              shouldAnimate <= 100
                ? "animate__animated animate__fadeInDown"
                : ""
            }  leading-[1.875rem] font-poppins font-medium   `}
          >
            Join as Design Expert
          </p>
          <p
            className={`hidden  lg:block   ${
              shouldAnimate <= 100
                ? "animate__animated animate__fadeInDown "
                : ""
            }   leading-[1.875rem] font-poppins font-medium   mr-14 `}
          >
            Partner with LAND Interiors
          </p>
        </div>
        <button className="lg:hidden  cursor-pointer ">
          <Hamburger easing="ease-out" toggled={navDefault} toggle={navShow} />
        </button>
      </div>
      <ul
        className={` ${
          shouldAnimate <= 220
            ? "  animate__animated  animate__backInDown "
            : ""
        }  lg:flex  justify-center items-center sm:ml-[3.25rem]  gap-6   flex-col md:flex-row  mt-[2.375rem]  md:gap-[4.8125rem] ${
          navDefault ? "flex" : "hidden"
        }  `}
      >
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li className="ml-[3px]">
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

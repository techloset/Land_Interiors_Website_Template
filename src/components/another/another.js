import React from "react";
import image from "./image.png";
import "./another.css";
const Another = () => {
  return (
    <div className="relative   ">
      <div
        className={`absolute box-border flex flex-col justify-center  lg:text-center top-0 bottom-0 lg:bottom-auto lg:top-[6rem] pl-[1rem] sm:pl-[5.9375rem] lg:pl-[11.1875rem] pr-6  sm:pr-[2.6875rem] lg:pr-[9.1875rem] pt-[3.875rem] pb-[5.1875rem]   left-0 bg-white z-20 bg-opacity-75   `}
      >

        <p className="font-medium sm:text-4xl text-2xl  leading-9 ">
          Make your dream interior in
        </p>
        <p className="font-medium mt-3 leading-[72px] md:text-5xl text-3xl  md:pb-10 box-border">
          3 easy steps
        </p>
        <h2
          className="font-semibold  md:text-4xl text-2xl mt-[3rem] lg:mt-[4.75rem] text-purple-900 "
        >
          Explore
        </h2>
        <p
          className=" mt-[7px] 
"
        >
          Explore more than just modular design <br className="sm:block hidden" /> ideas with our experts.
        </p>
        <h2
          className="font-semibold md:text-4xl mt-[57px] max-md:text-2xl leading-8 text-purple-900 
"
        >
          Design
        </h2>

        <p
          className="mt-[7px] 
            "
        >
          Complete the designs with painting, flooring <br className="sm:block hidden"  /> and other decor solutions
        </p>

        <h2
          className="font-semibold mt-[3.625rem]  md:text-4xl max-md:text-2xl leading-8 text-purple-900  
"
        >
          Move-in
        </h2>
        <p
          className=" mt-[7px]
"
        >
          {" "}
          Move in with ease, with our hassle-free civil work <br className="sm:block hidden"    /> and installation
          services.
        </p>
      </div>
      <div className="flex justify-end w-full">
        <img src={image} className=" h-[50.25rem]   lg:h-[57.75rem] " alt="" />
      </div>
    </div>
  );
};

export default Another;

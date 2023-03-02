import React from "react";
import image from "./image.png";
import './another.css'
const Another = ({shouldAnimate}) => {
  return (
    <div className="relative right-0  parentDiv ">
    
        <div
          className={`absolute box-border flex flex-col md:gap-5  md:items-center max-md:px-3 justify-center max-md:bottom-0   left-0 bg-white z-20 bg-opacity-75 lg:w-7/12 max-lg:w-8/12 mediaQuery  ${shouldAnimate>=1200&& shouldAnimate<=1900?'animate__animated animate__fadeInLeft':''}`}
          style={{
            
           
          }}
        >
          <p className="font-medium md:text-4xl max-md:text-2xl max-sm:text-xl max-sm:pb-4 leading-9 " >
            Make your dream interior in
          </p>
          <p className="font-medium md:text-5xl max-md:text-3xl leading-9 md:pb-10 box-border"  >3 easy steps</p>
          <h2
            className="font-semibold  md:text-4xl max-md:text-2xl leading-8 text-purple-900 
" 
          >
            Explore
          </h2>
          <p
            className="font-normal text-base leading-6 max-sm:text-sm max-sm:font-medium md:px-4 text-black 
"
          >
            Explore more than just modular design ideas  with our experts.
          </p>
          <h2
            className="font-semibold md:text-4xl max-md:text-2xl leading-8 text-purple-900 
"
          >
            Design
          </h2>
        

          <p
            className="font-normal text-base leading-6 max-sm:text-sm max-sm:font-medium md:px-4 text-black
            "
            >
            Complete the designs with painting,  flooring  and  other decor
            solutions
          </p>
           
          <h2
            className="font-semibold  md:text-4xl max-md:text-2xl leading-8 text-purple-900  
"
          >
            Move-in
          </h2>
          <p
            className="font-normal max-sm:text-sm  max-sm:font-medium text-base leading-6 md:px-4 text-black  
"
          >
            {" "}
            Move in with ease, with our hassle-free civil work  and installation
            services.
          </p>
        </div>
        <img
          src={image}
             className="imageFull max-md:w-full h-full   "
          alt=""
        />
      </div>
   
  );
};

export default Another;

import React from "react";
import Img1 from "./image 22.png";
import Img2 from "./image 23.png";
import Img3 from "./image 24.png";
import Img4 from "./image 25.png";
import Img5 from "./image 26.png";
import Img6 from "./image 27.png";
import Img7 from "./image 28.png";
const Studio = () => {
  return (
    <div className="flex flex-col items-center justify-center  gap-12 ">
      <h1 className="font-medium md:text-4xl max-md:text-3xl max-sm:text-xl mt-10 max-md:self-start max-md:ml-[15%] ">Our Interior Design Products</h1>
      <div
        className=" grid md:grid-cols-4 max-md:grid-cols-2 grid-rows-2 w-10/12 gap-4 "
        style={{
        
          maxHeight:'80vh'
        }}
      >
        
        <img src={Img2} alt="" className="h-full w-full row-start-1 row-end-3
    col-start-4 column-end-5 " />
        <img src={Img3} alt="" className="h-full w-full " />
        <img src={Img4} alt="" className="h-full w-full " />
        <img src={Img5} alt="" className="h-full w-full" />
        <img src={Img6} alt="" className="h-full w-full" />
        <img src={Img7} alt=""   className="h-full w-full   row-start-1 row-end-3
    col-start-2
    " />
      </div>
      <p className="text-center md:w-1/2 max-md:w-9/12">

      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
purus sit amet luctus venenatis, lectus magna fringilla urna,
 porttitor rhoncus dolor purus non enim
      </p>
      <button style={{width:'200px',height: '60px'
  }} className="text-white font-bold  bg-purple-900 whitespace-nowrap    ">View All</button>
    </div>
  );
};

export default Studio;

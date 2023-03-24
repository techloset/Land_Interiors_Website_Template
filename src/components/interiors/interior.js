import React from "react";
import First from "./Group 5.png";
import Second from "./Group.png";
import Third from "./bx_bx-home-smile.png";
import "./interior.css";
const Interior = () => {
  return (
    <>
      <div className="flex items-center flex-col gap-[5.9375rem]  mt-[4rem] md:mt-[8.8125rem] mb-36">
        <p className="text-3xl  font-medium ">Why LAND Interiors</p>
        <div className="flex  flex-col md:flex-row w-full  max-md:gap-32 justify-evenly ">
          <div
            className={`flex flex-col items-center gap-4  leading-3  `}
          >
            <img src={First} alt="" className="w-20 " />
            <p className="text-center font-normal text-xl">
              50 days or we <br /> pay you rent
            </p>
          </div>
          <div
            className={`flex flex-col items-center   gap-4  leading-3 ")} `}
          >
            <img src={Third} alt="" className="width" />
            <p className="font-normal text-center text-xl ">
              1500+happy <br /> customers
            </p>
          </div>
          <div
            className={`flex flex-col items-center  gap-[22px] leading-3 m-0 ")} `}
          
          >
            <img src={Second} alt="" className="w-20 " />
            <p className="font-normal text-xl text-center">
              300+ design <br /> experties
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interior;

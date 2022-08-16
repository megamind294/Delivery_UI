import React from "react";
import Pic from "../src/Pic/Img.svg";
import Head2 from "../src/Head2.js";
import "../src/App.css";

const First = () => {
  return (
    <>
      <Head2 className="" />
      <div className=" overflow-hidden">
        <div className="flex flex-col-2 gap-2  items-center justify-between  py-12 px-24 pb-4 ">
          <div className="">
            <h1 className="not-italic font-bold text-6xl text-black ">
              Order Products
            </h1>
            <h1 className="not-italic font-bold text-6xl text-black ">
              Faster Easier
            </h1>
            <p className="not-italic font-normal text-xl leading-7 text-gray-600 my-8 ">
              Order your favorite foods at any time and we will deliver them
              right to where you are.
            </p>

            <button className="w-40 h-9 bg-yellow-500 rounded-full font-semibold">
              Get Started
            </button>
          </div>
          <div className="flex items-center justify-center">
            <img src={Pic} className="w-6/6" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default First;

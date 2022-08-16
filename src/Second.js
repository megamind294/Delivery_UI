import React from "react";
import Find from "../src/Pic/Find_out.svg";
import Your from "../src/Pic/Your_Safety.svg";
import Head2 from "./Head2";

const Second = () => {
  return (
    <>
      <Head2 />
      <div className="grid grid-rows-2">
        <div className="grid grid-cols-2">
          <div className="flex justify-center w-3/4 ml-32 m:ml-14 ">
            <img className="Find" src={Find} alt=""></img>
          </div>
          <div className="flex justify-center mt-32">
            <div>
              <h3 className="not-italic font-medium text-3xl text-black ">
                Find Out A Little More About Us
              </h3>

              <p className="not-italic font-medium text-sm text-gray-400 ">
                We are a company dedicated to the distribution of <br></br>
                products by delivery to your home or to the place<br></br> where
                you are, with the best quality of dellivery.
              </p>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-2  mt-16  m:mt-5">
          <div className="flex justify-center   items-center mt-16">
            <div className=" Hi ml-28 mb-20 ">
              <h3 className="not-italic font-medium text-3xl text-black ">
                Your Safety Is Important
              </h3>

              <p className="not-italic font-medium text-sm text-gray-400">
                When your order reaches you, we have the health safety
                protocols, so that you are protected from any disease. Watch the
                video of how the delivery is made.
              </p>
            </div>
          </div>
          <div className="flex justify-center w-3/4  ">
            <img src={Your} alt='fffff' className="Your"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;

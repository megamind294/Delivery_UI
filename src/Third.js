import React from "react";
import Card_1 from "../src/Pic/Card_1.svg";
import Card_2 from "../src/Pic/Card_2.svg";
import Card_3 from "../src/Pic/Card_3.svg";
import Track from "../src/Pic/Track.svg";
import Apple from "../src/Pic/Apple_icon.svg";
import Android from "../src/Pic/Android_Icon.svg";
import Head2 from "./Head2";
import "./Third.css";
const Third = () => {
  return (
    <div className="p-4 ">
      <Head2 />
      <div>
        <div className="flex justify-center m-10">
          <h3 className="not-italic font-medium text-2xl text-black">
            Some Services
          </h3>
        </div>
      </div>

      <div className="the card flex flex-row-3 gap-16 mx-10 my-3 justify-center text-center m:h-[378px]	">
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:border-gray-700   ">
          <div class="p-5 text-center">
            <a href="#/">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Payment Done
              </h5>
            </a>
            <a href="#/" className="">
              <img class=" w-4/6 text-center m-12  " src={Card_1} alt="" />
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Pay with a Visa or PayPal card and without much ado.
            </p>
            <a href="#/" className="">
              learn more
            </a>
          </div>
        </div>

        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md m:h-[380px]  dark:border-gray-700">
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Find Your Product
              </h5>
            </a>
            <a href="#">
              <img class=" w-3/6 text-center m-10 ml-16 " src={Card_2} alt="" />
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              We offer sale of products through the internet
            </p>
            <a href="#" className="">
              learn more
            </a>
          </div>
        </div>

        <div class="max-w-sm m:h-[380px] bg-white rounded-lg border border-gray-200 shadow-md  dark:border-gray-700 ">
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Product Received
              </h5>
            </a>
            <a href="#">
              ''
              <img class=" w-3/6 text-center m-4 ml-16" src={Card_3} alt="" />
            </a>
            <p class="mb-3 font-normal text-gray-700 ">
              In our app you can see the delay time of your order.
            </p>
            <a href="#" className="">
              learn more
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2  m-16 p-5 mtt ">
        <div className="">
          <img className="w-[70%] clw" src={Track} alt="" />
        </div>
        <div className=" m-10">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  ">
            Watch Your Delivery At Any Time
          </h3>
          <p className="not-italic font-medium text-sm text-gray-400 gap-4 mt-8">
            With our app you can view the route of your order,<br></br> from our
            local headquaters to the place where<br></br> you are. Look for the
            app now!
          </p>
          <div className="mt-8 flex">
            <button className=" w-36 h-8 flex justify-around bg-yellow-500 rounded-full font-semibold">
              <div className="p-2 hiii flex -mt-1.5 ">
                <img className="  w-4  mt-1    " src={Apple} />
                <p className="">App Store</p>
              </div>
            </button>
            <button className=" w-36 h-8 flex justify-around bg-yellow-500 rounded-full font-semibold ml-6">
              <div className="mt-0.5 byee flex   ">
                <img className="  w-4  mt-1  " src={Android} />
                <p>Play Store</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;

import React from "react";
import Twitter from "../src/Pic/Twitter.svg";
import Facebook from "../src/Pic/Facebook.svg";
import Insta from "../src/Pic/Insta.svg";
import Head2 from "./Head2";
 import '../src/Fouth.css';

const Fourth = () => {
  return (
    <div>

      <Head2/>
      <div className="flex flex-col-3 ml-28  gap-28 mt-20 Contact">
        <div className=" ">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Contact Us From Here
          </h3>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            You can contact us from here, you can write to us, call us
            or visit our service center, we will gladly assit you.
          </p>
        </div>
        <ul className=" grid ">
          <li className="font-semibold ">
            Telephone:
            <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              999-888-777
            </span>
          </li>
          <li className="font-semibold">
            Email:
            <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              delivery@gmail.com
            </span>
          </li>
          <li className="font-semibold">
            Location:
            <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Mumbai-India
            </span>
          </li>
        </ul>
        <div className=" p-4">
          <button className="w-40 h-9 bg-yellow-500 rounded-full font-semibold ">
            Conatct US
          </button>
        </div>
      </div>
      <div className="bg-[#FEE395]  mt-32  h-[367px] container_1  ">
        <div className="flex flex-col-5 gap-28  space-y-12 Footer ">
          <ul className="list-none font-semibold ml-10 m-3 mt-12 hhh">
            Delivery
            <li className="mb-3 font-normal text-gray-700 dark:text-gray-400">Order Products Faster</li>
            <li className="mb-3 font-normal text-gray-700 dark:text-gray-400">Easier</li>
          </ul>
          <ul className="list-none font-semibold m-3">
            Our Services
            <li className="mb-3 font-normal text-gray-700 dark:text-gray-400">Pricing</li>
            <li className="mb-3 font-normal text-gray-700 dark:text-gray-400">Discounts</li>
            <li className="mb-3 font-normal text-gray-700 dark:text-gray-400">Report a bug</li>
            <li className="mb-3 font-normal text-gray-700 dark:text-gray-400">Terms Of service </li>
          </ul>
          <ul className="list-none font-semibold m-3">
            Our Company
            <li className="mb-3 font-normal text-gray-700 dark:text-gray-400">Blog</li>
            <li className="mb-3 font-normal text-gray-700 dark:text-gray-400">Our Mission</li>
            <li className="mb-3 font-normal text-gray-700 dark:text-gray-400">Get in touch</li>
          </ul>
          <ul className="list-none font-semibold m-3">
            Community
            <li className="mb-3 font-normal text-gray-700 dark:text-gray-400">Support</li>
            <li className="mb-3 font-normal text-gray-700 dark:text-gray-400">Questions</li>
            <li className="mb-3 font-normal text-gray-700 dark:text-gray-400">Customer Help</li>
          </ul>
          <div className="flex w-8 mb-28 gap-6">
          <img src={Twitter} className="Twitter " alt=""></img>
          <img src={Facebook} className="Facebook  " alt=""></img>
          <img src={Insta} className="Insta  " alt=""></img>
          </div>
        </div>
        <div>
            <h4 className="mb-1 font-normal  text-gray-700 dark:text-gray-400 flex justify-center mt-1 ">© Ajinkya. All rights reserved</h4>
        </div>
      </div>
    </div>
  );
};

export default Fourth;

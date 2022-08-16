import React from 'react'
import "../src/App.css"
function Head2() {
  return (
    <div >
        <div className=" flex justify-between  gap-4 mt-5 ml-10 p-3  ">
        <h3 className="font-semibold ">Delivery</h3>
        <div className="flex justify-between  m:gap-[2rem] ">
          <h3 className="font-semibold">Home</h3>
          <h3 className="font-semibold">About Us</h3>
          <h3 className="font-semibold">Services</h3>
          <h3 className="font-semibold">Conatct Us</h3>
          <div className="flex justify-end">
            <button className="w-40 h-9 bg-yellow-500 rounded-full font-semibold">
              Oder Now!
            </button>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Head2
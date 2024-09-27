import React from "react";

function Serch() {
  return (
    <div className="h-40 w-11/12 bg-black rounded-md ">
      <div className="w-full h-full flex flex-col justify-center">
        <button className="pl-7 h-10 bg-black w-full flex text-start text-white  border border-black hover:text-gray-700    mx-auto  ">
          Home
        </button>
        <input
          placeholder="search"
          className=" pl-7 h-10 bg-black w-11/12 flex items-center text-start hover:text-gray-700  justify-center  mx-auto  "
        ></input>
      </div>
    </div>
  );
}

export default Serch;

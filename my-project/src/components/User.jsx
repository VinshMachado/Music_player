import React, { useState } from "react";
import Usermain from "./Usermain";

function User() {
  return (
    <div className="h-11/12 w-full bg-gray-950 text-white flex flex-col justify-center items-center">
      <div className="h-14 sm:ml-4 sm:mr-4  justify-center    w-full bg-slate-900  items-center  sm:pl-20  flex">
        <input
          className=" pl-4 h-9 rounded-full w-1/2 bg-slate-800"
          placeholder="search"
        />
        <button className="bg-black rounded-full h-10 w-10   sm:hidden ml-7 hover:border-white border border-black">
          🡨
        </button>
      </div>
      <Usermain />
    </div>
  );
}

export default User;
import Player from "./Player";

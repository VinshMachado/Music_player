import React from "react";

function Player() {
  return (
    <div className="bg-black w-full h-16 justify-center text-white flex items-center">
      <button className=" rounded-full h-8 w-8 bg-gray-900"> f </button>
      <button className="m-4 rounded-full h-11 w-11 bg-gray-900">play</button>
      <button className="rounded-full h-8 w-8 bg-gray-900"> b </button>
    </div>
  );
}

export default Player;

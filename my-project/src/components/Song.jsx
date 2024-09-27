import React from "react";

function Song(props) {
  return (
    <div className="m-9  h-44 w-40 rounded-md bg-slate-950 flex justify-center flex-col  items-center">
      <img className="h-16 w-16 rounded-lg" src={props.imglink} />
      {props.songname}
      <div className="w-full h-10 bg-slate-700 flex items-center justify-center">
        <button className="h-8 w-8 bg-lime-600 rounded-xl">▷</button>
      </div>
      <div className="pt-3">
        <button className="h-6 w-6 bg-zinc-50 rounded-xl text-black ">
          🖤
        </button>
      </div>
    </div>
  );
}

export default Song;

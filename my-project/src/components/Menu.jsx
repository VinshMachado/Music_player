import React from "react";

function Menu() {
  return (
    <div className=" hidden sm:block  h-full w-1/3 text-white  flex flex-col rounded-md bg-gray-950 pt-5  items-center">
      <span className="colour  text-xl bg-black w-11/12 h-16  flex justify-center mb-7 items-center">
        Spotify
      </span>
      <Serch />
      <div className="h-2/4 pt-9 mt-9  w-11/12 bg-black rounded-md  flex items-start  justify-center">
        <Musicbox name="hello man" des="u go mannn" />
      </div>
    </div>
  );
}

export default Menu;
import Musicbox from "./Musicbox";
import Serch from "./Serch";

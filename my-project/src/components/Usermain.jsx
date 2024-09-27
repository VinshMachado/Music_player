import React from "react";
import Song from "./Song";

function Usermain() {
  return (
    <div className="h-full w-full flex-wrap  mt-4 bg-slate-900  flex justify-center items-center rounded-lg mb-5">
      <Song
        songname="SO tired rock"
        imglink="https://domf5oio6qrcr.cloudfront.net/medialibrary/8718/brain-music-health-memory.jpg"
      />
    </div>
  );
}

export default Usermain;

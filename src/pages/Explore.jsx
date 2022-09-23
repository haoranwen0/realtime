import { useEffect, useRef } from "react";

const Explore = () => {
  const Video = () => {
    return (
      <video autoPlay muted controls className="w-[175px] rounded-md mx-2">
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>
    );
  };

  return (
    <div className="h-full">
      <div className="h-1/3 bg-slate-100 flex items-center py-4 px-2 overflow-auto">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
      <div className="overflow-auto py-4 px-2 font-semibold">
        <div>
          <h1 className="ml-2">New Vassar</h1>
          <video autoPlay muted controls className="w-[175px] rounded-md mx-2">
            <source src="https://youtu.be/HkiTaD6B1Jg" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Explore;

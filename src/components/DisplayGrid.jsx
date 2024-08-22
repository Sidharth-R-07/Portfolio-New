import React from "react";

export default function DisplayGrid() {
  return (
    <div className="z-20 absolute  w-screen h-screen p-5 top-0 left-0">
      <div className="relative w-full h-full flex flex-wrap gap-5 ">
        <div className="flex flex-col w-1/2 h-full gap-5">
          <div className="bg-[#01aa89] w-full flex-grow-[2] rounded-2xl hover:scale-[1.015] duration-300 ease-in-out"></div>
          <div className="flex w-full flex-grow gap-5">
            <div className="w-1/2 h-full bg-[#fafecf] rounded-2xl"></div>
            <div className="w-1/2 h-full bg-[#feebcf] rounded-2xl"></div>
          </div>
        </div>

        <div className="w-1/4  h-full flex flex-col gap-5">
          <div className="bg-[#abaddd] h-2/6  rounded-2xl flex-grow"></div>
          <div className="bg-[#fed2cf] w-full   flex-grow rounded-2xl"></div>
        </div>

        <div className=" w-[330px] h-full flex flex-col gap-5">
          <div className="bg-[#beed3a]  h-1/3 rounded-2xl flex-grow"></div>
          <div className="bg-[#2a27e2] w-full h-full   flex-grow rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
}

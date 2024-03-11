import React from "react";
import listYoga from "../images/list-yoga.png";
import stars from "../images/liststar-2-img.png";
import round from "../images/list-ellipse-img.png";
import next from "../images/Button link.png";
export default function Health() {
  return (
    <div
      id="health"
      className="text-5xl font-lora flex  flex-col gap-10  md:flex-row md:items-center justify-center 2xl:gap-40 xl:gap-32 lg:gap-10 md:gap-5 sm:mt-36 mt-20  pt-20 "
    >
      <div className="flex items-center justify-center gap-5 lg:gap-5 md:gap-2  ">
        <div className="font-bold">#1</div>
        <div className="border border-[#E5D9FD] bg-[#E5D9FD] rounded-full lg:w-[400px] md:w-[300px] h-40 relative w-[300px]">
          <img
            src={listYoga}
            alt="yoga pose"
            className="absolute bottom-1   "
          />
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start  justify-center md:flex-row lg:gap-10 md:gap-0 gap-5     ">
        <div className="2xl:text-xl  pt-8 text-sm relative w-[290px] sm:w-full  flex justify-center">
          <div className="relative  2xl:w-[360px] lg:w-[250px] md:w-[200px] sm:w-[200px] w-full  p-1 pl-8 sm:pl-0 ">
            Get a list of specific influencers in your niche at your fingertips
            so you can focus on managing your status.
            <img
              src={stars}
              alt="stars"
              className="absolute -left-0 -top-8 sm:-left-10 md:-left-5 "
            ></img>
          </div>
        </div>
        <div className="relative flex justify-center ">
          <img
            src={round}
            alt="rounds"
            className="w-32 lg:w-44 md:w-48 realtive"
          />
          <img
            src={next}
            alt="next"
            className="absolute md:top-14 md:left-8 top-14 hover:scale-90 cursor-pointer w-14"
          />
        </div>
      </div>
    </div>
  );
}

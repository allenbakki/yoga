import React from "react";
import yoga1 from "../images/follow-yoga-1.png";
import yoga2 from "../images/follow-yoga-2.png";
import yoga3 from "../images/follow-yoga-3.png";
import yoga4 from "../images/follow-yoga-4.png";

export default function Follow() {
  return (
    <div id="follow" className="font-lora  relative 2xl:mt-40 md:mt-48 mt-0 ">
      <div className="2xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl text-4xl flex flex-col items-center justify-center relative top-20 ">
        <div>Follow Us On</div>
        <div>Instagram</div>
        <div className="color">#YOGA</div>
        <a href="https://www.instagram.com">
          <button className="text-xl bg-gradient-to-r from-[#ff52af] to-[#9f53ff] text-white rounded-full py-3 px-3 mt-3 hover:scale-95">
            Follow
          </button>
        </a>
        <img
          src={yoga1}
          alt="follow Yoga"
          className="absolute 2xl:-top-32 2xl:inset-x-80 xl:-top-40 xl:inset-x-48 xl:w-[300px] md:w-[200px] md:-top-32 md:left-10 lg:left-40 w-[120px] top-56 left-10 sm:left-40 sm:w-[200px]"
        />
        <img
          src={yoga2}
          alt="follow Yoga"
          className="absolute 2xl:-top-32 2xl:right-80 xl:-top-40 xl:right-48 xl:w-[300px] md:w-[200px] md:-top-32 md:right-10 lg:right-40 lg:w-[200px] w-[120px] top-72  right-8 sm:right-32 sm:top-72 sm:w-[200px] "
        />
        <img
          src={yoga3}
          alt="follow yoga"
          className="md:relative 2xl:top-54 2xl:-inset-x-80  xl:top-32 xl:-inset-x-72 xl:w-[550px] md:w-[320px] md:top-0 md:-left-40 lg:w-[350px] lg:-inset-x-48 lg:-top-1 w-[250px] mt-80 md:mt-0 sm:mt-96 sm:w-[350px]"
        />
        <img
          src={yoga4}
          alt="follow yoga"
          className="md:relative 2xl:-top-54 2xl:left-72  xl:-top-56 xl:left-72 xl:w-[540px] md:w-[320px] md:-top-52 md:left-44 lg:w-[350px]  lg:left-48 lg:-top-60 w-[250px] mt-5 md:mt-0 sm:w-[350px] "
        />
      </div>
    </div>
  );
}

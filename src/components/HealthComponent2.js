import React from "react";
import runningMan from "../images/health-fitness.png";

export default function HealthComponent2() {
  return (
    <div className="flex md:flex-row sm:flex-col-reverse flex-col-reverse gap-10 justify-center items-center md:gap-10 mt-20">
      <div>
        <img src={runningMan} alt="man running" className="md:w-[400px] " />
      </div>
      <div className="2xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl text-4xl font-lora flex flex-col gap-10  items-center md:items-baseline ">
        <div>
          <div>Bring Happiness To</div>
          <div>Good Health!</div>
        </div>
        <div className="lg:text-xl text-sm xl:w-[550px] md:w-[300px] sm:w-[300px] w-[290px] p-5 pb-0  md:p-0">
          If you take care of your good health, take care of your mentality and
          lead a healthy life with positive thoughts every day.
        </div>
        <button className="w-40 text-xl rounded-full p-2 bg-gradient-to-r from-[#ff52af] to-[#9f53ff] text-white hover:scale-95">
          Let's Start
        </button>
      </div>
    </div>
  );
}

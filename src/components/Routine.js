import React from "react";
import routine1 from "../images/routine-yoga-1.png";
import routine2 from "../images/routine-yoga-2.png";

export default function Routine() {
  return (
    <div
      id="routine"
      className="flex flex-col md:flex-row gap-10 justify-center items-center xl:gap-10 lg:gap-32 md:gap-20 mt-10  relative"
    >
      <div className="flex flex-col items-center justify-center md:items-start gap-5 xl:gap-10 md:gap-8">
        <div className="2xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl text-4xl font-lora  flex items-center md:items-baseline xl:w-[350px] lg:w-[290px] md:w-[250px] w-[300px]">
          Anytime, Any Place, Any Workout
        </div>
        <div className="lg:text-xl text-sm xl:w-[550px] md:w-[300px] sm:w-[300px] w-[290px]  p-5 pb-0  font-lora md:p-0">
          Take your routine at any time of your day, with the new videos and
          with the teachers who will guide you.
        </div>
        <button className="text-lg hover:scale-95  w-48 rounded-full p-3 bg-gradient-to-r from-[#ff52af] to-[#9f53ff] text-white mt-5">
          Get Started Free
        </button>
      </div>
      <div className="relative bottom-12 flex flex-col ">
        <img
          src={routine1}
          alt="yoga pose1"
          className="relative xl:top-28 md:right-16 md:top-20 right-6 top-14 xl:w-[500px] lg:w-[400px] md:w-[350px] w-[250px] z-10"
        />
        <img
          src={routine2}
          alt="yoga pose"
          className="xl:w-[500px] lg:w-[400px] md:w-[350px] w-[250px] translate-x-5 lg:translate-x-5 md:translate-x-0 z-0"
        />
      </div>
    </div>
  );
}

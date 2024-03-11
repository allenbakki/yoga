import React from "react";
import homeYoga from "../images/home-yoga.png";
import yoga from "../images/Yoga.png";
import homeStart from "../images/home-star.png";
export default function ChooseTeacher() {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center  ">
      <div className="2xl:text-8xl lg:text-7xl md:text-6xl sm:text-6xl sm:mt-10 md:mt-0 mt-10 text-5xl font-lora font-medium flex flex-col  gap-2  items-center md:items-baseline ">
        <div>Choose Your</div>
        <div className="flex gap-5">
          <div>Best</div>
          <div className=" bg-gradient-to-r from-[#ff52af] to-[#9f53ff] rounded-xl rotate-12 py-4 object-cover 2xl:w-40 2xl:h-24 sm:w-32 sm:h-20 w-28 h-16">
            <img
              src={yoga}
              alt="yoga"
              className="2xl:w-40 2xl:h-20 sm:w-32 sm:h-14 w-24 h-12"
            />
          </div>
          <img
            src={homeStart}
            alt="home-start"
            className="sm:w-20 2xl:w-24 w-14 hidden md:block"
          />
        </div>

        <div className="flex gap-3 items-center">
          <img
            src={homeStart}
            alt="home-start"
            className="w-14 sm:w-16 block md:hidden"
          />
          Teacher
        </div>
        <div className="2xl:text-xl text-sm  ">
          Calm your mind and body with the best yoga <br />
          teachers available, relax your day and stay positive.
        </div>

        <button className="text-lg hover:scale-95  w-48 rounded-full p-3 bg-gradient-to-r from-[#ff52af] to-[#9f53ff] text-white mt-5">
          Get Started Free
        </button>
        <div className="md:text-6xl sm:text-5xl text-4xl flex items-center gap-10 font-poppins font-medium mt-5">
          <div className="flex flex-col items-center justify-center gap-4 ">
            300+ <br />
            <div className="text-sm ">Yoga Class</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            40+
            <br />
            <div className="text-sm"> Participants</div>
          </div>
        </div>
      </div>
      <div>
        <img
          src={homeYoga}
          alt="homeYoga"
          className="md:h-[745px] lg:w-[500px] md:w-[350px] mt-5 sm:mt-0 h-[600px] w-[300px]"
        />
      </div>
    </div>
  );
}

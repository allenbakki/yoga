import React from "react";
import facebook from "../images/Vector1.png";
import instagram from "../images/vector2.png";
import twitter from "../images/vector3.png";
import yt from "../images/vector4.png";

export default function Footer() {
  return (
    <div className="pt-20 mt-20 bg-[#14092A] flex flex-col lg:p-32 md:p-20 p-10">
      <div className="font-lora flex md:flex-row flex-col gap-5 sm:flex-col md:justify-between pb-10 border-b border-[#A197B4]">
        <div className="flex flex-col gap-10">
          <div className="color text-3xl">Yoga</div>
          <div className="w-[200px] text-sm text-[#A197B4]">
            Take care of your health and your mind with the best Yoga classes.
          </div>
        </div>
        <div className="flex md:flex-row flex-col lg:gap-20 md:gap-5 gap-5 text-[#A197B4]">
          <div className="flex flex-col md:gap-10 gap-3">
            <div className="text-white text-xl">Address</div>
            <div className=" text-sm">
              12345 M/01 Sol <br />
              Avenue, Lima, Peru
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-3">
            <div className="text-white text-xl">Contact</div>
            <div className="text-sm">
              +123 456 7890
              <br /> yoga@email.com
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-3">
            <div className="text-white text-xl">Office</div>
            <div className=" text-sm">
              Monday - Saturday
              <br /> 9AM - 10PM
            </div>
          </div>
        </div>
      </div>
      <div className=" flex md:flex-row flex-col sm:flex-col gap-5 items-center justify-between mt-10 ">
        <div className="flex gap-5">
          <a href="https://www.youtube.com">
            <img src={facebook} alt="media handles" />
          </a>
          <a href="https://www.instgram.com">
            <img src={instagram} alt="media handles" />
          </a>
          <a href="https://www.twitter.com">
            <img src={twitter} alt="media handles" />
          </a>
          <a href="https://www.facebook.com">
            <img src={yt} alt="media handles" />
          </a>
        </div>
        <div className="text-[#A197B4] text-sm font-lora">
          Copyright Bedimcode. All rights reserved
        </div>
      </div>
    </div>
  );
}

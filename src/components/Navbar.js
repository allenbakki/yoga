import React, { useState } from "react";
import sun from "../images/ri_sun-line.png";
import moon from "../images/ri_moon-line.png";
import fourdotsPurple from "../images/Vector.png";
import fourdots from "../images/ri_apps-2-line.png";

export default function Navbar({ light, dark, setMode, mode }) {
  const [open, setOpen] = useState(false);
  const health = document.getElementById("health");
  const routine = document.getElementById("routine");
  const follow = document.getElementById("follow");

  const headers = ["Home", "Health", "Routine", "Follow"];
  return (
    <div className="flex sm:justify-around items-center justify-between p-5 ">
      <div className="cursor-pointer font-lora text-3xl font-medium color">
        Yoga
      </div>
      <div className="flex md:gap-10 sm:gap-5 2xl:gap-24 gap-5 cursor-pointer items-center ">
        {headers.map((name) => {
          return (
            <div
              className={`hidden sm:block font-poppins md:text-xl sm:text-lg font-medium ${
                name === "Home"
                  ? "color"
                  : mode
                  ? "text-[#220953]"
                  : "text-[#D1C0F1]"
              } hover:scale-105`}
              onClick={() => {
                switch (name) {
                  case "Health":
                    health?.scrollIntoView({
                      behavior: "smooth",
                    });
                    break;
                  case "Routine":
                    routine?.scrollIntoView({
                      behavior: "smooth",
                    });
                    break;
                  case "Follow":
                    follow?.scrollIntoView({
                      behavior: "smooth",
                    });
                    break;

                  default:
                }
              }}
            >
              {name}
            </div>
          );
        })}
        <div
          className={`${mode ? "block" : "hidden"} cursor-pointer`}
          onClick={() => setMode(!mode)}
        >
          <img src={moon} alt="dark" />
        </div>
        <div
          className={`${mode ? "hidden" : "block"} cursor-pointer  mt-2 `}
          onClick={() => setMode(!mode)}
        >
          <img src={sun} alt="light" />
        </div>
        {/* <div
          className={`${
            mode ? "block" : "hidden"
          } cursor-pointer block sm:hidden `}
        >
          <img src={fourdotsPurple} alt="dark" />
        </div>
        <div
          className={`${
            mode ? "hidden" : "block"
          } cursor-pointer block sm:hidden`}
          onClick={() => setOpen(!open)}
        >
          <img src={fourdots} alt="light" />
        </div> */}
      </div>
      {/* <div className={`${open ? "block" : "hidden"}`}>Home</div> */}
    </div>
  );
}

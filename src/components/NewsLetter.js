import React from "react";

export default function NewsLetter() {
  return (
    <div className="flex justify-center mt-32 md:mt-0">
      <div className="bg-gradient-to-r from-[#ff52af] to-[#9f53ff] text-white 2xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-lora flex flex-col items-center gap-10 lg:p-10 lg:px-20 xl:p-20 xl:px-44 md:p-5 md:px-20 sm:p-5 sm:px-10 p-5 px-10 rounded-xl">
        <div>Join our newsletter</div>
        <div className="md:text-xl text-sm md:w-[450px] lg:w-[590px] xl:w-[600px]  sm:w-[300px] w-[200px]">
          Subscribe to our newsletter to be aware of many things on discounts,
          gifts, training and much more. Just enter your email.
        </div>

        <div className="sm:border sm:border-white sm:bg-white flex sm:flex-row flex-col gap-5 items-center rounded-full lg:p-2 ">
          <input
            type="text"
            placeholder="For latest update send mail"
            className="text-black  rounded-full lg:text-xl text-sm p-2 outline-none lg:w-[500px] md:w-[400px] sm:w-[300px]  "
          />
          <button className="bg-gradient-to-r from-[#ff52af] to-[#9f53ff] text-lg p-3 rounded-full px-16 sm:px-3 ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

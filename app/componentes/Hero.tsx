import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-row justify-around mx-52">
      <div className="flex flex-col gap-16 mx-auto my-auto">
        <div className=" text-[90px] font-light">
          Enpower your career in Tech
        </div>
        <div className="text-xl ">
          Tech hub is the job board site for engineers
          <br /> who seek to create the future.
        </div>
        <a
          href="#"
          className="px-[200px] py-2 mx-auto w-fit text-sm text-center text-[#B20000] border border-[#B20000] rounded-full whitespace-nowrap"
        >
          Log In
        </a>
      </div>
      <Image
        src="/images/logo.svg"
        width={625}
        height={1140}
        alt="logo"
        className="h-auto w-[550px] bg-red-500 mr-24"
      />
    </div>
  );
}

export default Hero;

import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-row justify-around px-52 relative h-screen pt-12">
      <div className="flex flex-col gap-16 mx-auto my-auto">
        <div className=" text-[90px] font-light">
          Enpower your career in Tech
        </div>
        <div className="text-2xl font-light pr-4">
          Tech hub is the job board site for engineers
          <br /> who seek to create the future.
        </div>
        <a
          href="#"
          className="px-[125px] py-2 mr-auto w-fit text-sm font-semibold text-center text-[#B20000] border border-[#B20000] rounded-full whitespace-nowrap"
        >
          Log In
        </a>
      </div>
      <div className="w-[600px] h-auto" />
      <Image
        src="/images/mc.png"
        width={625}
        height={1140}
        alt="logo"
        className="h-auto w-[400px] absolute bottom-0 lg:right-36 xl:right-48 -z-10"
      />
      <Image
        src="/images/fg1.svg"
        width={1500}
        height={353}
        alt="logo"
        className="h-[280px] w-[950px]  absolute right-0 bottom-0"
      />
      {/* For Debbugin/ adjusting sizes:
      <Image
        src="/images/fg1.svg"
        width={1500}
        height={353}
        alt="logo"
        className="h-[280px] w-[950px] bg-blue-200/10 sm:bg-blue-400/10 md:bg-blue-600/10 lg:bg-blue-800/10 xl:bg-blue-950/10 absolute right-0 bottom-0"
      /> */}
      <Image
        src="/images/fg2.png"
        width={1233}
        height={383}
        alt="logo"
        className="h-[310px] w-[1000px] absolute right-0 bottom-0"
      />
    </div>
  );
}

export default Hero;

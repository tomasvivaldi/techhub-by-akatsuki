import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className=" bg-[#B20000] w-full h-[500px] flex flex-col p-20">
      <h4 className="w-full text-center text-4xl text-white font-light">
        What is the "Tech Hub" ?
      </h4>
      <hr className="w-[50px] border-white mx-auto my-8" />
      <div className="flex flex-row gap-36 mx-auto text-white text-xl font-light my-8">
        <div className="flex flex-col gap-8 items-center">
          <Image
            src="/icons/search.svg"
            width={130}
            height={130}
            alt="Find a Job"
          />
          <p>Find a Job</p>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <Image
            src="/icons/company.svg"
            width={130}
            height={130}
            alt="Research Companies"
          />
          <p>Research Companies</p>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <Image
            src="/icons/coin.svg"
            width={130}
            height={130}
            alt="Compare Salaries"
          />
          <p>Compare Salaries</p>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <Image
            src="/icons/suitcase.svg"
            width={130}
            height={130}
            alt="Apply for a Job"
          />
          <p>Apply for a Job</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;

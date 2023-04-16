import React from "react";
import Image from "next/image";

function Partners() {
  return (
    <div className="flex flex-col my-16">
      <h3 className="text-3xl w-full text-center font-light my-4">
        Our Partners
      </h3>
      <hr className="w-[50px] border-black mx-auto my-8" />
      <div className="flex flex-col mx-16">
        <div className="flex flex-row gap-8  ml-20 px-auto">
          <Image
            src="logo/WeTech.svg"
            width={260}
            height={260}
            alt="partner logo"
          />
          <Image
            src="logo/Caica.svg"
            width={260}
            height={260}
            alt="partner logo"
          />
          <Image
            src="logo/Beenos.svg"
            width={260}
            height={260}
            alt="partner logo"
          />
          <Image
            src="logo/Shift.svg"
            width={260}
            height={260}
            alt="partner logo"
          />
        </div>
        <div className="flex flex-row gap-8  ml-36 px-auto">
          <Image
            src="logo/Wamazing.svg"
            width={260}
            height={260}
            alt="partner logo"
          />
          <Image
            src="logo/TeamLab.svg"
            width={260}
            height={260}
            alt="partner logo"
          />
          <Image
            src="logo/BitFlyer.svg"
            width={260}
            height={260}
            alt="partner logo"
          />
          <Image
            src="logo/YahooJapan.svg"
            width={260}
            height={260}
            alt="partner logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Partners;

import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="absolute top-0 w-full flex flex-row justify-between items-center my-4 mx-12">
      <div className="flex flex-row gap-16 items-center">
        <Image
          src="/logo/logo.svg"
          width={240}
          height={40}
          alt="logo"
          className=""
        />
        <ul className="flex flex-row gap-12 h-fit text-[#B20000] font-semibold">
          <li>Jobs</li>
          <li>Articles</li>
          <li>Companies</li>
          <li>Support</li>
        </ul>
      </div>
      <a
        href="#"
        className=" border border-red-600 py-1 px-12 mr-6 rounded-full"
      >
        Sign In
      </a>
    </div>
  );
}

export default Header;

import React from "react";
import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <>
      <header className="flex justify-around items-center m-4 p-4 font-Inter">
        <div className="">
          <img src={logo} alt="Logo" className="w-[150px] h-[30px]" />
        </div>
        <div>
          <ul className="flex gap-10">
            <li className="text-[18px]">Home</li>
            <li className="text-Grey-M  ">Product</li>
            <li className="text-Grey-M">FAQ</li>
            <li className="text-Grey-M">Blog</li>
            <li className="text-Grey-M">About Us</li>
          </ul>
        </div>
        <div className="flex gap-5">
          <button className="text-Grey-M">Login</button>
          <button className="bg-Green-mint p-2  rounded-[0.5rem] text-white border-none">
            Sign Up
          </button>
        </div>
      </header>
    </>
  );
}

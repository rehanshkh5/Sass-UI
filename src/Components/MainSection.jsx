import React from "react";
import { MainBtn } from "./Header";
import MainImg from "../assets/mainIMG.png";
import LineImg from "../assets/line.png";
import PlayIcon from "../assets/Play.svg";
export default function MainSection() {
  return (
    <>
      <div className="flex justify-around pt-20">
        <div className="grid gap-7">
          <h1 className="font-Inter font-bold text-[5rem] leading-[5.6rem]">
            We’re here to <br /> Increase your <br />
            Productivity
          </h1>
          <div className="">
            <img src={LineImg} alt="LineImg" srcset="" />
          </div>
          <p className="font-Inter font-normal text-[18px] leading-[30px]">
            Let's make your work more organize and easily using <br />
            the Taskio Dashboard with many of the latest
            <br /> featuresin managing work every day.
          </p>
          <div className="flex gap-4">
            <MainBtn
              Button="Try free trial"
              className="bg-Green-mint px-[30px] py-[15px] text-white font-Inter font-medium text-center rounded-[100px] "
            />
            <div className="flex justify-center items-center gap-1">
              <img src={PlayIcon} alt="PlayIcon" className="w-10 h-10" />
              <button className="font-Inter text-[18px] text-[#191A15] font-bold">
                View Demo
              </button>
            </div>
          </div>
        </div>

        {/* All Imgs */}
        <div>
          <div>
            <img src={MainImg} alt="MainImg" />
          </div>
        </div>
      </div>
    </>
  );
}

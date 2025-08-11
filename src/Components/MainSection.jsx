import React from "react";
import { MainBtn } from "./Header";
import MainImg from "../assets/mainIMG.png";
import LineImg from "../assets/line.png";
import PlayIcon from "../assets/Play.svg";
import Card from "../assets/card.png";
import Card2 from "../assets/card2.png";
import Card3 from "../assets/card 3.png";
import ChatImg from "../assets/chat.png";
import OkIcon from "../assets/OkIcon.png";
import Icon2 from "../assets/icon2.png";

import Patners from "./Patners";

export default function MainSection() {
  return (
    <>
      <div className="w-[634px] h-[634px] bg-Green-mint absolute rounded-[100%] left-[-2rem] bottom-32 blur-[28rem]"></div>
      <div className="flex justify-between   pt-20">
        <MainSectionText />
        <MainSeactionImgs />

        {/* All Imgs */}
      </div>
    </>
  );
}

function MainSeactionImgs() {
  return (
    <>
      <div className="w-[634px] h-[634px] bg-[#FFD6D6]  absolute rounded-[100%] left-[35rem] bottom-[7rem] blur-[20rem] shadow-[39px 35px 20rem 20px] shadow-[#FFD6D6]"></div>
      <div>
        <div>
          <div className="w-[634px] h-[634px] bg-Green-mint absolute rounded-[100%]  right-[2rem] top-[15rem]  blur-[28rem] "></div>
          <div>
            <img src={MainImg} alt="MainImg" className="relative z-10 " />
            <div className="relative">
              <img
                src={Card}
                alt="Card"
                className="absolute left-[20rem] bottom-[1rem] z-20"
              />
              <img
                src={Card2}
                alt="Card2"
                className="absolute bottom-[2rem] right-[22rem] z-20"
              />

              <img
                src={ChatImg}
                alt="ChatImg"
                className="absolute bottom-[-2rem] left-[18rem] z-10"
              />
              <img
                src={Card3}
                alt="Card3"
                className="absolute bottom-[26rem] left-[-10rem] z-10"
              />
              <img
                src={OkIcon}
                alt="OkIcon"
                className="absolute bottom-[19rem] left-[-4rem] z-10"
              />
              <img
                src={Icon2}
                alt="Icon2"
                className="absolute bottom-[27rem] left-[24rem] z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MainSectionText() {
  return (
    <>
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
        <div
          className="flex gap-4
          "
        >
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
    </>
  );
}

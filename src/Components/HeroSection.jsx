import React from "react";
import Rate from "../assets/rate.png";
import Rate1 from "../assets/rate2.png";
import Publishing from "../assets/Publishing.png";
import Pei from "../assets/Pei.png";
import Engagement from "../assets/Engagement.png";

export default function HeroSection() {
  return (
    <>
      <div>
        <div className="flex gap-20 bg-[#F9F8FE] p-24 justify-center">
          <div className="flex flex-col gap-3">
            <h1 className="font-Inter font-semibold text-[50px] text-heading">
              How we support our <br />
              pratner all over the world
            </h1>
            <p className="text-[14px] font-Inter leading-7 text-[#A6A6A6]">
              SaaS become a common delivery model for many business application,
              including <br />
              office software, messaging software, payroll processing software,
              DBMS software,
              <br /> management software
            </p>

            <div className="flex gap-20 pt-16">
              <div className="flex flex-col gap-2.5">
                <img src={Rate} alt="Rate" />

                <h3>4.9 / 5 rating</h3>
                <p>databricks</p>
              </div>
              <div className="flex flex-col gap-2.5">
                <img src={Rate1} alt="Rate1" />
                <h3>4.8 / 5 rating</h3>
                <p>Chainalysis</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="flex items-center">
                <img src={Publishing} alt="" />
                <h1 className="text-[28px] text-heading font-Inter font-bold">
                  Publishing
                </h1>
              </div>
              <p className="font-Inter font-normal text-[14px] leading-7 text-[#A6A6A6] text-justify ml-20">
                Plan, collaborate, and publishing your contetn <br />
                that drivees meaningful engagement and growth <br />
                for your barnd
              </p>
              <div></div>
            </div>
            <div>
              <div className="flex items-center">
                <img src={Pei} alt="Pei" />
                <h1 className="text-[28px] text-heading font-Inter font-bold">
                  Analytics
                </h1>
              </div>
              <p className="font-Inter font-normal text-[14px] leading-7 text-[#A6A6A6] text-justify ml-20 ">
                Analyze your performance and create goegeous <br />
                report
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <img src={Engagement} alt="Engagement" />
                <h1 className="text-[28px] text-heading font-Inter font-bold">
                  Engagement
                </h1>
              </div>
              <p className="font-Inter font-normal text-[14px] leading-7 text-[#A6A6A6] text-justify ml-20">
                Quiuckly navigate you anda engage with your <br />
                adience
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

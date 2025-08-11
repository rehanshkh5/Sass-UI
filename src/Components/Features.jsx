import React from "react";
import { MainBtn } from "./Header";
import Collboration from "../assets/collboration.png";
import CloudStorage from "../assets/Cloud Storage.png";
import DailyAnalytics from "../assets/Daily Analytics.png";

export default function Features() {
  return (
    <div>
      <div>
        <div className="flex justify-around items-center  gap-20 p-12 m-8">
          <h1 className="font-Inter font-semibold text-5xl ">
            Our Features
            <br />
            you cab get
          </h1>
          <p className="font-Inter font-medium text-[14px] leading-7 text-Grey ">
            We offer a variety of interesting features that you can <br /> help
            increase yor productivity at work and manage <br /> your projrct
            esaly
          </p>
          <MainBtn
            Button="Get Started"
            className="bg-Green-mint px-[30px] py-[15px] text-white font-Inter font-medium text-center rounded-[100px] "
          />
        </div>
        <div className="flex justify-center gap-16">
          <CardContent
            src={Collboration}
            Title="Collboration Teams"
            TitleClass="font-Inter font-semibold text-[28px] leading-8 text-heading mt-3"
            Text=<>
              Here you can handle projects together <br /> with team virtually
            </>
            TextClass="font-Inter font-light leading-8 text-Grey mt-3"
          />

          <CardContent
            src={CloudStorage}
            Title=" Cloud Storage"
            TitleClass="font-Inter font-semibold text-[28px] leading-8 text-heading mt-3"
            Text=<>
              No nedd to worry about storage <br />
              because we provide storage up to 2 TB
            </>
            TextClass="font-Inter font-light leading-8 text-Grey mt-3"
          />

          <CardContent
            src={DailyAnalytics}
            Title="Daily Analytics"
            TitleClass="font-Inter font-semibold text-[28px] leading-8 text-heading mt-3"
            // className="mt-3"
            Text=<>
              We always provide useful informatin to <br />
              make it easier for you every day
            </>
            TextClass="font-Inter font-light leading-8 text-Grey mt-3"
          />
        </div>
      </div>
    </div>
  );
}

function CardContent({ src, TitleClass, Title, TextClass, Text }) {
  return (
    <>
      <div>
        <div>
          <div>
            <img src={src} alt={src} />

            <h1 className={TitleClass}>{Title}</h1>
            <p className={TextClass}>{Text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Unsplash from "../assets/ComapnyLogo/Unsplash.png";
import Notion from "../assets/ComapnyLogo/Notion.png";
import InterCom from "../assets/ComapnyLogo/InterCom.png";
import Descript from "../assets/ComapnyLogo/Descript.png";
import Grammarly from "../assets/ComapnyLogo/Grammarly.png";

export default function Patners() {
  return (
    <div className="p-20 m-10">
      <div>
        <h1 className="text-center text-heading font-Inter font-bold text-[40px]">
          More than 25,000 teams use Collabs
        </h1>
      </div>
      <div className="flex gap-16 m-4 p-4">
        <img src={Unsplash} alt="Unsplash" className="w-44 h-9" />
        <img src={Notion} alt="Notion" className="w-44 h-9" />
        <img src={InterCom} alt="InterCom" className="w-44 h-9" />
        <img src={Descript} alt="Descript" className="w-44 h-9" />
        <img src={Grammarly} alt="Grammarly" className="w-44 h-9" />
      </div>
    </div>
  );
}

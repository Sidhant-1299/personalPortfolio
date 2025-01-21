import React from "react";
import { openInNewTab } from "../../utils";
import { header } from "../Data/SkillData";

function SkillCard({ icon, url, name }) {
  return (
    <div
      onClick={() => openInNewTab(url)}
      className="

      laptop:h-24 laptop:w-[90%] 
      desktop:w-[360px]
      hover:scale-105 duration-300 cursor-pointer
      flex 
      items-center justify-self-center
      laptop:items-start laptop:justify-start
      rounded-xl bg-graydark
      ml-2 group
      "
    >
      <div
        className="
      bg-white
      h-16 w-16
      tablet:h-[72px] tablet:w-[72px]
       laptop:ml-4 desktop:ml-6
        flex items-center justify-center
        rounded-lg
        my-auto

      "
      >
        <img
          src={icon}
          alt={name}
          className="
          h-14 w-14
      tablet:h-16 tablet:w-16
      my-auto 
      "
        ></img>
      </div>
      <div className="h-full hidden laptop:block">
        <h1
          className="text-white font-bold my-auto
        laptop:py-10 laptop:pl-12 group-hover:text-orange-400
        "
        >
          {name}
        </h1>
      </div>
    </div>
  );
}

export default SkillCard;

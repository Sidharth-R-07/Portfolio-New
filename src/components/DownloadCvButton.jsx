import React from "react";
import { GoDownload } from "react-icons/go";
import Cv from "../assets/pdf/SIDHARTH RAMANATHAN.pdf";
import SocailMediaSection from "./SocailMediaSection";

export default function DownloadCvButton() {
  return (
    <a
      href={Cv}
      className="md:mt-10 mt-4 h-min flex flex-row items-center md:gap-10 gap-6 "
    >
      <SocailMediaSection />
      <button className="h-10 flex flex-row justify-center items-center py-2 px-6 mt-6 gap-1  rounded-xl  bg-primary font-AnekDevanagari tracking-wider hover:bg-background border-primary hover:border-[2px] duration-300 ">
        <h4 className="md:text-base text-[13px] mt-2 ">Dowload CV</h4>
        <GoDownload className="md:text-xl" />
      </button>
    </a>
  );
}

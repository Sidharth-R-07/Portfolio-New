import React from "react";
import Lottie from "lottie-react";
import backGroudAnimation from "../assets/lotties/technology.json";
import bgImage from "../assets/images/avatar-1.webp";
import DownloadCvButton from "../components/DownloadCvButton";
import SocailMediaSection from "../components/SocailMediaSection";
import "../App.css";

export default function HomePage() {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center ">
      <Lottie
        animationData={backGroudAnimation}
        className="absolute opacity-15 z-0 top-52 md:top-0 md:bottom-0"
      />
      <div className="z-10  md:px-16 px-4 flex flex-row w-full h-screen items-end md:justify-start justify-center">
        <div className="mt-20 md:w-2/3 flex flex-col items-start h-full text-white justify-center">
          <h2 className="font-AnekDevanagariMedium tracking-wider xl:text-3xl md:text-[30px] sm:text-[24px] text-[20px]">
            Hey I'm,
          </h2>
          <h1 className="font-AnekDevanagariBold xl:text-[56px] md:text-[45px] sm:text-[34px] text-[24px] tracking-wide">
            SIDHARTH RAMANATHAN
          </h1>
          <div className="flex flex-row w-full justify-center">
            <img
              src={bgImage}
              alt="SIDHARTH RAMANATHAN AI IMAGE"
              className="md:w-1/3 w-2/3 flex md:hidden my-4"
            />
          </div>
          <h4 className="mt-2 font-AnekDevanagariMedium md:leading-7 text-white md:text-base text-[12px] text-opacity-55 text-start md:tracking-widest tracking-wider sm:pr-10">
            "Crafting code is my art, turning ideas into reality one keystroke
            at a time. Welcome to my digital canvas, where innovation meets
            functionality. As a software developer, I don't just write lines of
            code; I sculpt solutions, weave algorithms, and paint seamless user
            experiences. Let my portfolio be your window into a world where
            creativity and technology converge, where every project tells a
            story of problem-solving and passion. Together, let's build
            tomorrow's digital landscape, one elegant solution at a time."
          </h4>
          <DownloadCvButton />
          {/* <SocailMediaSection /> */}
        </div>
        <img
          src={bgImage}
          alt="SIDHARTH RAMANATHAN AI IMAGE"
          className="md:w-1/3 hidden md:flex"
        />
      </div>
    </div>
  );
}

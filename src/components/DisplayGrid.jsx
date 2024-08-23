import React from "react";

import FlutterIcon from "../assets/svg/flutter.svg";
import FirebaseIcon from "../assets/svg/firebase.svg";
import ReactIcon from "../assets/svg/react.svg";
import PdfIcon from "../assets/svg/pdf.svg";
import LinkdinIcon from "../assets/icons/linkedin-icon.png";
import TelegramIcon from "../assets/icons/telegram-icon.png";
import GithubIcon from "../assets/icons/github-icon.png";

import Lottie from "lottie-react";
import ArrowLottie from "../assets/lotties/arrow.json";
import DinoLottie from "../assets/lotties/dino.json";
import QuotesFrame from "./QuotesFrame";
import Cv from "../assets/pdf/SIDHARTH RAMANATHAN.pdf";

export default function DisplayGrid() {
  return (
    <div className="z-20 absolute  w-screen h-screen p-7 top-0 left-0">
      <div className="relative w-full h-full flex flex-wrap flex-grow gap-8 ">
        <div className="flex flex-col w-1/2 h-full gap-8">
          <div className="p-10 bg-[#01aa89] w-full flex flex-row gap-10 items-end text-start flex-grow-[2] rounded-2xl hover:scale-[1.02] duration-150 ease-in">
            <h2 className="w-1/2 font-ThunderExtraBold tracking-wide text-[52px]  leading-[55px]">
              I'M SIDHARTH RAMANATHAN,
              <br /> A MOBILE AND WEB DEVELOPER <br /> BASED IN INDIA.
            </h2>
            <h6 className="w-1/2 font-GeneralSansRegular text-[18px]">
              Crafting code is my art, turning ideas into reality one keystroke
              at a time. Welcome to my digital canvas, where innovation meets
              functionality. As a software developer, I don't just write lines
              of code; I sculpt solutions, weave algorithms, and paint seamless
              user experiences. Let my portfolio be your window into a world
              where creativity and technology converge, where every project
              tells a story of problem-solving and passion.
            </h6>
          </div>
          <div className="flex w-full h-1/4 flex-grow gap-8">
            <div className="w-1/2 h-full flex flex-col items-start  p-4 bg-[#fafecf] rounded-2xl ">
              <ul className="flex flex-row gap-3">
                <img
                  src={FlutterIcon}
                  alt="FLUTTER DEVELOPMENT"
                  className="h-7 w-7"
                />
                <img
                  src={FirebaseIcon}
                  alt="FLUTTER DEVELOPMENT"
                  className="h-7 w-7"
                />
              </ul>
              <h3 className="font-ThunderBold pt-3 text-start text-[32px] tracking-wide">
                APPLICATION DEVELOPMENT
              </h3>

              <p className="font-GeneralSansRegular text-start text-[12px]">
                I have worked with numerous startups and clients, and I can
                assure you that Flutter is not just for building cross-platform
                applications.
              </p>
              <button className="mt-2  px-7 bg-black py-2 text-white font-GeneralSansRegular rounded-3xl text-[13px] hover:scale-[1.04] duration-150 ease-in ">
                VIEW PROJECTS
              </button>
            </div>
            <div className="w-1/2 h-full flex flex-col items-start  p-4 bg-[#feebcf] rounded-2xl ">
              <ul className="flex flex-row gap-3">
                <img
                  src={ReactIcon}
                  alt="FLUTTER DEVELOPMENT"
                  className="h-7 w-7"
                />
                <img
                  src={FirebaseIcon}
                  alt="FLUTTER DEVELOPMENT"
                  className="h-7 w-7"
                />
              </ul>
              <h3 className="font-ThunderBold pt-3 text-start text-[32px] tracking-wide">
                WEB DEVELOPMENT
              </h3>

              <p className="font-GeneralSansRegular text-start text-[12px]">
                I have worked with numerous startups and clients, and I can
                assure you that Flutter is not just for building cross-platform
                applications.
              </p>
              <button className="mt-2  px-7 bg-black py-2 text-white font-GeneralSansRegular rounded-3xl text-[13px] hover:scale-[1.04] duration-150 ease-in ">
                VIEW PROJECTS
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/4  h-full flex flex-col gap-8">
          <QuotesFrame />
          <div className="bg-[#fed2cf] w-full    flex flex-col items-start  p-4 flex-grow  rounded-2xl ">
            <img src={PdfIcon} alt="FLUTTER DEVELOPMENT" className="h-7 w-7" />
            <h3 className="font-ThunderBold pt-3 text-start text-[32px] tracking-wide">
              VIEW PORTFOLIO
            </h3>

            <p className="font-GeneralSansRegular text-start text-[12px]">
              I have worked with numerous startups and clients, and I can assure
              you that Flutter is not just for building cross-platform
              applications.
            </p>
            <a
              href={Cv}
              className="mt-4  px-7 bg-black py-2 text-white font-GeneralSansRegular rounded-3xl text-[13px] hover:scale-[1.04] duration-150 ease-in "
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>

        <div className=" w-max h-full flex flex-col flex-grow gap-8">
          <div className="bg-[#beed3a] p-3 flex flex-row items-center justify-center gap-2  h-1/3 rounded-2xl flex-grow ">
            <h2 className="text-[120px]  text-start font-ThunderExtraBold leading-10 tracking-wider">
              12
            </h2>

            <h3 className="text-[50px] text-start font-ThunderBold leading-10">
              LIVE <br />
              PROJETCS
            </h3>

            <Lottie
              animationData={DinoLottie}
              className="absolute h-20 right-12 top-5"
            />
          </div>
          <a
            href="mailto:sidhuram365@gmail.com"
            className="relative bg-[#2a27e2] p-6 items-start justify-end flex flex-col  w-full h-full cursor-pointer    flex-grow rounded-2xl hover:scale-[1.02] duration-150 ease-in"
          >
            <Lottie
              animationData={ArrowLottie}
              className="absolute top-8 h-40 -left-6 "
              loop={false}
            />
            <h3 className="mt-10 font-ThunderBold w-48 text-start text-[45px]  leading-10 text-white">
              WANNA TALK? SEND ME A MESSAGE.
            </h3>

            <ul className="flex flex-row gap-4 mt-8">
              <a href="https://www.linkedin.com/in/sidharth-ramanathan-720a6926b/">
                <img
                  src={LinkdinIcon}
                  alt="LINKDIN SIDHARTH RAMANATHAN"
                  className="h-7 w-7 cursor-pointer hover:scale-110"
                  style={{ filter: "invert(1)" }}
                />
              </a>

              <a href="https://github.com/Sidharth-R-07">
                <img
                  src={GithubIcon}
                  alt="GITHUB SIDHARTH RAMANATHAN"
                  className="h-7 w-7 cursor-pointer hover:scale-110"
                  style={{ filter: "invert(1)" }}
                />
              </a>

              <a href="https://telegram.me/Shadow0710">
                <img
                  src={TelegramIcon}
                  alt="TELEGRAM SIDHARTH RAMANATHAN"
                  className="h-7 w-7 cursor-pointer hover:scale-110"
                  style={{ filter: "invert(1)" }}
                />
              </a>
            </ul>

            <h6 className="mt-2 font-GeneralSansLight text-[12px] text-white tracking-widest">
              Sidhuram365@gmail.com
            </h6>
          </a>
        </div>
      </div>
    </div>
  );
}

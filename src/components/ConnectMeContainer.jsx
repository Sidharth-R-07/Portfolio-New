import React from "react";
import ArrowLottie from "../assets/lotties/arrow.json";
import LinkdinIcon from "../assets/icons/linkedin-icon.png";
import TelegramIcon from "../assets/icons/telegram-icon.png";
import GithubIcon from "../assets/icons/github-icon.png";
import Lottie from "lottie-react";

export default function ConnectMeContainer() {
  return (
    <a
      href="mailto:sidhuram365@gmail.com"
      className="relative bg-[#2a27e2] p-6 sm:h-[530px] h-[450px] items-start justify-end flex flex-col  w-full  cursor-pointer   rounded-2xl hover:scale-[1.02] duration-150 ease-in"
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
        sidhuram365@gmail.com
      </h6>
    </a>
  );
}

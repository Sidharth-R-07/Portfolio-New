import React from "react";
import Cv from "../assets/pdf/SIDHARTH RAMANATHAN.pdf";
import PdfIcon from "../assets/svg/pdf.svg";

export default function CvContainer() {
  return (
    <div className="bg-[#fed2cf]     flex flex-col items-start  p-4  rounded-2xl ">
      <img src={PdfIcon} alt="FLUTTER DEVELOPMENT" className="h-7 w-7" />
      <h3 className="font-ThunderBold pt-3 text-start text-[32px] tracking-wide">
        VIEW PORTFOLIO
      </h3>

      <p className="font-GeneralSansRegular text-start text-[12px]">
        Click the button below to download a copy of my resume. I'm eager to
        connect and discuss how my skills and experience can contribute to your
        team.
      </p>
      <a
        href={Cv}
        className="mt-4  px-7 bg-black py-2 text-white font-GeneralSansRegular rounded-3xl text-[13px] hover:scale-[1.04] duration-150 ease-in "
      >
        DOWNLOAD CV
      </a>
    </div>
  );
}

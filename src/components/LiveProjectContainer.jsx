import React from "react";
import Lottie from "lottie-react";
import DinoLottie from "../assets/lotties/dino.json";

export default function LiveProjectContainer() {
  return (
    <div className="relative h-36 pt-5 bg-[#beed3a]  flex flex-row items-center justify-center gap-2   rounded-2xl ">
      <h2 className="text-[120px]  text-start font-ThunderExtraBold leading-10 tracking-wider">
        12
      </h2>

      <h3 className="text-[50px]  text-start font-ThunderBold leading-10">
        LIVE <br />
        PROJETCS
      </h3>

      <Lottie
        animationData={DinoLottie}
        className="absolute h-20 right-12 top-4"
      />
    </div>
  );
}

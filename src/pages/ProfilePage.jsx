import React from "react";
import backGroudAnimation from "../assets/lotties/technology.json";
import Lottie from "lottie-react";
import DisplayGrid from "../components/DisplayGrid";

export default function ProfilePage() {
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <Lottie
        animationData={backGroudAnimation}
        className="absolute opacity-15 z-0 top-52 md:top-0 md:bottom-0"
      />
      <div className="relative h-screen w-screen z-10 bg-black bg-opacity-10 backdrop-blur-[3px] p-8 rounded-lg shadow-lg" />

      <DisplayGrid />
    </div>
  );
}

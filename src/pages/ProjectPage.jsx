import React from "react";
import backGroudAnimation from "../assets/lotties/technology.json";
import Lottie from "lottie-react";
import ProjectGrid from "../components/ProjectGrid";

export default function ProjectPage() {
  return (
    <div className="h-screen w-screen overflow-x-hidden  relative">
      <Lottie
        animationData={backGroudAnimation}
        className="fixed w-full h-full opacity-50 z-0 top-52 md:top-0 md:bottom-0"
      />
      <div className="relative h-screen w-screen z-10 bg-black bg-opacity-10 backdrop-blur-[3px] p-8 rounded-lg shadow-lg" />

      <ProjectGrid />
    </div>
  );
}

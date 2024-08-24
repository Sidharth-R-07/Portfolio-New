import React from "react";
import FlutterIcon from "../assets/svg/flutter.svg";
import FirebaseIcon from "../assets/svg/firebase.svg";
import ReactIcon from "../assets/svg/react.svg";

export default function DevelopmentSection() {
  return (
    <div className="flex sm:flex-row flex-col w-full gap-8">
      <div className="sm:w-1/2 h-full flex flex-col items-start  p-4 bg-[#fafecf] rounded-2xl ">
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
          Skilled in crafting cross-platform mobile apps with Dart and Flutter.
          Experienced in UI/UX design and API integration. Seeking to contribute
          to innovative projects and grow my expertise.
        </p>
        <a
          href="/project"
          className="mt-2  px-7 bg-black py-2 text-white font-GeneralSansRegular rounded-3xl text-[13px] hover:scale-[1.04] duration-150 ease-in "
        >
          VIEW PROJECTS
        </a>
      </div>
      <div className="sm:w-1/2 h-full flex flex-col items-start  p-4 bg-[#feebcf] rounded-2xl ">
        <ul className="flex flex-row gap-3">
          <img src={ReactIcon} alt="FLUTTER DEVELOPMENT" className="h-7 w-7" />
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
          React and Vite have emerged as powerful tools for building fast,
          scalable, and interactive web applications. This combination offers a
          streamlined development experience with impressive performance
          benefits.
        </p>
        <button className="mt-2  px-7 bg-black py-2 text-white font-GeneralSansRegular rounded-3xl text-[13px] hover:scale-[1.04] duration-150 ease-in ">
          VIEW PROJECTS
        </button>
      </div>
    </div>
  );
}

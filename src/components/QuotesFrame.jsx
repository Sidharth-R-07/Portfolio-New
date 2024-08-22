import React, { useState } from "react";
import DoubleQoutes from "../assets/svg/double-qoutes.svg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import QuotesData from "../data/QuotesData";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function QuotesFrame() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };
  return (
    <div className="relative py-8 px-10 bg-[#abaddd] h-full w-full   rounded-2xl flex-grow-0 ">
      <img src={DoubleQoutes} alt="Double Qoutes" className="w-10 h-10 flex" />
      <Carousel
        autoPlay={true}
        interval={5000}
        animationHandler={"slide"}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        selectedItem={currentIndex}
      >
        {QuotesData.map((quote, index) => (
          <div
            key={index}
            className=" w-full h-80  flex flex-col justify-between items-start"
          >
            <p className="pt-6 font-GeneralSansRegular text-start text-[18px]">
              {quote.quote}
            </p>
            <div className="w-full pb-16 flex flex-row gap-6 justify-end ">
              <div>
                <h4 className="font-ThunderBold text-[22px] tracking-wide">
                  {quote.auther}
                </h4>
                <h6 className="font-GeneralSansRegular text-[11px]">
                  {quote.position}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="absolute bottom-6">
        <div className="flex flex-row gap-6 ">
          <button
            className="bg-black w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 duration-150"
            onClick={handlePreviousClick}
          >
            <IoIosArrowBack className="text-white w-10 h-8" />
          </button>
          <button
            className="bg-black w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 duration-150"
            onClick={handleNextClick}
          >
            <IoIosArrowForward className="text-white w-10 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}

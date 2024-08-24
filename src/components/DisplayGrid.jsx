import React from "react";

import QuotesFrame from "./QuotesFrame";
import MySelfContainer from "./MySelfContainer";
import DevelopmentSection from "./DevelopmentSection";
import ConnectMeContainer from "./ConnectMeContainer";
import LiveProjectContainer from "./LiveProjectContainer";
import CvContainer from "./CvContainer";
import { motion } from "framer-motion";
export default function DisplayGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const leftToRightVariants = {
    hidden: { opacity: 0, x: -50 }, // Start 50px to the left
    visible: { opacity: 1, x: 0 }, // End at the original position
  };
  return (
    <motion.div
      className="z-20 absolute w-screen sm:p-7 p-4 top-0 left-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="relative w-full h-full flex flex-wrap gap-8">
        <motion.div
          className="flex flex-col xl:w-1/2 h-full gap-8"
          variants={leftToRightVariants}
        >
          <MySelfContainer />
          <DevelopmentSection />
        </motion.div>

        <motion.div
          className="md:w-1/4 h-full flex flex-col gap-8"
          variants={leftToRightVariants}
        >
          <QuotesFrame />
          <CvContainer />
        </motion.div>

        <motion.div
          className="w-max h-full flex flex-col flex-grow gap-8"
          variants={leftToRightVariants}
        >
          <LiveProjectContainer />
          <ConnectMeContainer />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

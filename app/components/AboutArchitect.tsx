"use client";

import { manropeFont } from "@/utils/fonts";
import React from "react";
import { motion } from "framer-motion";
import { useMotionVariants } from "@/utils/motionVariant";

const AboutArchitect = () => {
  const { initialVariant, viewVariant, viewPortVariant, transitionVariant } =
    useMotionVariants();
  return (
    <div
      id="about-architect"
      className="w-full md:h-[100vh] p-[0px_0px] 2xl:p-[0px_200px] relative flex flex-col-reverse lg:flex-row-reverse justify-center bg-secondary"
    >
      <motion.div
       className="bg-[url('/assets/architect.png')] w-full lg:w-1/2 md:h-full min-h-[400px] bg-contain bg-no-repeat bg-center lg:bg-right bg-secondary" 
        initial={initialVariant}
        whileInView={viewVariant}
        viewport={viewPortVariant}
        transition={transitionVariant}/>
      <div className="flex flex-col lg:justify-center lg:w-[40%] max-md:bg-secondary p-[64px_24px]">
        <motion.h1
          initial={initialVariant}
          whileInView={viewVariant}
          transition={transitionVariant}
          viewport={viewPortVariant}
          className="font-boskaMedium text-primary text-[60px] lg:text-[96px] z-20 leading-none"
        >
          The Architects
        </motion.h1>
        <motion.p
          initial={initialVariant}
          whileInView={viewVariant}
          transition={transitionVariant}
          viewport={viewPortVariant}
          className={`${manropeFont.className} text-[28px] lg:text-[32px] text-primary mt-[12px]`}
        >
          Vishal & Vineeta Sharma
        </motion.p>
        <motion.p
          initial={initialVariant}
          whileInView={viewVariant}
          transition={transitionVariant}
          viewport={viewPortVariant}
          className={`mt-[48px] ${manropeFont.className} text-[20px] lg:text-[24px] text-primary font-[300]`}
        >
          Sanctuary comes to life under the creative hands of Vishal Sharma and
          Vineeta Singhania, Confluence&apos;s Principal Architects. Widely admired
          for merging classic beauty with modern green technology, they design
          with a rare feel for space, light, and the land that holds them.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutArchitect;

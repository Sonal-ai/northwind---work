"use client";
import React from "react";
import { motion } from "framer-motion";
import { useMotionVariants } from "@/utils/motionVariant";

const Club = () => {
  const { initialVariant, viewPortVariant, viewVariant, transitionVariant } =
    useMotionVariants();
  return (
    <div className="w-full bg-primary text-center lg:justify-center relative flex flex-col mt-[32px] py-[12px]">
      <motion.h1
        initial={initialVariant}
        whileInView={viewVariant}
        transition={transitionVariant}
        viewport={viewPortVariant}
        className="font-boskaMedium text-secondary text-[48px] lg:text-[96px] z-20 leading-none"
      >
        The Club At Sanctuary
      </motion.h1>

      <div className="w-full mt-[24px] md:h-[80vh] ${manropeFont.className} p-[0px_0px] lg:p-[0px_40px] 2xl:p-[0px_240px] relative lg:gap-10 flex flex-col-reverse lg:flex-row justify-center bg-primary">
        <motion.div
          className="bg-[url('/assets/club1.jpg')] max-lg:mt-[12px] ${manropeFont.className} w-full lg:w-2/3 md:h-[100%] min-h-[306px] bg-cover bg-no-repeat bg-center lg:bg-right bg-primary"
          initial={initialVariant}
          whileInView={viewVariant}
          viewport={viewPortVariant}
          transition={transitionVariant}
        />

        <motion.div
          initial={initialVariant}
          whileInView={viewVariant}
          transition={transitionVariant}
          viewport={viewPortVariant}
          className="bg-[url('/assets/club2.jpg')] w-full lg:w-1/3 md:h-[40%] min-h-[400px] bg-cover bg-no-repeat bg-center lg:bg-right bg-primary"
        />
      </div>
    </div>
  );
};

export default Club;

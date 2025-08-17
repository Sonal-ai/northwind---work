"use client";
import React from "react";
import { manropeFont } from "@/utils/fonts";
import { motion } from "framer-motion";
import { useMotionVariants } from "@/utils/motionVariant";

const WorldClass = () => {
  const { initialVariant, viewPortVariant, viewVariant, transitionVariant } =
    useMotionVariants();

  return (
    <div className="w-full bg-primary relative flex flex-col md:mt-0 mt-[32px]">
      <div className="w-full md:h-[80vh] 2xl:p-[0px_200px] relative lg:gap-[32px] flex flex-col-reverse lg:flex-row justify-center bg-primary">
        <motion.div
          className="bg-[url('/assets/avRoom.jpg')] w-full lg:w-1/2 md:h-full min-h-[306px] bg-cover lg:bg-contain max-lg:mt-[20px] bg-no-repeat bg-center lg:bg-right bg-primary"
          initial={initialVariant}
          whileInView={viewVariant}
          viewport={viewPortVariant}
          transition={transitionVariant}
        />
        <div className="flex flex-col lg:justify-center lg:w-[40%] max-md:bg-primary px-[16px]">
          <motion.h1
            initial={initialVariant}
            whileInView={viewVariant}
            transition={transitionVariant}
            viewport={viewPortVariant}
            className="font-boskaMedium text-secondary text-[48px] lg:text-[96px] z-20 leading-none"
          >
            Private AV 
            Room
          </motion.h1>

          <motion.p
            initial={initialVariant}
            whileInView={viewVariant}
            transition={transitionVariant}
            viewport={viewPortVariant}
            className={`mt-[16px] ${manropeFont.className} text-[20px] lg:text-[24px] text-secondary font-[400]`}
          >
            Immerse yourself in cinematic
            <br />
            brilliance in our state-of-the-art <br />
            Audio-Visual Room
          </motion.p>
        </div>
      </div>

      <div className="w-full md:h-[80vh] mt-[32px] p-[0px_0px] 2xl:p-[0px_200px] relative lg:gap-10 flex flex-col-reverse lg:flex-row-reverse justify-center bg-primary">
        <motion.div
          className="bg-[url('/assets/arcade.jpg')] w-full lg:w-1/2 md:h-full min-h-[306px] bg-cover lg:bg-contain max-lg:mt-[20px] bg-no-repeat bg-center lg:bg-right bg-primary"
          initial={initialVariant}
          whileInView={viewVariant}
          viewport={viewPortVariant}
          transition={transitionVariant}
        />
        <div className="flex flex-col lg:justify-center lg:w-[40%] max-md:bg-primary px-[16px] lg:p-[64px_24px]">
          <motion.h2
            initial={initialVariant}
            whileInView={viewVariant}
            transition={transitionVariant}
            viewport={viewPortVariant}
            className="font-boskaMedium text-secondary text-[48px] lg:text-[96px] z-20 leading-none"
          >
            Recreation &<br />
            Arcade Room
          </motion.h2>

          <motion.p
            initial={initialVariant}
            whileInView={viewVariant}
            transition={transitionVariant}
            viewport={viewPortVariant}
            className={`mt-[16px] ${manropeFont.className} text-[20px] lg:text-[24px] text-secondary font-[400]`}
          >
            Unwind and indulge your competitive <br />
            spirit in the resident&apos;s Game Room
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default WorldClass;

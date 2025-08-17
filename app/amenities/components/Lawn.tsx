"use client";
import React from "react";
import { motion } from "framer-motion";
import { manropeFont } from "@/utils/fonts";
import { useMotionVariants } from "@/utils/motionVariant";

const Lawn = () => {
  const { initialVariant, viewPortVariant, viewVariant, transitionVariant } =
    useMotionVariants();
  return (
    <div className="w-full bg-primary text-center lg:p-[0px_40px] items-center lg:justify-center relative flex flex-col mt-[20px]">
      <div className="flex flex-col w-full px-[16px] 2xl:px-[200px]">
        <motion.h1
          initial={initialVariant}
          whileInView={viewVariant}
          transition={transitionVariant}
          viewport={viewPortVariant}
          className="font-boskaMedium text-secondary text-[40px] lg:text-[96px] z-20 leading-none text-start"
        >
          Exclusive Banquet Hall & Signature
          Restaurant
        </motion.h1>
        <motion.p
          initial={initialVariant}
          whileInView={viewVariant}
          transition={transitionVariant}
          viewport={viewPortVariant}
          className={`mt-[8px] ${manropeFont.className} text-start lg:mt-5 text-[20px] lg:text-[24px] text-secondary font-[400]`}
        >
          Host unforgettable events in the elegant, private Banquet Hall and
          savor exquisite cuisine at the exclusive resident&apos;s restaurant within
          The Club.
        </motion.p>
      </div>

      <div className="w-full md:h-[100vh] mt-[44px] lg:p-[0px_40px] 2xl:p-[0px_200px] relative flex flex-col max-lg:flex-col-reverse justify-center text-center bg-primary">
        <motion.div
          className="bg-[url('/assets/openLawn.png')] max-lg:mt-[20px] w-full md:h-[80%] min-h-[306px] bg-cover bg-no-repeat bg-center lg:bg-right bg-primary"
          initial={initialVariant}
          whileInView={viewVariant}
          viewport={viewPortVariant}
          transition={transitionVariant}
        />

        <div className="flex-flex col max-lg:px-[40px]">
          <motion.h2
          initial={initialVariant}
          whileInView={viewVariant}
          transition={transitionVariant}
          viewport={viewPortVariant}
          className="font-boskaMedium text-secondary max-lg:text-center lg:mt-10 text-[48px] lg:text-[96px] z-20 leading-none text-start"
        >
          Expansive Open Lawn
          <br />
        </motion.h2>

        <motion.p
          initial={initialVariant}
          whileInView={viewVariant}
          transition={transitionVariant}
          viewport={viewPortVariant}
          className={`mt-[10px] ${manropeFont.className} text-center lg:text-start lg:mt-5 text-[20px] lg:text-[24px] text-secondary font-[400]`}
        >
          Breathe freely in the beautifully manicured open lawns at the heart of
          the community.
        </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Lawn;

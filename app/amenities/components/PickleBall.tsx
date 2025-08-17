"use client";
import React from "react";
import { manropeFont } from "@/utils/fonts";
import { motion } from "framer-motion";
import { useMotionVariants } from "@/utils/motionVariant";

const PickleBall = () => {
  const { initialVariant, viewPortVariant, viewVariant, transitionVariant } =
    useMotionVariants();

  return (
    <div className="w-full bg-primary relative mt-[32px] flex flex-col">
      <div className="w-full md:h-[80vh] lg:p-[0px_0px] 2xl:p-[0px_200px] relative lg:gap-[40px] flex flex-col-reverse lg:flex-row-reverse justify-center bg-primary">
        <motion.div
          className="bg-[url('/assets/pickle1.jpg')] max-lg:mt-[20px] w-full lg:w-1/2 md:h-full min-h-[306px] bg-cover lg:bg-contain bg-no-repeat bg-center lg:bg-right bg-primary"
          initial={initialVariant}
          whileInView={viewVariant}
          viewport={viewPortVariant}
          transition={transitionVariant}
        />
        <div className="flex flex-col lg:justify-center lg:w-[40%] px-[16px] max-md:bg-primary lg:gap-[0px]">
          <motion.h1
            initial={initialVariant}
            whileInView={viewVariant}
            transition={transitionVariant}
            viewport={viewPortVariant}
            className="font-boskaMedium text-secondary text-[48px] lg:text-[96px] z-20 leading-none"
          >
            Premier Pickle Ball Court
          </motion.h1>

          <motion.p
            initial={initialVariant}
            whileInView={viewVariant}
            transition={transitionVariant}
            viewport={viewPortVariant}
            className={`mt-[16px] ${manropeFont.className} text-[20px] lg:text-[24px] text-secondary font-[400]`}
          >
            Unwind and indulge your competitive <br />
            spirit in the resident&apos;s Game Room
            <br />
          </motion.p>
        </div>
      </div>

      <div className="w-full mt-[32px] md:h-[80vh] p-[0px_0px] 2xl:p-[0px_200px] relative lg:gap-10 flex flex-col-reverse lg:flex-row justify-center bg-primary">
        <motion.div
          className="bg-[url('/assets/pickle2.jpg')] max-lg:mt-[20px] w-full lg:w-1/2 md:h-full min-h-[306px] bg-cover lg:bg-contain bg-no-repeat bg-center lg:bg-right bg-primary"
          initial={initialVariant}
          whileInView={viewVariant}
          viewport={viewPortVariant}
          transition={transitionVariant}
        />

        <div className="flex flex-col lg:justify-center lg:w-[40%] max-md:bg-primary px-[16px]">
          <motion.h2
            initial={initialVariant}
            whileInView={viewVariant}
            transition={transitionVariant}
            viewport={viewPortVariant}
            className="font-boskaMedium text-secondary text-[48px] lg:text-[96px] z-20 leading-none"
          >
            Serenity Walk Waterfall
          </motion.h2>

          <motion.p
            initial={initialVariant}
            whileInView={viewVariant}
            transition={transitionVariant}
            viewport={viewPortVariant}
            className={` ${manropeFont.className} mt-[16px] text-[20px] lg:text-[24px] text-secondary font-[400]`}
          >
            Experience a breathtaking
            <br />
            architectural marvel—the Skywalk Waterfall.
          </motion.p>
        </div>
      </div>
      <div className="w-full mt-[32px] md:h-[80vh] p-[0px_0px] 2xl:p-[0px_200px] relative lg:gap-10 flex flex-col-reverse lg:flex-row-reverse justify-center bg-primary">
        <motion.div
          className="bg-[url('/assets/pickle3.jpg')] max-lg:mt-[20px] w-full lg:w-1/2 md:h-full min-h-[306px] bg-cover lg:bg-contain bg-no-repeat bg-center lg:bg-right bg-primary"
          initial={initialVariant}
          whileInView={viewVariant}
          viewport={viewPortVariant}
          transition={transitionVariant}
        />
        <div className="flex flex-col lg:justify-center lg:w-[40%] max-md:bg-primary px-[16px]">
          <motion.h2
            initial={initialVariant}
            whileInView={viewVariant}
            transition={transitionVariant}
            viewport={viewPortVariant}
            className="font-boskaMedium text-secondary text-[48px] lg:text-[96px] z-20 leading-none"
          >
            Architecural <br className="max-sm:hidden" />
            Sky Walk
          </motion.h2>

          <motion.p
            initial={initialVariant}
            whileInView={viewVariant}
            transition={transitionVariant}
            viewport={viewPortVariant}
            className={`mt-[16px] ${manropeFont.className} text-[20px] lg:text-[24px] text-secondary font-[400]`}
          >
            Stroll among the clouds on the <br />
            stunning Sky Bridge
          </motion.p>
        </div>
      </div>
      <div className="w-full mt-[32px] md:h-[80vh] p-[0px_0px] 2xl:p-[0px_200px] relative lg:gap-10 flex flex-col-reverse lg:flex-row justify-center bg-primary">
        <motion.div
          className="bg-[url('/assets/pickle4.jpg')] max-lg:mt-[20px] w-full lg:w-1/2 md:h-full min-h-[306px] bg-cover lg:bg-contain bg-no-repeat bg-center lg:bg-right bg-primary"
          initial={initialVariant}
          whileInView={viewVariant}
          viewport={viewPortVariant}
          transition={transitionVariant}
        />
        <div className="flex flex-col lg:justify-center lg:w-[40%] max-md:bg-primary px-[16px]">
          <motion.h2
            initial={initialVariant}
            whileInView={viewVariant}
            transition={transitionVariant}
            viewport={viewPortVariant}
            className="font-boskaMedium text-secondary text-[48px] lg:text-[96px] z-20 leading-none"
          >
            Resort-Style Swimming Pool
          </motion.h2>

          <motion.p
            initial={initialVariant}
            whileInView={viewVariant}
            transition={transitionVariant}
            viewport={viewPortVariant}
            className={`${manropeFont.className} mt-[16px] text-[20px] lg:text-[24px] text-secondary font-[400]`}
          >
            Indulge in resort-style living at our
            <br />
            magnificent swimming pool.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default PickleBall;

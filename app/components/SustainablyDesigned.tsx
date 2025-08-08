"use client";

import Bulb from "@/components/icons/Bulb";
import Cloud from "@/components/icons/Cloud";
import Recycle from "@/components/icons/Recycle";
import SolarPower from "@/components/icons/SolarPower";
import Tree from "@/components/icons/Tree";
import Vent from "@/components/icons/Vent";
import { manropeFont } from "@/utils/fonts";
import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import { useMotionVariants } from "@/utils/motionVariant";
import { useState } from "react";
import FullCertificate from "./FullCertificate";
import Sticker from "@/components/icons/Sticker";

type BoxProps = {
  icon: ReactElement;
  text: string;
  subText: string;
};

const SustainablyDesigned = () => {
  const [display, setDisplay] = useState<boolean>(false);
  const { initialVariant, viewVariant, viewPortVariant, transitionVariant } =
    useMotionVariants();
  const boxes: BoxProps[] = [
    {
      icon: <SolarPower />,
      text: "solar power",
      subText: "lightning",
    },
    {
      icon: <Vent />,
      text: "low-voc",
      subText: "paints",
    },
    {
      icon: <Cloud />,
      text: "rainwater",
      subText: "harvesting",
    },
    {
      icon: <Recycle />,
      text: "efficient waste",
      subText: "management",
    },
    {
      icon: <Bulb />,
      text: "energy optimized",
      subText: "layouts",
    },
    {
      icon: <Tree />,
      text: "abundant",
      subText: "greenery",
    },
  ];
  return (
    <div className="w-full bg-secondary relative p-[88px_24px] 2xl:p-[120px_400px] flex flex-col gap-[36px]">
      <div className="self-end md:mr-20">
        <Sticker />
      </div>
      <div
        className={`flex flex-col justify-center ${display && "brightness-50"}`}
      >
        <motion.h1
          initial={initialVariant}
          whileInView={viewVariant}
          transition={transitionVariant}
          viewport={viewPortVariant}
          className="font-boskaMedium text-primary text-[48px] lg:text-[96px] z-20 leading-none"
        >
          Sustainably Designed.
        </motion.h1>
        <motion.p
          initial={initialVariant}
          whileInView={viewVariant}
          transition={transitionVariant}
          viewport={viewPortVariant}
          className={`${manropeFont.className} text-[18px] lg:text-[32px] text-primary mt-[12px]`}
        >
          IGBC platinum pre-certified.
        </motion.p>
      </div>

      <motion.div
        className={`grid grid-cols-2 ${
          display && "brightness-50"
        } w-full grid-rows-6 md:grid-cols-6 gap-[20px] md:gap-[40px]`}
        initial={initialVariant}
        whileInView={viewVariant}
        viewport={viewPortVariant}
        transition={transitionVariant}
      >
        {boxes.map((box, index) => {
          return (
            <div
              key={index}
              className="py-[20px] lg:py-[36px] f-c-col gap-[12px] outline-2 outline-border rounded-[8px] text-primary md:col-span-2 row-span-3"
            >
              {box.icon}
              <p
                className={`${manropeFont.className} uppercase text-center max-sm:text-[12px]`}
              >
                {box.text}
                <br />
                {box.subText}
              </p>
            </div>
          );
        })}
      </motion.div>

      <FullCertificate display={display} setDisplay={setDisplay} />
    </div>
  );
};

export default SustainablyDesigned;

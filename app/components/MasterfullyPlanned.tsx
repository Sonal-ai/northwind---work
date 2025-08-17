"use client";

import { manropeFont } from "@/utils/fonts";
import { maps } from "../exports/export";
import React, { useState } from "react";
import Image from "next/image";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import { useMotionVariants } from "@/utils/motionVariant";
import { motion } from "framer-motion";
import { LeftArrow } from "@/components/icons/LeftArrow";
import { plazas } from "@/utils/legends";

const MasterfullyPlanned = () => {
  const { initialVariant, viewVariant, viewPortVariant, transitionVariant } =
    useMotionVariants();

  const [showLegends, setShowLegends] = useState<boolean>(false);
  const sections: Array<{
    name: string;
    map: string;
  }> = [
    {
      name: "View Master Plan",
      map: maps[0],
    },
    {
      name: "1. Arrival Zone",
      map: maps[1],
    },
    {
      name: "2. Recreational Zone",
      map: maps[2],
    },
    {
      name: "3. Active Zone",
      map: maps[3],
    },
    {
      name: "4. Fun & Entertainment",
      map: maps[4],
    },
    {
      name: "5. Sports Zone",
      map: maps[5],
    },
    {
      name: "6. Serenity Walk",
      map: maps[6],
    },
    {
      name: "7. Under Serenity Walk",
      map: maps[7],
    },
  ];

  const [clicked, setClicked] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0); // Initialize with first item selected



  return (
    <div className="w-full bg-primary relative p-[64px_36px] 2xl:p-[20px_400px] gap-[44px] flex flex-col">
      <motion.h1
        initial={initialVariant}
        whileInView={viewVariant}
        viewport={viewPortVariant}
        transition={transitionVariant}
        className={"font-boskaMedium text-[48px] lg:text-[96px] text-secondary"}
      >
        Masterfully Planned
      </motion.h1>

      {/* Map Section */}
      <motion.div
        className="outline-2 outline-border rounded-[20px] h-max lg:h-[678px] flex flex-col lg:flex-row items-start w-[100%] self-center"
        initial={initialVariant}
        whileInView={viewVariant}
        viewport={viewPortVariant}
        transition={transitionVariant}
      >
        {/* Names */}
        <div className="flex flex-wrap lg:flex-col lg:items-start lg:w-[40%] xl:w-[50%]">
          {sections.map((section, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setSelectedIndex(index);
                }}
                className={`p-[8px_12px] lg:p-[12px_30px] ${
                  selectedIndex === index
                    ? "bg-secondary/85 text-primary"
                    : "bg-transparent text-secondary"
                } ${index === 0 && "rounded-tl-[20px]"} ${
                  index === 1 && "max-lg:rounded-tr-[20px]"
                } hover:bg-secondary/85 hover:text-primary cursor-pointer transition-all duration-200 lg:w-full flex justify-start border-b-1 border-r-1 max-lg:w-1/2 border-border ${
                  manropeFont.className
                } font-[500] text-[14px] lg:text-[24px]`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                  WebkitTouchCallout: "none",
                  WebkitUserSelect: "none",
                  userSelect: "none",
                }}
              >
                {section.name}
              </div>
            );
          })}
        </div>

        {/* Maps */}
        <div className="relative h-[300px] sm:max-lg:h-[600px] lg:h-full w-full ">
          <Image
            alt={sections[selectedIndex].name}
            src={sections[selectedIndex].map}
            fill
            className="object-cover lg:rounded-tr-[20px] lg:rounded-br-[20px] max-lg:rounded-b-[20px]"
          />
        </div>
      </motion.div>

      {/* Legends */}
      <div className="rounded-[20px] border-2 border-border p-[20px_16px]">
        <div className="w-full flex justify-between items-center">
          <h4 className={`${manropeFont.className} text-[20px] text-secondary`}>Legend</h4>
          <LeftArrow
            onClick={() => setShowLegends(!showLegends)}
            className={`${
              showLegends ? "rotate-90 mt-[1px]" : "-rotate-90 mb-[4px]"
            } cursor-pointer text-secondary transition-all duration-300`}
          />
        </div>

        {/* Points */}
        {showLegends && <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-4 gap-[15px] w-full mt-[22px]">
          {plazas[selectedIndex].map((zone, index) => {
            return (
              <div
                key={index}
                className={`flex gap-[80px] ${manropeFont.className} tracking-wide`}
              >
                <div className="flex items-center gap-[10px] uppercase text-[12px]">
                  <span className="rounded-full shrink-0 f-c-row size-9 border border-border">
                    {index + 1}
                  </span>
                  {zone}
                </div>
              </div>
            );
          })}
        </div>}
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-center gap-5 max-lg:mt-[28px] lg:mt-[32px] w-full">
        <PrimaryButton
          text="Express Interest"
          onTap={() => {
            document
              .getElementById("connect-with-us")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`p-[20px_40px] max-lg:w-full lg:p-[20px_40px] text-[20px] lg:text-[24px] hover:bg-secondary/80 duration-20 ${manropeFont.className}  bg-secondary/90 text-primary`}
        />
        <SecondaryButton
          onTap={() => {
            setClicked(!clicked);
            window.open("/assets/certificates/masterPlan.pdf");
          }}
          text="Master plan"
          className={`p-[20px_40px] max-lg:w-full lg:p-[20px_40px] text-[20px]   hover:bg-amber-200/20 duration-200  lg:text-[24px]  ${manropeFont.className} 
             bg-primary text-secondary
           border-secondary`}
        />
      </div>
    </div>
  );
};

export default MasterfullyPlanned;

"use client";

import { LeftArrow } from "@/components/icons/LeftArrow";
import { useMotionVariants } from "@/utils/motionVariant";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ImageGallery = () => {
  const [current, setCurrent] = useState<number>(0);
  const [transitioning, setTransitioning] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { initialVariant, viewVariant, transitionVariant, viewPortVariant } =
    useMotionVariants();

  const images = [
    "/assets/gallery1.jpg",
    "/assets/gallery2.jpg",
    "/assets/gallery3.jpg",
    "/assets/gallery4.jpg",
    "/assets/gallery5.jpg",
  ];

  const extendedImages = [...images, images[0]];

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleNext = () => {
    setCurrent((prev) => prev + 1);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);

    return () => clearTimeout(timeoutRef.current!);
  }, [current]);

  
  useEffect(() => {
    if (current === images.length) {
      setTimeout(() => {
        setTransitioning(false);
        setCurrent(0);
      }, 600); 

      setTimeout(() => {
        setTransitioning(true);
      }, 700);
    }
  }, [current, images.length]);

  return (
    <div className="w-full relative p-[64px_24px] 2xl:p-[100px_400px] bg-primary flex flex-col gap-[50px]">
      <div className="flex flex-col justify-center lg:pl-[0px]">
        <motion.h1
          initial={initialVariant}
          whileInView={viewVariant}
          viewport={viewPortVariant}
          transition={transitionVariant}
          className="font-boskaMedium text-secondary text-[48px] leading-[120%] lg:text-[96px]"
        >
          Take A look
          <br /> Inside Sanctuary
        </motion.h1>
      </div>

      <div className="flex items-center relative gap-[0px] w-full h-[240px] md:h-[300px] lg:h-[400px] overflow-x-hidden rounded-[24px]">
        <div
          onClick={handlePrev}
          className={`rounded-[99px] z-[9999] f-c-row cursor-pointer absolute left-1`}
        >
          <LeftArrow
            className={`text-primary size-[30px]`}
          />
        </div>
        <div className="overflow-x-hidden rounded-[24px] h-full w-full">
          <div
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
            className={`flex rounded-[24px] items-center w-full h-full ${
              transitioning
                && "transition-transform duration-600 ease-in-out"
                
            }`}
          >
            {extendedImages.map((image, index) => (
              <div key={index} className={`h-full w-full shrink-0 relative`}>
                <div
                style={{
                  backgroundImage: `url('${image}')`,
                }}
                className="rounded-[24px] h-full z-10 shrink-0 w-full bg-cover bg-center"
              />
              <div className="bg-gradient-to-r from-black/50 via-white/5 to-black/50 absolute inset-0 w-full h-full z-[9999]" />
              </div>
            ))}
          </div>
        </div>
        <div
          onClick={handleNext}
          className={`rounded-[99px] f-c-row cursor-pointer absolute right-1`}
        >
          <LeftArrow
            className={`text-primary size-[30px] rotate-180`}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;

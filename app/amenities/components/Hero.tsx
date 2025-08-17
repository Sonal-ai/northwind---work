"use client";
import React from "react";
import { manropeFont } from "@/utils/fonts";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import { useSignUpStore } from "@/stores/useSignUpStore";
import { useMotionVariants } from "@/utils/motionVariant";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Hero = () => {
  const { status } = useSignUpStore();
  const { initialVariant, viewVariant, viewPortVariant, transitionVariant } =
    useMotionVariants();
  const router = useRouter();
  return (
    <section className="w-full relative bg-primary flex flex-col justify-start">
      <div className="w-full h-[100vh] relative overflow-hidden flex flex-col justify-start items-start sm:items-end">
        <div
          className="size-full sm:absolute sm:inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('assets/reception.png')` }}
        ></div>

        {/* Overlay with full height to help position content exactly */}
        <div className="sm:absolute sm:mt-auto sm:inset-0 sm:flex items-end justify-end px-4 lg:px-8 py-0 z-[9999] max-sm:mt-[32px]">
          <h1 className="font-boskaMedium text-[64px] lg:text-[128px] text-primary tracking-wide leading-14 lg:leading-24 max-sm:text-secondary">
            Amenities
          </h1>
        </div>
      </div>

      <div className="flex flex-col w-full justify-center items-center mt-[20px] gap-8">
        <p
          className={`${manropeFont.className} text-black px-4 text-[20px] lg:text-[24px]`}
        >
          Discover a curated collection of indoor and outdoor amenities,
          designed to
          <br className="max-sm:hidden" />
          provide residents with an unparalleled experience of leisure,
          wellness, and community.
        </p>
      </div>

      <div className="flex-col max-sm:p-[64px_24px] flex sm:flex-row-reverse justify-center items-center gap-5 mt-[36px] w-full">
        <PrimaryButton
          text="Download Brochure"
          onTap={() => {
             localStorage.setItem("download-brochure", "yes");
            if (status) {
              const link = document.createElement("a");
              link.href = "/assets/certificates/Brochure.pdf";
              link.download = "Brochure.pdf";
              link.click();

             
            } else {
              document
                .getElementById("connect-with-us")
                ?.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className={`p-[20px_40px] max-lg:w-full lg:p-[20px_40px] text-[20px] lg:text-[24px] hover:bg-secondary/80 duration-20 ${manropeFont.className}  bg-secondary/90 text-primary`}
        />
        <SecondaryButton
          text="Schedule Visit"
          onTap={() => {
            localStorage.setItem("purpose", "form");
            router.push("/sanctuary");
          }}
          className={`p-[20px_40px] max-lg:w-full lg:p-[20px_40px] text-[20px] hover:bg-amber-200/20 duration-200  lg:text-[24px]  ${manropeFont.className} 
                        bg-primary text-secondary
                      border-secondary`}
        />
      </div>
      <div className="flex flex-col items-center justify-center lg:h-[1200px] overflow-hidden relative gap-[32px] mt-[32px] lg:p-[64px_36px]">
        <motion.h1
          initial={initialVariant}
          whileInView={viewVariant}
          viewport={viewPortVariant}
          transition={transitionVariant}
          className={
            "font-boskaMedium text-[48px] text-center lg:text-[96px] text-secondary"
          }
        >
          World-Class Amenities
          <br className="max-sm:hidden"/>
          For An Inspired Lifestyles
        </motion.h1>
        <div className="p-[64px_36px] relative h-[400px] sm:max-lg:h-[600px] lg:h-full w-full overflow-hidden">
          <div
            className="bg-cover absolute inset-0 bg-center bg no-repeat w-full"
            style={{ backgroundImage: `url('assets/world.jpg')` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

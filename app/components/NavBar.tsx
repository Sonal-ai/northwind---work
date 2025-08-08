"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import HamBurger from "@/components/icons/HamBurger";
import React, { useState } from "react";
import Navigation from "./Navigation";

const NavBar = ({ isPreLoaderVisible }: { isPreLoaderVisible: boolean }) => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);

  return (
    <>
      <header className={`bg-primary/80 fixed top-0 left-0 z-[99999] w-full px-[17px] py-[8px] flex items-center justify-between backdrop-blur-md shadow-md ${isPreLoaderVisible && "hidden"}`}>
        <div onClick={() => setShowNavigation(true)}>
          <HamBurger />
        </div>

        <PrimaryButton
          onTap={() => {
            document
              .getElementById("connect-with-us")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          text="Enquire Now"
          className="p-[12px_36px] max-sm:hidden"
        />
      </header>

      
      <main className="pt-[80px]">
        <Navigation show={showNavigation} setShow={setShowNavigation} />
      </main>
    </>
  );
};

export default NavBar;

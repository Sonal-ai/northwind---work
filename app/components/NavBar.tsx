"use client";

import PrimaryButton from '@/components/buttons/PrimaryButton';
import HamBurger from '@/components/icons/HamBurger';
import React, { useState } from 'react';
import Navigation from './Navigation';

const NavBar = () => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  return (
    <div>
      <div className={`bg-primary/80 z-[99999] w-full px-[17px] py-[8px] flex items-center justify-between`}>
      <div onClick={() => setShowNavigation(true)}>
        <HamBurger />
      </div>
      <PrimaryButton onTap={()=>{
        document.getElementById("connect-with-us")?.scrollIntoView({behavior:"smooth"})
      }}   text="Enquire Now" className="p-[12px_36px] max-sm:hidden" />
      
    </div>

    <Navigation  show={showNavigation} setShow={setShowNavigation} />
    </div>
  )          
}

export default NavBar

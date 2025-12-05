// components/Footer.tsx
import { Facebook, Instagram, Linkedin, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import windLogo from "../assets/wind-logo.png";


const Footer = () => {
  return (
    <footer className="bg-teal-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Top Section - Navigation and Social */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <Link href="/about" className="text-base sm:text-lg font-medium hover:text-mint transition-colors">
              About Us
            </Link>
            <Link href="/why-us" className="text-base sm:text-lg font-medium hover:text-mint transition-colors">
              Why Us
            </Link>
            <Link href="/team" className="text-base sm:text-lg font-medium hover:text-mint transition-colors">
              Our Team
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mint transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mint transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mint transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="sm:w-7 sm:h-7" />
            </a>
          </div>
        </div>

        {/* Address Section */}
        <div className="mb-12 pb-8 border-b border-white/20 flex items-center gap-2 text-sm sm:text-base text-white/80">
          <MapPin size={16} className="flex-shrink-0" />
          <span>Plot 07, Sector PI-1, Greater Noida, UP-201306</span>
        </div>

        {/* Large Logo Section */}
        <div className="mb-12 flex justify-center w-full">
        
            
              <div className="relative w-100 h-32 sm:w-100 sm:h-40 md:w-120 md:h-48 mx-auto">
              
                  <Image
                    src="/assets/footerLogo.png"   // <-- replace with your real image name
                    alt="North Wind Estates Logo"
                    fill
                    className="object-cover "
                    priority
                  />
               
                
              </div>
              {/*relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto*/}
            
          
        </div>

        {/* Bottom Section - Legal Links and Copyright */}
        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 text-sm text-white/80">
            <Link href="/privacy" className="hover:text-white transition-colors underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors underline">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors underline">
              Cookies Settings
            </Link>
          </div>
          <div className="text-sm text-white/80">© 2024 Northwind. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

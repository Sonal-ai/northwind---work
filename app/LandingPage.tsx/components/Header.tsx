// components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // guard for SSR / Next.js
      if (typeof window === 'undefined') return;
      setIsScrolled(window.scrollY > 20);
    };

    // initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (typeof document === 'undefined') return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-sky-light/95 backdrop-blur-md shadow-md' : 'bg-sky-light/80 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-foreground font-medium tracking-wide">
                <span className="text-lg sm:text-xl md:text-2xl font-semibold">NORTH WIND</span>
                <div className="text-[0.5rem] sm:text-xs text-muted-foreground tracking-[0.3em] mt-0.5">
                  ESTATES
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                type="button"
              >
                About
              </button>

              <Link href="/teams" className="inline-flex">
                <Button variant="ghost" className="text-sm font-medium hover:text-primary">
                  Team
                </Button>
              </Link>

              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                type="button"
              >
                Connect with us
              </button>

              <Link href="/blogs" className="inline-flex">
                <Button variant="ghost" className="text-sm font-medium hover:text-primary">
                  Blogs
                </Button>
              </Link>

              <button onClick={() => scrollToSection('project')} type="button">
                <Button className="bg-teal-darker text-white hover:bg-teal-dark rounded-full px-6 text-sm">
                  Explore Project
                </Button>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
              type="button"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-y-0 right-0 z-40 w-full sm:w-80 bg-background shadow-2xl lg:hidden"
          >
            <div className="flex flex-col h-full pt-20 px-6 pb-6">
              <div className="flex flex-col gap-6">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left py-2"
                  type="button"
                >
                  About
                </button>

                <Link href="/teams" onClick={() => setIsMobileMenuOpen(false)}>
                  <button
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left py-2 w-full"
                    type="button"
                  >
                    Team
                  </button>
                </Link>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left py-2"
                  type="button"
                >
                  Connect with us
                </button>

                <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)}>
                  <button
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left py-2 w-full"
                    type="button"
                  >
                    Blogs
                  </button>
                </Link>

                <div className="mt-4">
                  <button onClick={() => scrollToSection('project')} type="button">
                    <Button className="bg-teal-darker text-white hover:bg-teal-dark rounded-full px-8 py-6 text-base w-full">
                      Explore Project
                    </Button>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

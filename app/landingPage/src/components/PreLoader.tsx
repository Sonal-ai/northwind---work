import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import windLogo from "@/assets/wind-logo.png";
import Image from "next/image";


const MotionImage = motion(Image); 
const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[hsl(var(--teal-dark))] via-[hsl(var(--primary))] to-[hsl(var(--teal-darker))]"
        >
          <div className="relative flex flex-col items-center gap-8">
            {/* Logo with rotation animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                scale: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }
              }}
              className="relative"
            >
              <MotionImage
                src={windLogo}
                alt="North Wind Estates"
                className="w-32 h-32 md:w-40 md:h-40"
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-white/20 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-light text-white mb-2">
                North Wind Estates
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-sm md:text-base text-white/80"
              >
                Breeze of Change
              </motion.p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 2, ease: "easeInOut" }}
              className="w-48 h-0.5 bg-white/30 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

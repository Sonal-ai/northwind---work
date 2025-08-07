import { Transition, ViewportOptions } from "framer-motion";

export const useMotionVariants = () => {
  const initialVariant = {
    y: 50,
    opacity: 0,
  };
  const viewVariant = {
    y: 0,
    opacity: 1,
    once: "true"
  };
  const transitionVariant: Transition = {
    duration: 1.4,
    ease: "easeOut",
  };
  const viewPortVariant: ViewportOptions = { once: true }
  return { initialVariant, viewVariant, transitionVariant, viewPortVariant };
};

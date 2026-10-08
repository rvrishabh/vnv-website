import type { Transition, Variants } from "framer-motion";

/** Institutional ease — calm, no bounce */
export const ease: Transition["ease"] = [0.22, 1, 0.36, 1];

export const transition: Transition = {
  duration: 0.55,
  ease,
};

export const transitionFast: Transition = {
  duration: 0.35,
  ease,
};

export const fadeUp: Variants = {
  // Content rises and tips forward slightly in 3D as it enters the viewport
  hidden: { opacity: 0, y: 28, rotateX: 8, transformPerspective: 1100 },
  visible: { opacity: 1, y: 0, rotateX: 0, transformPerspective: 1100 },
};

export const fadeUpSubtle: Variants = {
  hidden: { opacity: 0, y: 16, rotateX: 6, transformPerspective: 1100 },
  visible: { opacity: 1, y: 0, rotateX: 0, transformPerspective: 1100 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.06,
    },
  },
};

export const staggerItem: Variants = fadeUpSubtle;

export const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.08,
    },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export const drawer: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.32, ease },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.24, ease },
  },
};

export const viewport = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -6% 0px",
} as const;

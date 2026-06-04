import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainer, staggerItem, transition, viewport } from "../lib/motion";

interface StaggerProps {
  children: ReactNode;
  className?: string;
}

export function Stagger({ children, className = "" }: StaggerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={viewport}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={reduceMotion ? undefined : staggerItem}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

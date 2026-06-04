import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface MotionCardProps {
  children: ReactNode;
  className?: string;
}

/** Subtle lift on hover for cards and panels */
export function MotionCard({ children, className = "" }: MotionCardProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

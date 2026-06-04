import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, fadeUpSubtle, fadeIn, scaleIn, transition, viewport } from "../lib/motion";

type RevealVariant = "up" | "subtle" | "fade" | "scale";

const variants = {
  up: fadeUp,
  subtle: fadeUpSubtle,
  fade: fadeIn,
  scale: scaleIn,
} as const;

type MotionTag = keyof typeof motion;

interface RevealProps extends Omit<HTMLMotionProps<"div">, "children" | "initial" | "animate"> {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: MotionTag;
  variant?: RevealVariant;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
  variant = "up",
  ...rest
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={viewport}
      variants={variants[variant]}
      transition={{ ...transition, delay: delay / 1000 }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
}

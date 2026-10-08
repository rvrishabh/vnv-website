import type { ReactNode } from "react";
import { Tilt } from "./ScrollMotion";

interface MotionCardProps {
  children: ReactNode;
  className?: string;
}

/** Cards and panels tilt in 3D toward the pointer, with a soft gold glare */
export function MotionCard({ children, className = "" }: MotionCardProps) {
  return (
    <Tilt className={className} max={6}>
      {children}
    </Tilt>
  );
}

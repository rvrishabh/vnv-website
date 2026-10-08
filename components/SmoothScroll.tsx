import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Lenis smooth (inertial) wheel scrolling for the whole page. Touch devices keep native
 * scrolling, and users who prefer reduced motion get plain browser scrolling.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.085, smoothWheel: true, wheelMultiplier: 0.95, anchors: true }}>
      {children}
    </ReactLenis>
  );
}

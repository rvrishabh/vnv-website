import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { pageTransition, transitionFast } from "../lib/motion";

export function PageTransition() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <Outlet />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        transition={transitionFast}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}

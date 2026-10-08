import {
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode, type PointerEvent } from "react";

const SPRING = { stiffness: 120, damping: 24, mass: 0.4 };

/* ---------- Thin gold bar showing how far down the page you are ---------- */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden="true"
      className="absolute left-0 right-0 bottom-0 h-[2px] origin-left bg-gold"
      style={{ scaleX }}
    />
  );
}

/* ---------- Scroll-linked parallax: content drifts against the scroll ---------- */
export function useSectionScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  return { ref, progress: scrollYProgress };
}

/** Moves children vertically by ±`distance`px as the element crosses the viewport */
export function Parallax({
  children,
  distance = 40,
  className = "",
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const { ref, progress } = useSectionScroll();
  const y = useSpring(useTransform(progress, [0, 1], [distance, -distance]), SPRING);
  return (
    <div ref={ref} className={className}>
      <motion.div style={reduceMotion ? undefined : { y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

/** For images inside an overflow-hidden frame: a slightly zoomed image that pans with scroll */
export function ParallaxImage({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  const { ref, progress } = useSectionScroll();
  const y = useTransform(progress, [0, 1], ["-7%", "7%"]);
  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div className="absolute inset-[-8%]" style={reduceMotion ? undefined : { y, scale: 1.04 }}>
        {children}
      </motion.div>
    </div>
  );
}

/** Hero exit: as the hero scrolls away, content lifts, fades and tips back slightly in 3D */
export function useHeroScroll() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const sealRotate = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const sealY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const backdropY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  return { ref, y, opacity, rotateX, sealRotate, sealY, backdropY };
}

/* ---------- 3D tilt that follows the pointer, with a soft gold glare ---------- */
export function Tilt({
  children,
  className = "",
  max = 7,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  /** Maximum tilt in degrees */
  max?: number;
  glare?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), SPRING);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), SPRING);
  const glareX = useTransform(px, (v) => `${v * 100}%`);
  const glareY = useTransform(py, (v) => `${v * 100}%`);
  const glareBg = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(201,168,76,0.16), transparent 55%)`;
  const glareOpacity = useSpring(0, SPRING);

  if (reduceMotion) return <div className={className}>{children}</div>;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
    glareOpacity.set(1);
  };
  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
    glareOpacity.set(0);
  };

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 900, transformStyle: "preserve-3d" }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] z-10"
          style={{ background: glareBg, opacity: glareOpacity }}
        />
      )}
    </motion.div>
  );
}

/* ---------- Numbers that count up once they scroll into view ---------- */
export function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  // Server and first client render show the real value, so crawlers and no-JS readers see it
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView || reduceMotion || !match) return;
    const [, prefix, digits, suffix] = match;
    const target = Number(digits.replace(/,/g, ""));
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(`${prefix}${Math.round(v).toLocaleString("en-IN")}${suffix}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

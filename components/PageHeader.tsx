import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Container, Eyebrow } from "./ui";
import { Seal } from "./Seal";
import { heroStagger, heroItem, ease } from "../lib/motion";
import { useHeroScroll } from "./ScrollMotion";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  const reduceMotion = useReducedMotion();
  const hero = useHeroScroll();

  return (
    <section ref={hero.ref} className="relative bg-navy-deep text-white overflow-hidden">
      <motion.div
        className="absolute inset-0 blueprint-grid pointer-events-none"
        style={reduceMotion ? undefined : { y: hero.backdropY }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(120% 90% at 85% 0%, rgba(21,48,95,0.7), transparent 60%)" }}
      />
      <motion.div
        className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none"
        style={reduceMotion ? undefined : { y: hero.sealY, rotate: hero.sealRotate }}
      >
        <motion.div
          className="opacity-70"
          initial={reduceMotion ? false : { opacity: 0, rotate: -8 }}
          animate={reduceMotion ? undefined : { opacity: 0.7, rotate: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.2 }}
        >
          <Seal size={300} variant="watermark" />
        </motion.div>
      </motion.div>
      <Container className="relative">
        <motion.div
          style={
            reduceMotion
              ? undefined
              : { y: hero.y, opacity: hero.opacity, rotateX: hero.rotateX, transformPerspective: 1200, transformOrigin: "50% 0%" }
          }
        >
        <motion.div
          className="max-w-3xl py-16 md:py-24"
          variants={reduceMotion ? undefined : heroStagger}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
        >
          <motion.div variants={reduceMotion ? undefined : heroItem}>
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
          </motion.div>
          <motion.h1
            variants={reduceMotion ? undefined : heroItem}
            className="mt-6 font-display font-semibold tracking-tightish leading-[1.08] text-[36px] md:text-[52px]"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={reduceMotion ? undefined : heroItem}
              className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-white/70 max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
        </motion.div>
      </Container>
      <motion.div
        className="h-[3px] w-full origin-left"
        style={{ background: "linear-gradient(90deg, transparent, var(--gold) 30%, var(--gold) 70%, transparent)" }}
        initial={reduceMotion ? false : { scaleX: 0 }}
        animate={reduceMotion ? undefined : { scaleX: 1 }}
        transition={{ duration: 0.8, ease, delay: 0.35 }}
      />
    </section>
  );
}

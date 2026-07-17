'use client';

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-sky-500 via-violet-500 to-cyan-400"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

'use client';

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(129,140,248,0.2),_transparent_36%)]" />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -18, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -24, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-[-8%] h-80 w-80 rounded-full bg-violet-400/20 blur-3xl"
      />
    </div>
  );
}

'use client';

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.16),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(217,70,239,0.14),_transparent_38%)]" />
      <motion.div
        animate={{ x: [0, 24, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -28, 0], y: [0, 22, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-[-8%] h-80 w-80 rounded-full bg-fuchsia-400/20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 18, 0], y: [0, 16, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute left-1/3 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/15 blur-3xl"
      />
    </div>
  );
}

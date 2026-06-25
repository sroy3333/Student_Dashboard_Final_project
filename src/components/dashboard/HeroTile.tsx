"use client";

import { motion } from "framer-motion";

export default function HeroTile() {
  return (
    <motion.article
      className="
      lg:col-span-3
      rounded-3xl
      border border-white/10
    bg-zinc-900
      p-8
      h-[220px]
      "
      animate={{
        y: [0, -5, 0]
      }}
      transition={{
        y: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      whileHover={{
        scale: 1.02
      }}
      whileTap={{
        scale: 0.99
      }}
    >
      <h1 className="text-5xl font-bold leading-tight">
        Welcome Back, Student
      </h1>

      <p className="mt-3 text-zinc-400">
        🔥 14 Day Learning Streak
      </p>
    </motion.article>
  );
}
"use client";

import { motion } from "framer-motion";

interface Props {
  progress: number;
}

export default function ProgressBar({
  progress
}: Props) {
  return (
    <div className="w-full h-2 bg-zinc-800 rounded-full">
      <motion.div
        className="h-2 rounded-full bg-cyan-400"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{
          duration: 1,
          ease: "easeOut"
        }}
      />
    </div>
  );
}
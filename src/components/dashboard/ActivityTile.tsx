"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

export default function ActivityTile() {

  const days = useMemo(
    () =>
      Array.from(
        { length: 70 },
        (_, i) => Math.floor((i * 9301 + 49297) % 233280 / 46656)
      ),
    []
  );

  return (
    <article
      className="
      lg:col-span-3
      rounded-3xl
      bg-zinc-900
      border border-white/10
      p-6
      min-h-[220px]
      "
    >
      <h3 className="mb-4">
        Learning Activity
      </h3>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.01
            }
          }
        }}
        className="grid grid-cols-10 gap-1"
      >
        {days.map((level, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: {
                opacity: 0,
                scale: 0
              },
              show: {
                opacity: 1,
                scale: 1
              }
            }}
            className={`
            h-3
            w-3
            rounded-sm

            ${
              level === 0
                ? "bg-zinc-800"
                : level === 1
                ? "bg-cyan-900"
                : level === 2
                ? "bg-cyan-700"
                : level === 3
                ? "bg-cyan-500"
                : "bg-cyan-300"
            }
            `}
          />
        ))}
      </motion.div>

      <p className="mt-4 text-xs text-zinc-500">
        127 learning sessions this month
      </p>
    
    </article>
  );
}
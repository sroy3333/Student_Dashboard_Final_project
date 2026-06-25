"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Course } from "../../types/course";
import ProgressBar from "./ProgressBar";
import { iconMap } from "../../utils/iconMap";

interface Props {
  course: Course;
}

export default function CourseCard({
  course
}: Props) {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const Icon =
    iconMap[
      course.icon_name as keyof typeof iconMap
    ];

  return (
    <motion.article
      className="
      initial=rest
      animate=rest
      whileHover=hover
      group
      relative
      h-[220px]
      rounded-3xl
      border border-white/10
      bg-zinc-900
      p-5
      overflow-hidden
      will-change-transform
      "
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      onMouseMove={(e) => {
        const rect =
          e.currentTarget.getBoundingClientRect();
        
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      
      }}
    >
      <div
        className="
        absolute
        inset-0
        opacity-0
        z-[1]
        transition-opacity
        duration-300
        group-hover:opacity-100
        pointer-events-none
        "
        style={{
          background: `
            radial-gradient(
              400px circle at
              ${position.x}px ${position.y}px,
              rgba(34,211,238,0.18),
              transparent 80%
            )
          `,
        }}
      />
      <motion.div
        variants={{
          rest: {
            opacity: 0
          },
          hover: {
            opacity: 1
          }
        }}
        transition={{ duration: 0.3 }}
        className="
        absolute
        inset-0
        z-[2]
        rounded-3xl
        p-px
        bg-gradient-to-r
        from-cyan-500
        via-purple-500
        to-pink-500
        "
      >
        <div className="h-full w-full rounded-3xl bg-zinc-900" />
      </motion.div>

      <div className="relative z-10">
        <Icon className="mb-4" />

        <h3 className="font-semibold">
          {course.title}
        </h3>

        <p className="mt-2 text-sm text-zinc-400">
          {course.progress}% Complete
        </p>

        <div className="mt-4">
          <ProgressBar
            progress={course.progress}
          />
        </div>
      </div>
    </motion.article>
  );
}
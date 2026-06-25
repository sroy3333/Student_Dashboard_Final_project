"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Sidebar from "../navigation/Sidebar";
import HeroTile from "./HeroTile";
import CourseCard from "./CourseCard";

import { containerVariants } from "../animations/motionVariants";
import type { Course } from "../../types/course";

const ActivityTile = dynamic(
  () => import("./ActivityTile"),
  {
    loading: () => (
      <div
        className="
        rounded-3xl
        h-48
        bg-zinc-900
        animate-pulse
        "
      />
    ),
  }
);

type DashboardProps = {
  courses: Course[];
};

export default function Dashboard({
  courses
}: DashboardProps) {

  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      <div className="flex">

        <Sidebar />

        <section className="flex-1 p-6">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="
            grid
            gap-6
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            "
          >

            <HeroTile />

            {courses.map((course: Course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}

            <ActivityTile />

          </motion.div>

        </section>

      </div>

    </main>
  );
}
// components/dashboard/CoursesSection.tsx

import { getCourses } from "../../lib/getCourses";
import CourseCard from "./CourseCard";

export default async function CoursesSection() {
  const courses = await getCourses();

  return (
    <>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}
    </>
  );
}
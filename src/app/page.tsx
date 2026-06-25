import { Suspense } from "react";

import Dashboard from "../components/dashboard/Dashboard";
import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
import { getCourses } from "../lib/getCourses";

export default async function Home() {
  const courses = await getCourses();

  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <Dashboard courses={courses} />
    </Suspense>
  );
}
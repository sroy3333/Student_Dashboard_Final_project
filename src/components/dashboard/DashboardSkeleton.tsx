// components/dashboard/DashboardSkeleton.tsx

export default function DashboardSkeleton() {
  return (
    <>
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="
          h-48
          rounded-3xl
          border
          border-zinc-800
          bg-zinc-900
          animate-pulse
          "
        />
      ))}
    </>
  );
}
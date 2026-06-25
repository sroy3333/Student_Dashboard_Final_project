import SkeletonCard from "../components/dashboard/SkeletonCard";


export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-950 p-6">
      <div className="grid gap-4 lg:grid-cols-4">
      
        <div
          className="
          lg:col-span-2
          rounded-3xl
        bg-zinc-900
          border
        border-zinc-800
          p-8
          animate-pulse
          "
        >
          <div className="h-10 w-2/3 bg-zinc-700 rounded mb-4" />
          <div className="h-5 w-1/3 bg-zinc-800 rounded" />
        </div>

        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />

        <div
          className="
          rounded-3xl
        bg-zinc-900
          border
        border-zinc-800
          p-6
          animate-pulse
          "
        >
          <div className="h-6 w-1/2 bg-zinc-700 rounded mb-6" />

          <div className="grid grid-cols-10 gap-1">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="h-3 w-3 rounded bg-zinc-800"
              />
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
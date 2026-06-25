export default function SkeletonCard() {
  return (
    <div
      className="
      rounded-3xl
      bg-zinc-900
      border
      border-zinc-800
      p-5
      animate-pulse
      "
    >
      {/* Icon Placeholder */}
      <div className="h-10 w-10 rounded-lg bg-zinc-700 mb-4" />

      {/* Title Placeholder */}
      <div className="h-6 w-1/2 bg-zinc-700 rounded mb-4" />

      {/* Progress Text Placeholder */}
      <div className="h-4 w-1/3 bg-zinc-800 rounded mb-4" />

      {/* Progress Bar Placeholder */}
      <div className="h-2 w-full bg-zinc-800 rounded-full" />
    </div>
  );
}
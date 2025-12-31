export default function SkeletonRow() {
  return (
    <div className="
      grid grid-cols-6 px-4 py-3 items-center
      animate-pulse
    ">
      <div className="h-4 w-4 shimmer rounded" />

      <div className="flex items-center gap-2">
        <div className="h-6 w-6 shimmer rounded-full" />
        <div className="space-y-1">
          <div className="h-3 w-20 shimmer rounded" />
          <div className="h-2 w-12 shimmer rounded" />
        </div>
      </div>

      <div className="justify-self-end h-3 w-16 shimmer rounded" />
      <div className="justify-self-end h-3 w-12 shimmer rounded" />
      <div className="justify-self-end h-3 w-20 shimmer rounded" />
      <div className="justify-self-end h-5 w-20 shimmer rounded" />
    </div>
  );
}

"use client"

export default function JobCardSkeleton() {
  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-xl p-4 sm:p-6 animate-pulse">

      {/* Top Section */}
      <div className="flex justify-between items-start gap-3">

        {/* Left: Icon + Title */}
        <div className="flex gap-3 sm:gap-4 min-w-0">
          {/* Icon */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-lg shrink-0" />

          <div className="space-y-2 min-w-0">
            {/* Title */}
            <div className="h-5 w-36 sm:w-56 bg-gray-700 rounded" />
            {/* Company */}
            <div className="h-4 w-24 sm:w-32 bg-gray-700 rounded" />
          </div>
        </div>

        {/* Match Badge */}
        <div className="h-8 w-20 sm:w-24 bg-gray-700 rounded-full shrink-0" />
      </div>

      {/* Description */}
      <div className="mt-4 sm:mt-6 space-y-2">
        <div className="h-4 w-full bg-gray-700 rounded" />
        <div className="h-4 w-11/12 bg-gray-700 rounded" />
        <div className="h-4 w-10/12 bg-gray-700 rounded hidden sm:block" />
      </div>

      {/* Divider */}
      <div className="my-4 sm:my-6 h-px bg-white/10" />

      {/* Footer */}
      <div className="flex justify-between items-center gap-3">
        <div className="h-4 w-24 sm:w-32 bg-gray-700 rounded" />
        <div className="h-9 w-24 sm:w-28 bg-gray-700 rounded-lg shrink-0" />
      </div>
    </div>
  );
}
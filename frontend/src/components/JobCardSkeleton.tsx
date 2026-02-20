"use client"

export default function JobCardSkeleton() {
  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-xl p-6 animate-pulse">
      
      {/* Top Section */}
      <div className="flex justify-between items-start">
        
        {/* Left: Icon + Title */}
        <div className="flex gap-4">
          {/* Icon */}
          <div className="w-12 h-12 bg-gray-700 rounded-lg" />

          <div className="space-y-2">
            {/* Title */}
            <div className="h-5 w-56 bg-gray-700 rounded" />
            {/* Company */}
            <div className="h-4 w-32 bg-gray-700 rounded" />
          </div>
        </div>

        {/* Match Badge */}
        <div className="h-8 w-24 bg-gray-700 rounded-full" />
      </div>

      {/* Description */}
      <div className="mt-6 space-y-2">
        <div className="h-4 w-full bg-gray-700 rounded" />
        <div className="h-4 w-11/12 bg-gray-700 rounded" />
        <div className="h-4 w-10/12 bg-gray-700 rounded" />
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-white/10" />

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div className="h-4 w-32 bg-gray-700 rounded" />
        <div className="h-9 w-28 bg-gray-700 rounded-lg" />
      </div>
    </div>
  );
}
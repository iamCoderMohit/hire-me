export default function ResumeSkeleton() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="
          w-[300px]
          h-[432px]
          bg-white
          rounded-md
          shadow-md
          overflow-hidden
          relative
        "
      >
        {/* Shimmer overlay */}
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200" />

        {/* Fake resume content lines */}
        <div className="p-6 space-y-4 relative z-10">
          <div className="h-6 w-2/3 bg-gray-300 rounded"></div>
          <div className="h-4 w-1/2 bg-gray-300 rounded"></div>

          <div className="space-y-2 pt-6">
            <div className="h-3 w-full bg-gray-300 rounded"></div>
            <div className="h-3 w-full bg-gray-300 rounded"></div>
            <div className="h-3 w-5/6 bg-gray-300 rounded"></div>
          </div>

          <div className="space-y-2 pt-4">
            <div className="h-3 w-full bg-gray-300 rounded"></div>
            <div className="h-3 w-4/5 bg-gray-300 rounded"></div>
            <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
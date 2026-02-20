"use client";

export default function Companies() {
  const companies = ["GOOGLE", "META", "ADOBE", "NETFLIX", "APPLE", "MICROSOFT", "AMAZON", "SPOTIFY"];

  return (
    <div className="bg-[#020617] text-[#94A3B8] flex flex-col justify-center items-center py-15 outline-1 outline-white/30 overflow-hidden">
      <h1 className="text-sm tracking-widest text-center px-4">
        EXPLORE JOBS IN MORE THAN 1000 COMPANIES
      </h1>

      {/* Marquee wrapper */}
      <div className="relative w-full mt-5 overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-16 sm:w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 sm:w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex w-max animate-marquee">
          {[...companies, ...companies].map((company, i) => (
            <span
              key={i}
              className="font-black text-2xl sm:text-3xl whitespace-nowrap px-8 sm:px-10"
            >
              {company}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </div>
  );
}
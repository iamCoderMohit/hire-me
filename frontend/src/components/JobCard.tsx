"use client"

import { Info, Job1, Job2, Job3, Location } from "@/app/Icons/Svg";
import Button from "./Button";
import { timeAgo } from "@/lib/timeAgo";
import { useMemo, useState } from "react";

interface Input {
    title: string;
    description: string;
    company: string;
    location: string;
    postedAt: string;
    redirect_url: string | undefined;
    similarity: number
}

function JobCard({title, description, company, location, postedAt, redirect_url, similarity}: Input) {
    const icons = {
        "one": Job1,
        "two": Job2,
        "three": Job3
    }

    const arr = ["one", "two", "three"]
    const randomNum = useMemo(() => {
  return Math.floor(Math.random() * 3)
}, [])
    const Icon = icons[arr[randomNum]]

    const [expanded, setExpanded] = useState(false);
  const isLong = description?.length > 180;

  return (
    <div className="outline outline-[#4B2BEE]/30 p-4 sm:p-5 rounded-md flex flex-col gap-4 sm:gap-5">

      {/* Top row */}
      <div className="flex justify-between items-start gap-3">
        <div className="flex gap-3 min-w-0">
          <div className="bg-[#1E293B] w-fit h-fit p-3 outline outline-white/30 rounded-md shrink-0">
            <Icon />
          </div>
          <div className="min-w-0">
            <h1 className="text-base sm:text-lg font-bold leading-tight">{title}</h1>
            <div className="flex items-center gap-1 flex-wrap text-sm sm:text-base mt-0.5">
              <h1>{company} •</h1>
              <Location />
              <h1 className="text-[#94A3B8]">{location}</h1>
            </div>
          </div>
        </div>

        <h1 className="bg-[#4B2BEE]/30 h-fit px-3 sm:px-4 py-1 rounded-full text-[#4B2BEE] text-xs sm:text-sm font-bold outline outline-white/30 shrink-0 whitespace-nowrap">
          {Math.floor(similarity * 100)}% Match
        </h1>
      </div>

      {/* Description with show more */}
      <div>
        <h1 className="text-sm sm:text-md text-[#94A3B8] leading-relaxed">
          {isLong && !expanded ? `${description.slice(0, 180)}...` : description}
        </h1>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[#4B2BEE] text-sm font-semibold mt-1 hover:underline cursor-pointer"
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>

      <div className="w-full h-[1px] bg-white/30" />

      {/* Footer */}
      <div className="flex justify-between items-center gap-3">
        <h1 className="text-xs sm:text-sm text-[#94A3B8]">Posted {timeAgo(postedAt)}</h1>
        {redirect_url && (
          <a href={redirect_url} className="shrink-0" target="_blank">
            <Button text="Apply Now" textSize="sm" />
          </a>
        )}
      </div>

      {!redirect_url && (
        <div className="rounded-md p-1 flex items-start sm:items-center gap-2 bg-transparent">
          <div className="shrink-0 mt-0.5 sm:mt-0">
            <Info />
          </div>
          <h1 className="text-xs sm:text-sm leading-snug">
            Direct apply link is not available for this job, you can check {company}'s official hiring page.
          </h1>
        </div>
      )}
    </div>
  )
}

export default JobCard
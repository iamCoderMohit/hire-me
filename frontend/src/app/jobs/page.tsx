"use client";

import NewResumeCard from "@/components/NewResumeCard";
import ResumeCard from "@/components/ResumeCard";
import ResumeSkeleton from "@/components/ResumeSkeleton";
import { useResume } from "@/hooks/useResume";
import { useEffect } from "react";

function page() {
  const { getResume, loading, resumes } = useResume();

  useEffect(() => {
    getResume();
  }, []);
  return (
    <div className="text-white p-5 min-h-[70vh]">
      <h1 className="text-xl font-black">Try Searching for a Job</h1>

      <div className="mt-10 flex flex-wrap gap-5 mb-10">
        {loading ? (
          <div className="flex gap-5 flex-wrap">
            <ResumeSkeleton />
            <ResumeSkeleton />
            <ResumeSkeleton />
          </div>
        ) : resumes.length > 0 ? (
          <div className="flex gap-5 flex-wrap">
            {resumes.map((res) => (
              <ResumeCard url={res.url} id={res.id} />
            ))}
          </div>
        ) : (
          <div>
            <h1>Start by uploading a new resume</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default page;

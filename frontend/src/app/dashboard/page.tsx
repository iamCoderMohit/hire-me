"use client";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Delete, Resume, UploadWhite } from "../Icons/Svg";
import DashCard from "@/components/DashCard";
import NewResumeCard from "@/components/NewResumeCard";
import { useResume } from "@/hooks/useResume";
import { useEffect, useRef, useState } from "react";
import ResumeCard from "@/components/ResumeCard";
import ResumePreview from "@/components/ResumeViewer";
import { resumeUpload } from "@/lib/api/resumeUpload";
import ResumeSkeleton from "@/components/ResumeSkeleton";

function page() {
  const { getResume, loading, resumes } = useResume();

  useEffect(() => {
    getResume();
  }, []);

  const [file, setFile] = useState(null);
  const formData = new FormData();
  formData.append("file", file);
  formData.append("title", "my-resume");

  const [uploadLoading, setUploadLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleUpload = async () => {
    setUploadLoading(true);
    const res = await resumeUpload(formData);

    if (res) {
      getResume();
      setFile(null);
      setUploadLoading(false);
    }
  };

  return (
    <div className="bg-[#020617]">
      <div className="text-white px-10 justify-between mt-5 min-h-[80vh]">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-black">Dashboard</h1>
            <h1 className="text-[#94A3B8]">
              Welcome back, monitor your career opportunities.
            </h1>
          </div>
          <div>
            <input
              type="file"
              id="fileInput"
              ref={fileInputRef}
              hidden
              accept=".pdf"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const selectedFile = e.target.files[0];
                if (selectedFile) {
                  setFile(selectedFile);
                }
              }}
            />
            {/* <label htmlFor="fileInput"> */}
            <Button
              text="Upload New Resume"
              textSize="sm"
              svg
              isReverse
              SvgElem={<UploadWhite />}
              handleClick={() => fileInputRef.current.click()}
            />
            {/* </label> */}
            {file && (
              <div className="fixed inset-0 backdrop-blur-2xl bg-black/40 z-50 flex items-center justify-center">
                <div className="relative">
                  {/* Cancel Button */}
                  <div className="absolute -top-10 right-0">
                    <Button
                      text="Cancel"
                      handleClick={() => setFile(null)}
                      svg
                      SvgElem={<Delete />}
                      cancel
                    />
                  </div>

                  <ResumePreview url={URL.createObjectURL(file)} />

                  <Button
                    text={`Upload ${file.name}`}
                    fromRes
                    textSize="sm"
                    handleClick={handleUpload}
                    loading={uploadLoading}
                  />

                  <p className="mt-2">
                    Selected: <strong>{file.name}</strong>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10">
          <DashCard
            title="TOTAL RESUMES"
            number={resumes.length ? resumes.length : 0}
            icon={<Resume />}
          />
        </div>

        <h1 className="text-lg font-bold mb-5 mt-10">Your Resumes</h1>
        <div className="mt-10 flex flex-wrap gap-5 mb-10">
          {loading ? (
            <div className="flex gap-5 flex-wrap">
              <ResumeSkeleton />
              <ResumeSkeleton />
              <ResumeSkeleton />
              <div onClick={() => fileInputRef.current.click()}>
                <NewResumeCard />
              </div>
            </div>
          ) : resumes.length > 0 ? (
            <div className="flex gap-5 flex-wrap">
              {resumes.map((res) => (
                <ResumeCard url={res.url} id={res.id} />
              ))}
              <div onClick={() => fileInputRef.current.click()}>
                <NewResumeCard />
              </div>
            </div>
          ) : (
            <div>
              <div onClick={() => fileInputRef.current.click()}>
                <NewResumeCard />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default page;

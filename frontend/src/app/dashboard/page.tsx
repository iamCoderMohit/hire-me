"use client"

import Button from "@/components/Button"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Resume, UploadWhite } from "../Icons/Svg"
import DashCard from "@/components/DashCard"
import NewResumeCard from "@/components/NewResumeCard"
import { useResume } from "@/hooks/useResume"
import { useEffect } from "react"

function page() {
    const {getResume, loading, resumes} = useResume()

    useEffect(() => {
        getResume()
    }, [])

    console.log(resumes)
  return (
    <div className="bg-[#020617]">
        <Navbar />
        <div className="text-white px-10 justify-between h-[70vh] mt-5">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-3xl font-black">Dashboard</h1>
                    <h1 className="text-[#94A3B8]">Welcome back, monitor your career opportunities.</h1>
                </div>
                <div>
                    <Button text="Upload New Resume" textSize="sm" svg isReverse SvgElem={<UploadWhite />} />
                </div>
            </div>

            <div className="mt-10">
                <DashCard title="TOTAL RESUMES" number={1} icon={<Resume />} />
            </div>

            <div className="mt-10">
                <h1 className="text-lg font-bold mb-5">Your Resumes</h1>
                <NewResumeCard />
            </div>

        </div>
        <Footer />
    </div>
  )
}

export default page
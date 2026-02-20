"use client"

import Footer from '@/components/Footer'
import JobCard from '@/components/JobCard'
import JobCardSkeleton from '@/components/JobCardSkeleton'
import Navbar from '@/components/Navbar'
import { useJobs } from '@/hooks/useJobs'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

function page() {
  const {getJobs, loading, jobs} = useJobs()
  const params = useParams()
  const id = params.id
  useEffect(() => {
    getJobs(id as string)
  }, [])

  return (
    <div>
            <div className='text-white p-5 min-h-[70vh]'>
                <h1 className='text-2xl font-black'>Top Matches for Your Resume</h1>

                <div className='mt-10'>
                  {loading ? 
                  <div className='flex gap-5 flex-col'>
                    <JobCardSkeleton />
                    <JobCardSkeleton />
                    <JobCardSkeleton />
                  </div>
                    :
                    jobs.length > 0 ?
                    <div className='flex gap-5 flex-col'>
                      {jobs.map((job) => (
                        <JobCard title={job.title} description={job.description} company={job.company} location={job.location} postedAt={job.created_at} redirect_url={job.redirect_url ? job.redirect_url : null} similarity={job.similarity}  />
                      ))}
                    </div>
                    :
                    <h1>No jobs found for your resume</h1>
                }
                </div>
            </div>
    </div>
  )
}

export default page
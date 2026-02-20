"use client"

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { GoogleLogo } from '../Icons/Svg'
import { signin } from '@/lib/api/signin'

function page() {
  return (
    <div className="bg-[#020617]">
        <div className='text-white h-[70vh] flex flex-col justify-center items-center gap-5'>
            <h1 className='text-3xl font-bold'>Unlock your potential</h1>
            <h1 className="text-[#94A3B8]">AI-powered job matching for students & freshers.</h1>

            <div className='bg-[#131022] p-5 outline-1 outline-white/20 w-fit rounded-md flex flex-col justify-center items-center gap-10 px-10 py-10'
            >
                <button className='flex items-center gap-3 bg-white text-black px-3 py-2 rounded-md cursor-pointer font-bold'
                onClick={signin}
                >
                    <GoogleLogo />
                    <h1>Continue with Google</h1>
                </button>
                <h1 className='text-[#94A3B8]'>SECURE ECOSYSTEM</h1>
                <div>
                    <h1 className='text-[#94A3B8] text-center'>We don't post jobs randomly.</h1>
                    <h1 className='text-[#4B2BEE] text-center'>We match you intelligently.</h1>
                </div>
            </div>
            <h1 className='text-[#94A3B8] tracking-widest text-sm'>EXPLORE MORE THAN 1000 COMPANIES.</h1>
        </div>
    </div>
  )
}

export default page
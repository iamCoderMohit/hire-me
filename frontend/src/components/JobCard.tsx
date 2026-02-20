import { Info, Job1, Job2, Job3, Location } from "@/app/Icons/Svg";
import Button from "./Button";
import { timeAgo } from "@/lib/timeAgo";

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
    const randomNum = Math.floor(Math.random() * 3)
    const Icon = icons[arr[randomNum]]
  return (
    <div className=" outline outline-[#4B2BEE]/30 p-5 rounded-md flex flex-col gap-5">
        <div className="flex justify-between">
            <div className="flex gap-3">
                <div className="bg-[#1E293B] w-fit p-3 outline outline-white/30 rounded-md">
                    <Icon />
                </div>
                <div className="">
                    <div>
                        <h1 className="text-lg font-bold">{title}</h1>
                    </div>
                    <div className="flex items-center gap-1">
                        <h1>{company} • </h1>
                        <Location />
                        <h1 className="text-[#94A3B8]">{location}</h1>
                    </div>
                </div>
            </div>

            <h1 className="bg-[#4B2BEE]/30 h-fit px-4 py-1 rounded-full text-[#4B2BEE] text-sm font-bold outline outline-white/30">{Math.floor(similarity * 100)}% Match</h1>
        </div>

        <div>
            <h1 className="text-md text-[#94A3B8]">{description}</h1>
        </div>

        <div className="w-full h-[1px] bg-white/30 "></div>

        <div className="flex justify-between items-center">
            <h1 className="text-sm text-[#94A3B8]">Posted {timeAgo(postedAt)}</h1>
            {redirect_url && <a href={redirect_url}><Button text="Apply Now" /></a>}
        </div>

        {!redirect_url && 
        <div className=" rounded-md p-1 flex items-center gap-2 bg-transparent">
            <Info />
            <h1 className="text-sm">Direct apply link is not available for this job, you can check {company}'s official hiring page.</h1>
        </div>
        }
    </div>
  )
}

export default JobCard
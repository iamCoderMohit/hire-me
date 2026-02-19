import { Plus } from "@/app/Icons/Svg"

function NewResumeCard() {
  return (
    <div className="w-fit border-dashed border-2 border-white/20 rounded-md p-8 flex flex-col items-center justify-center gap-5 cursor-pointer">
        <div className="bg-[#4B2BEE]/10 rounded-full p-4 w-fit">
            <Plus />
        </div>
        <div className="text-[#94A3B8]">
            <h1 className="font-bold text-center">Add New Resume</h1>
            <h1 className="text-sm text-center">PDF or Word files up to 5MB</h1>
        </div>
    </div>
  )
}

export default NewResumeCard
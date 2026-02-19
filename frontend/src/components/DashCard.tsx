interface Input {
    title: string;
    icon: React.ReactElement;
    number: number
}

function DashCard({title, icon, number}: Input) {
  return (
    <div className="bg-[#4B2BEE]/10 p-5 rounded-md outline outline-white/30 flex flex-col w-fit gap-5">
        <div className="flex gap-5 items-center">
            <h1 className="text-[#94A3B8] text-sm tracking-widest">{title}</h1>
            <div className="rounded-full p-2 bg-[#4B2BEE]/10 w-fit ">
                {icon}
            </div>
        </div>
        <h1 className="text-2xl font-black">{number}</h1>
    </div>
  )
}

export default DashCard
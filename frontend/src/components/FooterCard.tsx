interface Input {
    title: string;
    opt: string[]
}

function FooterCard({title, opt}: Input) {
  return (
    <div className="text-white flex flex-col gap-5">
        <h1 className="font-bold">{title}</h1>
        <div className="flex gap-5 flex-col">
            {opt.map((op, i) => (
                <h1 className="text-[#94A3B8] cursor-pointer" key={i}>{op}</h1>
            ))}
        </div>
    </div>
  )
}

export default FooterCard
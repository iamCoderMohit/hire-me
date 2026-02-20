import { AIIcon, Brain, Check, GoalIcon, StudyIcon, Upload } from "@/app/Icons/Svg";

interface Input {
  title: string;
  desc: string;
  icon: string;
  isHow?: boolean
}

interface IconMap {
  [key: string]: () => React.ReactElement;
}

function WhyCard({ title, desc, icon, isHow }: Input) {
  const iconMap: IconMap = {
    "ai": AIIcon,
    "goal": GoalIcon,
    "study": StudyIcon,
    "upload": Upload,
    "brain": Brain,
    "check": Check
  };

const Icon = iconMap[icon];
  return (
    <div className={`${!isHow && "bg-[#0F172A]/50"} p-5 ${"rounded-md"} flex flex-col gap-5 ${isHow && "justify-center items-center" }   ${!isHow && "outline-1 outline-white/30"} w-90`}>
      <div className={`bg-[#4B2BEE]/20 w-fit ${isHow ? "rounded-full p-7" :"rounded-md p-3"}`}><Icon /></div>
      <h1 className="text-lg font-bold">{title}</h1>
      <h1 className={`text-[#94A3B8] ${isHow && "text-center"}`}>{desc}</h1>
    </div>
  );
}

export default WhyCard;

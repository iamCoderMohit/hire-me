import { footerData } from "@/app/data/data";
import { Logo } from "@/app/Icons/Svg";
import FooterCard from "./FooterCard";

function Footer() {
  return (
    <>
    <div className="flex p-10 outline-1 outline-white/30">
      <div className="w-1/4">
        <div className="font-bold text-white flex items-center gap-3 cursor-pointer">
          <div className="bg-[#4B2BEE] rounded-md p-2">
            <Logo />
          </div>
          <span>Hire-me</span>
        </div>
        <h1 className="text-[#94A3B8] mt-5">
          Empowering the next generation of talent through advanced semantic AI
          matching.
        </h1>
      </div>

      <div className="flex w-3/4 justify-around">
        {footerData.map((card, i) => (
          <FooterCard title={card.title} opt={card.opt} key={i} />
        ))}
      </div>
    </div>
    <h1 className="text-[#94A3B8] p-5">© 2026 Hire-me. All rights reserved.</h1>
    </>
  );
}

export default Footer;

import { ReactNode } from "react";

interface Inputs {
  text: string;
  svg?: boolean;
  textSize?:  textOptions;
  big?: boolean;
  noBg?: boolean;
  cta?: boolean;
  isReverse?: boolean;
  SvgElem?: ReactNode
}

type textOptions = "sm" | "lg"

function Button({ text, svg, textSize, big, noBg, cta, isReverse, SvgElem }: Inputs) {
  return (
    <div className={`${cta ? "text-black" : "text-white"} ${!noBg && "bg-[#4B2BEE]"} ${cta && "bg-white"} px-5 py-1 rounded-md cursor-pointer flex items-center justify-center gap-2 text-${textSize} ${big && "py-3"} ${noBg && "outline-1 outline-white/20 w-fit"} ${isReverse && "flex-row-reverse"}`}>
      <span >{text}</span>
      {svg && 
        SvgElem
      }
    </div>
  );
}

export default Button;

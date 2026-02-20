"use client";

import { ReactNode, useState } from "react";

interface Inputs {
  text: string;
  svg?: boolean;
  textSize?: textOptions;
  big?: boolean;
  noBg?: boolean;
  cta?: boolean;
  isReverse?: boolean;
  SvgElem?: ReactNode;
  fromRes?: boolean;
  cancel?: boolean;
  loading?: boolean

  handleClick?: any;
  closeDialog?: any;
  setCloseStateVar?: any;
}

type textOptions = "sm" | "lg";

function Button({
  text,
  svg,
  textSize,
  big,
  noBg,
  cta,
  isReverse,
  SvgElem,
  fromRes,
  handleClick,
  closeDialog,
  setCloseStateVar,
  cancel,
  loading
}: Inputs) {
  return (
    <button
    disabled={loading}
      className={`${cta ? "text-black" : "text-white"} ${!noBg && "bg-[#4B2BEE]"} hover:bg-[#4B2BEE]/70 ${cta && "bg-white"} px-5 py-1 ${fromRes ? "rounded-b-md w-[250px]" : "rounded-md"} cursor-pointer flex items-center justify-center gap-2 text-${textSize} ${big && "py-3"} ${noBg && "outline-1 outline-white/20  transition-all duration-300 ease-in-out"} ${isReverse && "flex-row-reverse"} ${cancel && "bg-red-600"} ${loading && "bg-[#4B2BEE]/10 cursor-not-allowed opacity-60 cursor-"}`}
      onClick={async () => {
        await handleClick();
        setCloseStateVar(null);
      }}
    >
      <span>{loading ? "uploading..." : text}</span>
      {svg && SvgElem}
    </button>
  );
}

export default Button;

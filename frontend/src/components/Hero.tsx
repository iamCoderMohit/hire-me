"use client"

import Button from "./Button";
import Companies from "./Companies";
import { AIIcon, Arrow, GoalIcon, StudyIcon } from "@/app/Icons/Svg";
import WhyCard from "./WhyCard";
import { howCard, whyCard } from "@/app/data/data";
import Cta from "./Cta";
import Footer from "./Footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

function Hero() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      async function getUser() {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        setUser(user);
      }
  
      getUser();
    }, []);
  return (
    <div className=" text-white">
<div className="flex justify-center flex-col items-center min-h-[70vh] h-auto gap-5 px-4 sm:px-8 py-10 text-center">
        <div className="flex items-center gap-2 bg-[#4B2BEE]/10 w-fit px-5 rounded-full outline-1 outline-[#4B2BEE]/20 stroke-[#4B2BEE]/20">
          <AIIcon />
          <span className="text-sm text-[#4B2BEE] font-bold">
            NEXT-GEN JOB SEARCH
          </span>
        </div>

        <div className="flex flex-col items-center justify-center text-3xl sm:text-4xl md:text-5xl font-black text-[#94A3B8]">
          <span>Don't search for jobs.</span>
          <span>Let AI find the right ones for you.</span>
        </div>

        <div className="flex flex-col max-w-md sm:max-w-xl">
          <span className="text-[#94A3B8] text-sm sm:text-base text-center">
            Upload your resume and let our AI match you with the best internships and early-career roles based on semantic similarity.
          </span>
        </div>

        <div className="flex gap-3 justify-center w-full">
          <Link href={user ? "/dashboard" : "/signin"} className="">
            <Button text="Get Started for Free" SvgElem={<Arrow />} svg textSize="sm" big />
          </Link>
          <a href="#how" className="">
            <Button text="How it works" textSize="sm" big noBg />
          </a>
        </div>
      </div>
      <Companies />
      <div className="pl-5 mt-10">
        <h1 className="text-3xl font-bold mb-5">Why Hire-me?</h1>
        <span className="text-[#94A3B8]">
          Our platform is designed to bridge the gap between education and
          career using advanced AI.
        </span>
      </div>
      <div className="flex gap-5 p-5 mt-5 flex-wrap justify-around">
        {whyCard.map((card, i) => (
          <WhyCard title={card.title} desc={card.desc} icon={card.icon} key={i} />
        ))}
      </div>

      <div className="pl-5 mt-25" id="how">
        <h1 className="text-3xl font-bold mb-5 text-center">How it Works</h1>
        <h1 className="text-[#94A3B8] text-center">
          Land you dream Job / Internship in three simple steps.
        </h1>
      </div>
      <div className="flex gap-5 p-5 mt-5 flex-wrap justify-around">
        {howCard.map((card) => (
          <WhyCard isHow title={card.title} desc={card.desc} icon={card.icon} />
        ))}
      </div>
      <div className="md:p-20 mb-10">
        <Cta />
      </div>
    </div>
  );
}

export default Hero;

"use client";

import { Arrow, Logo } from "@/app/Icons/Svg";
import Button from "./Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
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

  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/signin");
    router.refresh();
  };

  const pathName = usePathname();
  return (
    <div className="flex justify-around items-center pt-5 pb-5 w-full backdrop-blur-2xl bg-[#020617]">
      <Link
        href={"/"}
        className={`font-bold flex items-center gap-3 cursor-pointer ${
          pathName === "/" ? "text-blue-600 font-bold" : "text-white"
        }`}
      >
        <div className="bg-[#4B2BEE] rounded-md p-2">
          <Logo />
        </div>
        <span>Hire-me</span>
      </Link>
      <div className="flex gap-5 text-sm text-[#94A3B8]">
        <Link
          href={"/dashboard"}
          className={`${
            pathName === "/dashboard" && "text-blue-600 font-bold"
          }`}
        >
          Dashboard
        </Link>
        <Link
          href={"/jobs"}
          className={`${
            pathName === "/jobs" || pathName.startsWith("/jobs/")
              ? "text-blue-600 font-bold"
              : "text-[#94A3B8]"
          }`}
        >
          Jobs
        </Link>
        <Link
          href={"/github"}
          className={`${
            pathName === "/github"
              ? "text-blue-600 font-bold"
              : "text-[#94A3B8]"
          }`}
        >
          Github
        </Link>
        
      </div>
      {!user ? (
        <div className="flex gap-5 text-sm items-center">
          <Link href={"/signin"} className="text-[#94A3B8]">
            Log in
          </Link>
          <Link href={"/signin"}>
            <Button text="Sign up" />
          </Link>
        </div>
      ) : (
        <button className="text-red-600 cursor-pointer" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
}

export default Navbar;

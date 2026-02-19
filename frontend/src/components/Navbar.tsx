import { Arrow, Logo } from "@/app/Icons/Svg"
import Button from "./Button"
import Link from "next/link"

function Navbar() {
  return (
    <div className="flex justify-around items-center pt-5 pb-5 w-full backdrop-blur-2xl bg-[#020617]">
        <Link href={"/"} className="font-bold text-white flex items-center gap-3 cursor-pointer">
          <div className="bg-[#4B2BEE] rounded-md p-2">
            <Logo />
          </div>
          <span>Hire-me</span>
        </Link>
        <div className="flex gap-5 text-sm text-[#94A3B8]">
            <button>Find Jobs</button>
            <Link href={"/dashboard"}>Dashboard</Link>
            <button>Find Jobs</button>
        </div>
        <div className="flex gap-5 text-sm items-center">
            <Link href={"/signin"} className="text-[#94A3B8]">Log in</Link>
            <Link href={"/signin"}>
              <Button text="Sign up" />
            </Link>
        </div>
    </div>
  )
}

export default Navbar
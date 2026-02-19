import Link from "next/link";
import Button from "./Button";

function Cta() {
  return (
    <div className="bg-[#4B2BEE] p-10 rounded-2xl flex flex-col gap-5">
      <h1 className="text-4xl font-black text-center">Ready to jumpstart your carrer?</h1>
      <h1 className="text-[#94A3B8] text-lg text-center mt-5">
        Join thousands of students using Hire-me to find their first
        professional role. No more endless applications, just perfect matches.
      </h1>
      <div className="flex justify-center gap-5">
      <Link href={"/signin"}><Button text="Create Your Account" big cta /></Link>
      <Link href={"/signin"}><Button text="View Job Board" big noBg /></Link>
      </div>
    </div>
  );
}

export default Cta;

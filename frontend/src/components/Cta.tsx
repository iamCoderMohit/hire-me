import Link from "next/link";
import Button from "./Button";

function Cta() {
  return (
<div className="bg-[#4B2BEE] p-6 sm:p-10 rounded-2xl flex flex-col gap-5 mx-4 sm:mx-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-center">Ready to jumpstart your carrer?</h1>
      <h1 className="text-[#94A3B8] text-base sm:text-lg text-center mt-3 sm:mt-5 max-w-xl mx-auto">
        Join thousands of students using Hire-me to find their first
        professional role. No more endless applications, just perfect matches.
      </h1>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5">
        <Link href={"/signin"} className=" sm:w-auto">
          <Button text="Create Your Account" big cta />
        </Link>
        <Link href={"/signin"} className="sm:w-auto">
          <Button text="View Job Board" big noBg />
        </Link>
      </div>
    </div>
  );
}

export default Cta;

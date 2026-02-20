"use client";

import { Logo } from "@/app/Icons/Svg";
import Button from "./Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
  const [user, setUser] = useState(null);
useEffect(() => {
  const getInitialUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user);
  };

  getInitialUser();

  const { data: listener } = supabase.auth.onAuthStateChange(
    (event, session) => {
      setUser(session?.user ?? null);
    }
  );

  return () => {
    listener.subscription.unsubscribe();
  };
}, []);

  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/signin");
    router.refresh();
  };

  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/jobs", label: "Jobs" },
    { href: "/github", label: "Github" },
  ];

  const isActive = (href: string) =>
    pathName === href || (href !== "/" && pathName.startsWith(href + "/"));
  return (
     <nav className="w-full backdrop-blur-2xl bg-[#020617] relative z-50">
      {/* Main bar */}
      <div className="flex justify-between items-center px-4 sm:px-8 pt-5 pb-5 w-full">
        {/* Logo */}
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

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-5 text-sm text-[#94A3B8]">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={isActive(href) ? "text-blue-600 font-bold" : "text-[#94A3B8]"}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop auth */}
        <div className="hidden md:flex gap-5 text-sm items-center">
          {!user ? (
            <>
              <Link href={"/signin"} className="text-[#94A3B8]">
                Log in
              </Link>
              <Link href={"/signin"}>
                <Button text="Sign up" />
              </Link>
            </>
          ) : (
            <button className="text-red-600 cursor-pointer" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>

        {/* Hamburger button (mobile/tablet) */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile/Tablet dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 pb-5 gap-4 text-sm text-[#94A3B8] border-t border-white/10 pt-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={isActive(href) ? "text-blue-600 font-bold" : "text-[#94A3B8]"}
            >
              {label}
            </Link>
          ))}

          <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
            {!user ? (
              <>
                <Link
                  href={"/signin"}
                  className="text-[#94A3B8]"
                  onClick={() => setMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link href={"/signin"} onClick={() => setMenuOpen(false)}>
                  <Button text="Sign up" />
                </Link>
              </>
            ) : (
              <button
                className="text-red-600 cursor-pointer text-left"
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

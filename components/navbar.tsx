"use client";

import Image from "next/image";
import { FloatingNav } from "./ui/floating-navbar";
import Link from "next/link";
import { Button } from "./ui/moving-border";

type Props = {};
export const Navbar = ({}: Props) => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "Committee",
      link: "/committee",
    },
    {
      name: "Timeline",
      link: "/#timeline",
    },
    {
      name: "Awards",
      link: "/#awards",
    },
    {
      name: "Rules",
      link: "/#rules",
    },
    {
      name: "Sponsors",
      link: "/#sponsors",
    },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];
  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between w-11/12 fixed top-4 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-2 space-x-4">
        <Image
          src="/UoJCodersV3.0.png"
          width={600}
          height={100}
          alt="logo"
          className="w-28 h-auto"
        />
        <div className="w-3/4 mx-auto flex items-center justify-center gap-x-6">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={"text-neutral-50 hover:text-neutral-300"}>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
        </div>
        <Button
          className="bg-neutral-900 text-white rounded-full"
          containerClassName="h-10 w-28">
          Register
        </Button>
      </div>
    </div>
  );
};

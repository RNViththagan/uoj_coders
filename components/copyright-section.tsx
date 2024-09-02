"use client";

import { AtSign } from "lucide-react";
import Link from "next/link";

const CopyrightSection = () => {
  return (
    <div className="w-full h-20 lg:h-10 bg-zinc-900 text-zinc-200">
      <div className="mx-auto w-11/12 h-full flex flex-col items-center justify-center gap-y-2 lg:flex-row lg:gap-y-0 lg:justify-between">
        <p className="text-sm 2xl:text-base text-center">
          &copy; 2024{" "}
          <Link
            href={"https://society.jfn.ac.lk/compsoc/"}
            className="underline tracking-wide">
            Computer Society
          </Link>
          , Department of Computer Science, UoJ. All Rights Reserved.
        </p>
        <p className="text-sm 2xl:text-base">
          Developed By{" "}
          <Link
            href={"https://www.linkedin.com/in/chamod-rashmika/"}
            target="_blank"
            className="underline tracking-wide">
            Chamod Rashmika
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CopyrightSection;

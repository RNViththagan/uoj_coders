"use client";

import { AtSign } from "lucide-react";
import Link from "next/link";

const CopyrightSection = () => {
  return (
    <div className="w-full h-16 lg:h-10 bg-zinc-900 text-zinc-200">
      <div className="mx-auto w-11/12 h-10 flex items-center justify-center gap-y-2 lg:gap-y-0 lg:justify-between">
        <div className="flex items-center gap-x-2">
          <AtSign size={16} />
          <p className="text-sm">
            2024{" "}
            <Link
              href={"https://society.jfn.ac.lk/compsoc/"}
              className="underline tracking-wide">
              Computer Society
            </Link>
            , Department of Computer Science, UoJ. All Rights Reserved.
          </p>
        </div>
        <p className="text-sm">
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

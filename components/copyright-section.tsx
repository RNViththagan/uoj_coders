"use client";

import { AtSign } from "lucide-react";
import Link from "next/link";

const CopyrightSection = () => {
  return (
    <div className="w-full h-10 flex items-center justify-center gap-x-5 bg-zinc-900 text-zinc-200">
      <AtSign size={16} />
      <p className="text-sm">
        2024{" "}
        <Link href={"https://society.jfn.ac.lk/compsoc/"} className="underline">
          Computer Society
        </Link>
        , Department of Computer Science, UoJ. All Rights Reserved.
      </p>
    </div>
  );
};

export default CopyrightSection;

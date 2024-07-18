"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

import { timelineSteps } from "@/data/timeline";
import {
  UserPen,
  UserRoundX,
  UserRoundMinus,
  Rocket,
  Trophy,
} from "lucide-react";

export function TimelineSection() {
  return (
    <div className="bg-neutral-950 w-full py-10">
      <h1 className="font-varino text-4xl text-center font-bold text-white mb-16 uppercase tracking-widest">
        Timeline
      </h1>
      <TracingBeam className="px-6 bg-neutral-950">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {timelineSteps.map((item, index) => (
            <div
              key={`content-${index}`}
              className={`mb-10 py-5 flex items-center gap-x-7 ${
                index % 2 === 0 && "flex-row-reverse"
              }`}>
              <div className="bg-gradient-to-bl from-[#18CCFC] via-[#6344F5] to-[#AE48FF] rounded-full p-3 text-white">
                {item.badge === "UserPen" ? (
                  <UserPen size={24} />
                ) : item.badge === "UserRoundX" ? (
                  <UserRoundX size={24} />
                ) : item.badge === "UserRoundMinus" ? (
                  <UserRoundMinus size={24} />
                ) : item.badge === "Rocket" ? (
                  <Rocket size={24} />
                ) : item.badge === "Trophy" ? (
                  <Trophy size={24} />
                ) : null}
              </div>
              <div className="flex flex-col gap-y-1 items-start justify-center">
                <h2 className="text-white text-lg font-semibold w-fit">
                  {item.title}
                </h2>
                <p className={"text-base text-slate-200"}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

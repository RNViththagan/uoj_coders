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
        <div className="pt-16 grid grid-rows-5 gap-12 max-w-xl mx-auto antialiased relative">
          {timelineSteps.map((item, index) => (
            <div
              key={`content-${index}`}
              className={`w-full h-full row-start-${index + 1} flex ${
                index % 2 !== 0 ? `justify-end` : ``
              }`}>
              <div
                className={`w-80 py-5 flex items-center gap-x-10 ${
                  index % 2 === 0 ? `flex-row-reverse` : `flex-row`
                }`}>
                <div className="bg-gradient-to-bl from-[#18CCFC] via-[#6344F5] to-[#AE48FF] rounded-full p-4 text-neutral-300">
                  {item.badge === "UserPen" ? (
                    <UserPen size={30} />
                  ) : item.badge === "UserRoundX" ? (
                    <UserRoundX size={30} />
                  ) : item.badge === "UserRoundMinus" ? (
                    <UserRoundMinus size={30} />
                  ) : item.badge === "Rocket" ? (
                    <Rocket size={30} />
                  ) : item.badge === "Trophy" ? (
                    <Trophy size={30} />
                  ) : null}
                </div>
                <div className="flex flex-col gap-y-1 items-start justify-center">
                  <h2 className="text-white text-xl font-semibold w-fit tracking-wider">
                    {item.title}
                  </h2>
                  <p className={"text-lg text-slate-200"}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

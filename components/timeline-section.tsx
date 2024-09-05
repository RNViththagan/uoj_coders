"use client";

import React from "react";
import {
  UserPen,
  UserRoundX,
  UserRoundMinus,
  Rocket,
  Trophy,
} from "lucide-react";
import { Timeline } from "./ui/timeline";

export function TimelineSection() {
  return (
    <div className="bg-neutral-950 w-full py-10" id="timeline">
      <h1 className="font-varino text-xl lg:text-4xl text-center font-bold text-white mb-16 uppercase tracking-widest">
        Timeline
      </h1>
      <div className="w-11/12 lg:w-3/4 mx-auto">
        <Timeline data={timelineSteps} />
      </div>
    </div>
  );
}

const timelineSteps = [
  {
    title: "August 12, 2024",
    content: (
      <div className="w-64 lg:w-96 py-5 flex flex-col gap-y-1 items-start justify-center pb-10">
        <h2 className="text-white text-lg lg:text-xl font-semibold w-fit tracking-wider">
          Registration Opens
        </h2>
        <div className="w-full h-52 rounded-lg flex items-center justify-center text-white bg-gradient-to-bl from-[#18CCFC] via-[#6344F5] to-[#AE48FF]">
          <UserPen size={60} />
        </div>
        <p className="text-base lg:text-lg text-slate-200">
          Registers opening for all participants.
        </p>
      </div>
    ),
  },
  {
    title: "August 28, 2024",
    content: (
      <div className="w-64 lg:w-96 py-5 flex flex-col gap-y-1 items-start justify-center pb-10">
        <h2 className="text-white text-lg lg:text-xl font-semibold w-fit tracking-wider">
          Registration Closes
        </h2>
        <div className="w-full h-52 rounded-lg flex items-center justify-center text-white bg-gradient-to-bl from-[#FF6B6B] via-[#FF8E53] to-[#FFA69E]">
          <UserRoundX size={60} />
        </div>
        <p className="text-base lg:text-lg text-slate-200">
          Last day to register for the competition.
        </p>
      </div>
    ),
  },
  {
    title: "September 1, 2024",
    content: (
      <div className="w-64 lg:w-96 py-5 flex flex-col gap-y-1 items-start justify-center pb-10">
        <h2 className="text-white text-lg lg:text-xl font-semibold w-fit tracking-wider">
          Elimination Round
        </h2>
        <div className="w-full h-52 rounded-lg flex items-center justify-center text-white bg-gradient-to-bl from-[#FF8EFC] via-[#8E44FF] to-[#348F50]">
          <UserRoundMinus size={60} />
        </div>
        <p className="text-base lg:text-lg text-slate-200">
          This round will be conducted online.
        </p>
      </div>
    ),
  },
  {
    title: "September 14, 2024",
    content: (
      <div className="w-64 lg:w-96 py-5 flex flex-col gap-y-1 items-start justify-center pb-10">
        <h2 className="text-white text-lg lg:text-xl font-semibold w-fit tracking-wider">
          Final Round
        </h2>
        <div className="w-full h-52 rounded-lg flex items-center justify-center text-white bg-gradient-to-bl from-[#FF6FD8] via-[#FF70FF] to-[#FF43AD]">
          <Rocket size={60} />
        </div>
        <p className="text-base lg:text-lg text-slate-200">
          Participants are expected to be present at the venue of the
          competition.
        </p>
      </div>
    ),
  },
  {
    title: "September 15, 2024",
    content: (
      <div className="w-64 lg:w-96 py-5 flex flex-col gap-y-1 items-start justify-center pb-10">
        <h2 className="text-white text-lg lg:text-xl font-semibold w-fit tracking-wider">
          Award Ceremony
        </h2>
        <div className="w-full h-52 rounded-lg flex items-center justify-center text-white bg-gradient-to-bl from-[#FFC837] via-[#FF8008] to-[#FF4500]">
          <Trophy size={60} />
        </div>
        <p className="text-base lg:text-lg text-slate-200">
          Celebrate the winners and participants.
        </p>
      </div>
    ),
  },
];

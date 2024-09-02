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
      <div className="container lg:w-3/4 mx-auto">
        <Timeline data={timelineSteps} />
      </div>
    </div>
  );
}

const timelineSteps = [
  {
    title: "August 12, 2024",
    content: (
      <div className="w-96 py-5 flex items-center gap-x-10 flex-row">
        <div className="bg-white rounded-full p-4 text-neutral-900">
          <UserPen size={30} />
        </div>
        <div className="flex flex-col gap-y-1 items-start justify-center">
          <h2 className="text-white text-lg lg:text-xl font-semibold w-fit tracking-wider">
            Registration Opens
          </h2>
          <p className="text-base lg:text-lg text-slate-200">
            Registers opening for all participants.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "August 28, 2024",
    content: (
      <div className="w-96 py-5 flex items-center gap-x-10 flex-row">
        <div className="bg-white rounded-full p-4 text-neutral-900">
          <UserRoundX size={30} />
        </div>
        <div className="flex flex-col gap-y-1 items-start justify-center">
          <h2 className="text-white text-lg lg:text-xl font-semibold w-fit tracking-wider">
            Registration Closes
          </h2>
          <p className="text-base lg:text-lg text-slate-200">
            Last day to register for the competition.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "September 1, 2024",
    content: (
      <div className="w-96 py-5 flex items-center gap-x-10 flex-row">
        <div className="bg-white rounded-full p-4 text-neutral-900">
          <UserRoundMinus size={30} />
        </div>
        <div className="flex flex-col gap-y-1 items-start justify-center">
          <h2 className="text-white text-lg lg:text-xl font-semibold w-fit tracking-wider">
            Elimination Round
          </h2>
          <p className="text-base lg:text-lg text-slate-200">
            This round will be conducted online.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "September 14, 2024",
    content: (
      <div className="w-96 py-5 flex items-center gap-x-10 flex-row">
        <div className="bg-white rounded-full p-4 text-neutral-900">
          <Rocket size={30} />
        </div>
        <div className="flex flex-col gap-y-1 items-start justify-center">
          <h2 className="text-white text-lg lg:text-xl font-semibold w-fit tracking-wider">
            Final Round
          </h2>
          <p className="text-base lg:text-lg text-slate-200">
            Participants are expected to be present at the venue of the
            competition.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "September 15, 2024",
    content: (
      <div className="w-96 py-5 flex items-center gap-x-10 flex-row">
        <div className="bg-white rounded-full p-4 text-neutral-900">
          <Trophy size={30} />
        </div>
        <div className="flex flex-col gap-y-1 items-start justify-center">
          <h2 className="text-white text-lg lg:text-xl font-semibold w-fit tracking-wider">
            Award Ceremony
          </h2>
          <p className="text-base lg:text-lg text-slate-200">
            Celebrate the winners and participants.
          </p>
        </div>
      </div>
    ),
  },
];

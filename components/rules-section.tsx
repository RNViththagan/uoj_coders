"use client";

import { Separator } from "./ui/separator";

const RulesSection = () => {
  return (
    <div
      className="bg-neutral-950 w-full relative py-12 overflow-hidden"
      id="rules">
      <h1 className="font-varino text-xl lg:text-4xl text-center font-bold text-white uppercase tracking-widest">
        Guidlines
      </h1>
      <ul className="pt-10 w-10/12 lg:w-8/12 h-auto mx-auto 2xl:text-lg flex flex-col gap-y-5 text-white list-disc text-justify">
        <li>
          The elimination round will be held on the 26th of September 2024.
        </li>
        <Separator className="bg-zinc-600" />
        <li>
          The selection of teams for the final round will be purely based on the
          scores obtained in the elimination round. A maximum of five teams will
          be selected from each institution.
        </li>
        <Separator className="bg-zinc-600" />
        <li>Only 20 teams will be selected for the final round.</li>
        <Separator className="bg-zinc-600" />
        <li>
          Team members must solve the problems without any assistance from other
          people, pre-written code, or AI tools. Plagiarized teams will be
          disqualified.
        </li>
        <Separator className="bg-zinc-600" />
        <li>
          All final decisions will be made by the Computer Society (CompSoc),
          Department of Computer Science, University of Jaffna.
        </li>
      </ul>
    </div>
  );
};

export default RulesSection;

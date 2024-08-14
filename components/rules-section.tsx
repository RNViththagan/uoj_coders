"use client";

import { Separator } from "./ui/separator";

const RulesSection = () => {
  return (
    <div
      className="bg-neutral-950 w-full relative py-12 overflow-hidden"
      id="rules">
      <h1 className="font-varino text-4xl text-center font-bold text-white uppercase tracking-widest">
        Rules & Regulations
      </h1>
      <ul className="pt-10 w-8/12 h-auto mx-auto flex flex-col gap-y-5 text-white list-disc">
        <li>
          Elimination round will be held on 27th of March 2020 from 6.00pm to
          9.30pm via online.
        </li>
        <Separator className="bg-zinc-600" />
        <li>
          Selection of the teams for the final round is purely based on the
          score obtained by teams in the elimination round. At most five teams
          would be selected from each institution.
        </li>
        <Separator className="bg-zinc-600" />
        <li>Only 25 teams will be selected for the final round.</li>
        <Separator className="bg-zinc-600" />
        <li>
          Team members must solve the problems without any assistance from other
          people or pre-written code.
        </li>
        <Separator className="bg-zinc-600" />
        <li>
          Each and every final decision will be taken by Computer Society
          (CompSoc), Department of Computer Science, University of Jaffna.{" "}
        </li>
      </ul>
    </div>
  );
};

export default RulesSection;

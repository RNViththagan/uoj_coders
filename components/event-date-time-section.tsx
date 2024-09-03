"use client";

import { MapPin, MapPinned } from "lucide-react";
import { CalendarFold } from "lucide-react";
import { Clock5 } from "lucide-react";

type Props = {};
export const EventDateTimeSection = ({}: Props) => {
  return (
    <div className="w-full flex items-center justify-center h-80 lg:h-32 bg-[#1A1A1A] z-20">
      <div className="w-10/12 flex flex-col lg:flex-row items-center justify-between text-white gap-y-8 lg:gap-y-0">
        <div className="flex items-center gap-x-7 text-sm lg:text-base 2xl:text-lg flex-col lg:flex-row text-center lg:text-left gap-y-3 lg:gap-y-0 ">
          <MapPinned size={40} className="text-sm 2xl:text-base" />
          <span>
            Department of Computer Science,
            <br />
            University of Jaffna.
          </span>
        </div>
        <div className="flex items-center gap-x-7 text-sm lg:text-base 2xl:text-lg flex-col lg:flex-row text-center lg:text-left gap-y-3 lg:gap-y-0 ">
          <CalendarFold size={40} className="text-sm" />
          <span>September 14th, 2024.</span>
        </div>
        <div className="flex items-center gap-x-7 text-sm lg:text-base 2xl:text-lg flex-col lg:flex-row text-center lg:text-left gap-y-3 lg:gap-y-0 ">
          <Clock5 size={40} className="text-sm" />
          <span>5:00 PM Onward.</span>
        </div>
      </div>
    </div>
  );
};

"use client";

import Image from "next/image";

import bottom_pic from "@/public/download.png";

import { MapPin, MapPinned } from "lucide-react";
import { CalendarFold } from "lucide-react";
import { Clock5 } from "lucide-react";

type Props = {};
export const UojImageSection = ({}: Props) => {
  return (
    <div className="-mt-72 relative">
      <Image
        src={bottom_pic}
        width={2624}
        height={854}
        alt="University of Jafnna B&W"
        className="w-screen h-auto filter grayscale"
      />
      <div className="w-full flex items-center justify-center h-80 lg:h-16 bg-[#1A1A1A]">
        <div className="absolute bottom-10 lg:bottom-24 left-1/2 -translate-x-1/2 w-10/12 flex flex-col lg:flex-row items-center justify-between text-white gap-y-8 lg:gap-y-0">
          <div className="flex items-center gap-x-7 text-sm lg:text-base flex-col lg:flex-row text-center lg:text-left gap-y-3 lg:gap-y-0 ">
            <MapPinned size={40} className="text-sm" />
            <span>
              Department of Computer Science,
              <br />
              University of Jaffna.
            </span>
          </div>
          <div className="flex items-center gap-x-7 text-sm lg:text-base flex-col lg:flex-row text-center lg:text-left gap-y-3 lg:gap-y-0 ">
            <CalendarFold size={40} className="text-sm" />
            <span>September 14th, 2024.</span>
          </div>
          <div className="flex items-center gap-x-7 text-sm lg:text-base flex-col lg:flex-row text-center lg:text-left gap-y-3 lg:gap-y-0 ">
            <Clock5 size={40} className="text-sm" />
            <span>5:00 PM Onward.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

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
      <div className="absolute bottom-16 left-0 w-full flex items-center justify-center">
        <div className="w-10/12 flex items-center justify-between text-white">
          <div className="flex items-center gap-x-7">
            <MapPinned size={40} />
            <span>
              Department of Computer Science,
              <br />
              University of Jaffna.
            </span>
          </div>
          <div className="flex items-center gap-x-7">
            <CalendarFold size={40} />
            <span>
              4th & 5th of September,
              <br />
              2024.
            </span>
          </div>
          <div className="flex items-center gap-x-7">
            <Clock5 size={40} />
            <span>
              9:00 AM - 5:00 PM
              <br />
              Onward.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

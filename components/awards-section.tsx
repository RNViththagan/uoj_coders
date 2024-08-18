"use client";

import Spline from "@splinetool/react-spline/next";
import Image from "next/image";

type Props = {};
export const AwardsSection = ({}: Props) => {
  return (
    <div
      className="bg-neutral-950 w-full pt-32 relative overflow-hidden pb-20"
      id="awards">
      <h1 className="font-varino text-2xl lg:text-4xl text-center font-bold text-white uppercase tracking-widest">
        Awards
      </h1>
      <div className="my-10 w-11/12 lg:w-10/12 mx-auto flex flex-col items-center justify-center gap-y-10 lg:flex-row lg:items-end lg:gap-x-16 lg:gap-y-0">
        <div className="lg:order-2 flex flex-col items-center justify-center gap-y-10">
          <Image
            width={300}
            height={500}
            src={"/first.png"}
            alt="First place award pic by illust.com"
            className="w-64 lg:w-72"
          />
          <h1 className="font-kanitBold font-black text-white text-2xl lg:text-3xl tracking-wider">
            Rs. 50,000
          </h1>
        </div>
        <div className="lg:order-1 flex flex-col items-center justify-center gap-y-10">
          <Image
            width={300}
            height={500}
            src={"/second.png"}
            alt="First place award pic by illust.com"
            className="w-64 lg:w-64"
          />
          <h1 className="font-kanitBold font-black text-white text-2xl lg:text-3xl tracking-wider">
            Rs. 20,000
          </h1>
        </div>
        <div className="lg:order-3 flex flex-col items-center justify-center gap-y-10">
          <Image
            width={300}
            height={500}
            src={"/third.png"}
            alt="First place award pic by illust.com"
            className="w-64 lg:w-60"
          />
          <h1 className="font-kanitBold font-black text-white text-2xl lg:text-3xl tracking-wider">
            Rs. 10,000
          </h1>
        </div>
      </div>
    </div>
  );
};

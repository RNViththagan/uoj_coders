"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
import Link from "next/link";

const SponsorsSection = () => {
  return (
    <div className="bg-neutral-900 w-full overflow-hidden" id="sponsors">
      <div className="h-[30rem] relative w-full bg-black flex flex-col items-center justify-center gap-y-20 overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <h1 className="font-varino underline text-2xl lg:text-4xl text-center font-bold text-white uppercase tracking-widest">
          Sponsors
        </h1>
        <div className="w-full mx-auto">
          <div className="w-full flex flex-col justify-center items-center gap-y-5">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-[#dfdedc] via-[#ecece9] to-[#d3d3d2] text-3xl font-bold tracking-wide">
              Platinum Sponsor
            </h2>
            <div className="flex flex-wrap justify-center gap-x-4">
              <Link
                href={"https://www.oyslans.com/about-us"}
                target="_blank"
                className="cursor-pointer z-30">
                <Image
                  width={300}
                  height={300}
                  src="/sponsors/Oyslans-white-letters.png"
                  alt="Oyslans"
                  className="w-96 h-auto"
                />
              </Link>
              {/* <img
                src="/images/sponsors/sponsor2.png"
                alt="sponsor2"
                className="w-24 h-24"
              />
              <img
                src="/images/sponsors/sponsor3.png"
                alt="sponsor3"
                className="w-24 h-24"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;

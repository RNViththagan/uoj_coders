"use client";

import { SparklesCore } from "./ui/sparkles";
import { Vortex } from "./ui/vortext";

const SponsorsSection = () => {
  return (
    <div className="bg-neutral-950 w-full overflow-hidden" id="sponsors">
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
        <h1 className="font-varino underline text-4xl text-center font-bold text-white uppercase tracking-widest">
          Sponsors
        </h1>
        <h1 className="font-sans tracking-widest md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          To Be Announced!
        </h1>
      </div>
    </div>
  );
};

export default SponsorsSection;

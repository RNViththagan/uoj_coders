"use client";

import { BackgroundBeams } from "./ui/background-beams";

type Props = {};
export const HeroSection = ({}: Props) => {
  return (
    <div className="h-[36rem] lg:h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="w-2xl p-4 flex flex-col items-center gap-y-4 -mt-40 lg:-mt-20">
        <div className="w-full flex flex-col justify-center items-center font-varino relative z-10 text-[2.1rem] md:text-7xl text-white text-center font-bold">
          <p className="text-6xl lg:text-9xl font-telemarines lg:-mb-5">UOJ</p>
          <p>CODERS</p>
        </div>
        <p className="w-full text-center text-white tracking-widest lg:tracking-[0.27em] mb-5 text-xs lg:text-base -mt-5">
          Department of Computer Science
        </p>
        {/* <Button
          borderRadius="1.75rem"
          className="bg-neutral-900 text-white mx-auto rounded-full">
          Register Now
        </Button> */}
      </div>
      <BackgroundBeams />
    </div>
  );
};

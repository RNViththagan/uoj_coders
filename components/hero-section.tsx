import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "./ui/moving-border";

type Props = {};
export const HeroSection = ({}: Props) => {
  return (
    <div className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="w-2xl p-4 flex flex-col items-center gap-y-4 -mt-20">
        <div className="w-full flex flex-col justify-center items-center font-varino relative z-10 text-lg md:text-7xl text-white text-center font-bold">
          <p className="text-9xl font-telemarines -mb-5">UOJ</p>
          <p>CODERS</p>
        </div>
        <p className="w-full text-center text-white tracking-[0.27em] mb-5">
          Department of Computer Science
        </p>
        <Button
          borderRadius="1.75rem"
          className="bg-neutral-900 text-white mx-auto rounded-full">
          Register Now
        </Button>
      </div>
      <BackgroundBeams />
    </div>
  );
};

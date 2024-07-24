import Spline from "@splinetool/react-spline/next";

type Props = {};
export const AwardsSection = ({}: Props) => {
  return (
    <div className="bg-neutral-950 w-full pt-32 relative overflow-hidden">
      <h1 className="font-varino text-4xl text-center font-bold text-white uppercase tracking-widest">
        Awards
      </h1>
      <Spline
        className=""
        scene="https://prod.spline.design/m-drsuXxnwnv-bkL/scene.splinecode"
      />
    </div>
  );
};

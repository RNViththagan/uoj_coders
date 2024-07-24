import Spline from "@splinetool/react-spline/next";

type Props = {};
export const AwardsSection = ({}: Props) => {
  return (
    <div className="bg-neutral-950 w-full pb-10 pt-32 relative overflow-hidden">
      <h1 className=" font-varino text-4xl text-center font-bold text-white uppercase tracking-widest">
        Awards
      </h1>
      <Spline
        className="-mt-32 scale-110"
        scene="https://prod.spline.design/m-drsuXxnwnv-bkL/scene.splinecode"
      />
    </div>
  );
};

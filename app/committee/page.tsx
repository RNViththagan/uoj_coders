import { committee } from "@/data/committee";

const CommitteePage = () => {
  return (
    <div
      className="container bg-neutral-950 w-full pt-32 relative overflow-hidden pb-20"
      id="awards">
      <h1 className="font-varino text-4xl text-center font-bold text-white uppercase tracking-widest">
        Committee
      </h1>
      <div className="w-full lg:w-[50rem] mx-auto mt-16 space-y-7">
        {committee.map((member, index) => (
          <div
            className={`w-full grid grid-cols-2 py-3 ${
              index % 2 === 0 ? "bg-zinc-900" : ""
            }`}
            key={index}>
            <div className="w-full flex justify-start items-start">
              <h3 className="font-semibold text-white text-base lg:text-lg ml-5 tracking-wider text-wrap w-3/4">
                {member.position === committee[index - 1]?.position
                  ? ""
                  : member.position}
              </h3>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-y-2 lg:pl-20">
              <p className="lg:text-lg text-white font-semibold tracking-wider">
                {member.name}
              </p>
              <p className="text-sm 2xl:text-base text-white text-wrap w-11/12 tracking-wide">
                {member.email}
              </p>
              <p className="text-sm 2xl:text-base text-white tracking-wider">{member.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommitteePage;

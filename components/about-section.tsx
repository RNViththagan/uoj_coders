"use client";

import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export function AboutSection() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mb-5 bg-gradient-to-br from-slate-100 to-slate-400 py-4 bg-clip-text font-varino text-center text-4xl font-medium text-transparent md:text-6xl">
        UOJ CODERS
      </motion.h1>
      <div className="w-11/12 md:w-3/4 flex flex-col gap-y-1">
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="py-4 text-white text-lg text-justify font-medium">
          Coding competition referred as UoJCoders is aimed to enhance the
          problem-solving skills and programming skills among the undergraduate
          students in computing and that will provide efficient programmers. The
          competition is a 12-hours inter-university coding competition that was
          inspired by IEEEXtreme. The competition is open to all undergraduate
          students in Sri Lanka, especially for those who follow degrees in the
          computing discipline. UoJCoders v2.0 is planned to be held on 4th and
          5th of April 2020 in the Department of Computer Science, University of
          Jaffna.
        </motion.p>
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-white py-4 text-lg text-justify font-medium">
          The 12-hours coding competition will be conducted online using the
          hackerrank platform (http://hackerrank.com). Participants are expected
          to be present at the venue of the competition. Participants are
          encouraged to solve problems using appropriate data structures and
          algorithms. Questions will mostly be related to real-world problems.
        </motion.p>
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-white py-4 text-lg text-justify font-medium">
          Participating in this competition will improve the problem-solving
          skills, coding skills and teamwork among the students. Since it will
          be a limited time-rapid coding competition, it will enhance the
          efficiency and time management skills of the participants. UoJCoders
          v1.0 was held on 16th and 17th of March 2019 where 200+ teams got
          participated in the elimination round and 25 teams got selected for
          the finals.
        </motion.p>
      </div>
    </LampContainer>
  );
}

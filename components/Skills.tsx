"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import {
  frontendSkills,
  backendSkills,
  devOpsSkills,
  designSkills,
} from "@/lib/data";
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="flex flex-wrap justify-center">
        <div className="flex">
          <div>
            <h1 className="lg:text-2xl text-center font-bold mb-8">
              Frontend Skills
            </h1>
            <ul className="flex flex-wrap justify-center gap-2 text-sm text-gray-800">
              {frontendSkills.map((skill, index) => (
                <motion.li
                  className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
          <h1 className="lg:text-2xl text-center font-bold mb-8">Backend Skills</h1>
            <ul className="flex flex-wrap justify-center gap-2 text-sm text-gray-800">
              {backendSkills.map((skill, index) => (
                <motion.li
                  className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex mt-10">
          <div>
          <h1 className="lg:text-2xl text-center font-bold mb-8">DevOps Skills</h1>
            <ul className="flex flex-wrap justify-center gap-2 text-sm text-gray-800">
              {devOpsSkills.map((skill, index) => (
                <motion.li
                  className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
          <h1 className="lg:text-2xl text-center font-bold mb-8">Design Skills</h1>
            <ul className="flex flex-wrap justify-center gap-2 text-sm text-gray-800">
              {designSkills.map((skill, index) => (
                <motion.li
                  className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

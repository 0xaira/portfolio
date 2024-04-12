"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
    <p className="mb-3">
        I&apos;m a dedicated <span className="font-medium">Fullstack Developer</span>{" "}
        pursuing <span className="italic">BTech</span> in{" "}
        <span className="italic">Computer Science</span> from India. My
        expertise lies in{" "}
        <span className="font-medium">
            React, Next.js, Node.js, and MongoDB
        </span>
        , with additional proficiency in{" "}
        <span className="font-medium">TypeScript and Prisma</span>. Constantly
        on the lookout for new technologies to learn, currently seeking an{" "}
        <span className="font-medium">
            intern position as a software developer
        </span>{" "}
    </p>

    <p className="mb-3">
        With a strong foundation in{" "}
        <span className="font-medium">Computer Science</span> , I&apos;ve immersed
        myself in the nuances of{" "}
        <span className="font-medium">Data Structures and Algorithms</span> ,
        completing over <span className="font-medium">500</span> challenges on
        platforms like{" "}
        <span className="italic">LeetCode, CodeChef, and CodeForces</span>{" "}
        . Achieving a <span className="font-medium">3-star rating</span> on
        CodeChef, along with reaching a peak rating of{" "}
        <span className="font-medium">1658 </span>and hitting{" "}
        <span className="font-medium">1731</span> on LeetCode, underscores my
        commitment and competence in this field.
    </p>

    </motion.section>
  );
}

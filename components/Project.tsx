// Project component
"use client";
import { useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { RiPagesLine } from "react-icons/ri";
import { FaCode, FaRegFileCode } from "react-icons/fa";

// Define the type for project props
type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  viewCodeUrl: string;
  liveUrl: string;
  detailsUrl: string;
};


export default function Project({
  title,
  description,
  tags,
  imageUrl,
  viewCodeUrl,
  liveUrl,
  detailsUrl,
}: ProjectProps) {
  // Ref for scroll animation
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // JSX
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      {/* Main container */}
      <section className="bg-gray-100 max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] lg:h-[22rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20" style={{ marginBottom: "2rem" }}>
        {/* Content container */}
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          {/* Title */}
          <h3 className="text-2xl font-semibold">{title}</h3>
          {/* Description */}
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          {/* Tags */}
          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          {/* Buttons */}
          <div className="flex mt-4 gap-4">
            <button
              className="flex items-center gap-2 px-2 py-1 bg-gray-900 text-white rounded-full transition hover:bg-gray-800 focus:outline-none"
              onClick={() => window.open(viewCodeUrl, "_blank")}
            >
              <span>View Code</span>
              <FaCode />
            </button>

            <button
              className="flex items-center gap-2 px-2 py-1 bg-gray-900 text-white rounded-full transition hover:bg-gray-800 focus:outline-none"
              onClick={() => window.open(liveUrl, "_blank")}
            >
              <span>Live</span>
              <FaRegFileCode />
            </button>

            <button
              className="flex items-center gap-2 px-2 py-1 bg-gray-900 text-white rounded-full transition hover:bg-gray-800 focus:outline-none"
              onClick={() => window.open(detailsUrl, "_blank")}
            >
              <span> Details</span>
              <RiPagesLine />
            </button>

          </div>
        </div>
        {/* Image */}
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-10 w-[28.25rem] rounded-t-lg shadow-2xl
          transition 
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2

          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2

          group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}

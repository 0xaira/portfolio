"use client";
import React, { useEffect } from "react";
import { useActiveSectionContext } from "@/context/ActiveSectionContext"; 
import { projectsData } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Project from "@/components/Project";
import HomeBtn from "@/components/HomeBtn";

export default function Projects() {
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        const { top, bottom } = projectsSection.getBoundingClientRect();
        const isPartiallyVisible = top < window.innerHeight && bottom >= 0;
        if (isPartiallyVisible) {
          setActiveSection("Projects");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActiveSection]);

  return (
    <React.Fragment>
    <section  id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="flex flex-col items-center">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>     
    </section>
    <HomeBtn />
    </React.Fragment>
  );
}

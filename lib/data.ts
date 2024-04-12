import digitalhippo from "@/public/digitalhippo.jpeg";
import digiboard from "@/public/digiboard.png";
import greedyPI from "@/public/greedyPI.png";
import linklist from "@/public/linklist.png";
import quill from "@/public/quill.png";
import x from "@/public/x.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiFiverr } from "react-icons/si";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
    {
      title: "DigitalHippo",
      description:
        "DigitalHippo is a cutting-edge e-commerce marketplace, seamlessly integrating modern technologies to offer a comprehensive platform for buying and selling digital products.",
      tags: ["TypeScript", "Next.js", "Payload", "Tailwind", "TRPC"],
      imageUrl: digitalhippo,
    },
    {
      title: "GreedyPi",
      description:
        "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world.",
      tags: ["Express", "TypeScript", "Next.js", "Mongoose", "MongoDB"],
      imageUrl: greedyPI,
    },
    {
      title: "DigiBoard",
      description:
        "Real-time collaborative whiteboard for drawing, writing, chatting, and team communication fostering creativity and productivity in a dynamic virtual environment.",
      tags: ["Typescipt", "Next.js", "Socket.io", "Recoil", "Express"],
      imageUrl: digiboard,
    },
    // {
    //   title: "X",
    //   description:
    //     "Introducing our new platform, Twitter-inspired, offering real-time microblogging and social networking features tailored for seamless communication and content sharing.",
    //   tags: ["Next.js", "GraphQL", "Prisma ORM", "PostgreSQL", "Supabase", "Redis"],
    //   imageUrl: x,
    // },
    // {
    //   title: "Quill",
    //   description:
    //     " Extract information or answer questions from large PDF files like manuals, essays, books. ChatPDF analyzes the PDF and the AI will use relevant paragraphs to give you an answer.",
    //   tags: ["Next.js", "Stripe", "Prisma", "LangChain", "Pinecone", "TRPC"],
    //   imageUrl: quill,
    // },
    // {
    //   title: "Linklist",
    //   description:
    //     "Discover our latest platform linklist, designed for simplified link sharing and enhanced online presence management, empowering users with customizable and intuitive link directories.",
    //     tags: ["Express", "TypeScript", "Next.js", "Mongoose", "MongoDB"],
    //   imageUrl: linklist,
    // },
  ] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Gitlab",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Express",
    "PostgreSQL",
    "Zod",
    "Three.js",
    "Framer Motion",
  ] as const;

  export const experiencesData = [
    {
      title: "Bachelor of Technology in Computer Science Engineering",
      location: "Oxford College of Engineering and Management",
      description:
        "",
      icon: React.createElement(LuGraduationCap),
      date: "2022-2026",
    },
    {
      title: "Full Stack Developer - Freelance",
      location: "Remote",
      description:
        "Experienced MERN Full Stack Developer providing comprehensive web development solutions on Fiverr. Skilled in frontend and backend technologies to deliver high-quality, custom-built applications tailored to clients' needs.",
      icon: React.createElement(SiFiverr ),
      date: "2021-Present",
    },
    {
      title: "SDE Intern",
      location: "Remote",
      description:
        "Develop web solutions, api, plugins and also development under the jobs platforms",
      icon: React.createElement(CgWorkAlt),
      date: "2024 - 2024",
    },
  ] as const;
  
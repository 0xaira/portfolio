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
import codeforces from "@/public/codeforces.avif";
import codechef from "@/public/codechef.jpeg";
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
    name: "CodingProfiles",
    hash: "#coding-profiles",
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

// export const projectsData = [
//     {
//       title: "DigitalHippo",
//       description:
//         "DigitalHippo is a cutting-edge e-commerce marketplace, seamlessly integrating modern technologies to offer a comprehensive platform for buying and selling digital products.",
//       tags: ["TypeScript", "Next.js", "Payload", "Tailwind", "TRPC"],
//       imageUrl: digitalhippo,
//     },
//     {
//       title: "GreedyPi",
//       description:
//         "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world.",
//       tags: ["Express", "TypeScript", "Next.js", "Mongoose", "MongoDB"],
//       imageUrl: greedyPI,
//     },
//     {
//       title: "DigiBoard",
//       description:
//         "Real-time collaborative whiteboard for drawing, writing, chatting, and team communication fostering creativity and productivity in a dynamic virtual environment.",
//       tags: ["Typescipt", "Next.js", "Socket.io", "Recoil", "Express"],
//       imageUrl: digiboard,
//     },
//     {
//       title: "X",
//       description:
//         "Introducing our new platform, Twitter-inspired, offering real-time microblogging and social networking features tailored for seamless communication and content sharing.",
//       tags: ["Next.js", "GraphQL", "Prisma ORM", "PostgreSQL", "Supabase", "Redis"],
//       imageUrl: x,
//     },
//     {
//       title: "Quill",
//       description:
//         " Extract information or answer questions from large PDF files like manuals, essays, books. ChatPDF analyzes the PDF and the AI will use relevant paragraphs to give you an answer.",
//       tags: ["Next.js", "Stripe", "Prisma", "LangChain", "Pinecone", "TRPC"],
//       imageUrl: quill,
//     },
//     {
//       title: "Linklist",
//       description:
//         "Discover our latest platform linklist, designed for simplified link sharing and enhanced online presence management, empowering users with customizable and intuitive link directories.",
//         tags: ["Express", "TypeScript", "Next.js", "Mongoose", "MongoDB"],
//       imageUrl: linklist,
//     },
//   ] as const;

export const projectsData = [
  {
    title: "DigitalHippo",
    description:
      "DigitalHippo is a cutting-edge e-commerce marketplace, seamlessly integrating modern technologies to offer a comprehensive platform for buying and selling digital products.",
    tags: ["TypeScript", "Next.js", "Payload", "Tailwind", "TRPC"],
    imageUrl: digitalhippo,
    viewCodeUrl: "https://github.com/0xaira/portfolio",
    liveUrl: "https://github.com/0xaira/portfolio",
    detailsUrl: "https://github.com/0xaira/portfolio",
  },
  {
    title: "GreedyPi",
    description:
      "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world.",
    tags: ["Express", "TypeScript", "Next.js", "Mongoose", "MongoDB"],
    imageUrl: greedyPI,
    viewCodeUrl: "https://example.com/greedypi-code",
    liveUrl: "https://example.com/greedypi-live",
    detailsUrl: "https://example.com/greedypi-details",
  },
  {
    title: "DigiBoard",
    description:
      "Real-time collaborative whiteboard for drawing, writing, chatting, and team communication fostering creativity and productivity in a dynamic virtual environment.",
    tags: ["Typescipt", "Next.js", "Socket.io", "Recoil", "Express"],
    imageUrl: digiboard,
    viewCodeUrl: "https://example.com/digiboard-code",
    liveUrl: "https://example.com/digiboard-live",
    detailsUrl: "https://example.com/digiboard-details",
  },
];

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
  
  export const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "Tailwind CSS",
    "Sass",
    "Vue.js",
    "Angular",
    "Bootstrap",
    "Material-UI",
    "Styled Components",
    "Webpack",
    "Gatsby",
    "Nuxt.js",
] as const;

export const backendSkills = [
    "Node.js",
    "Express",
    "Prisma",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "Django",
    "Flask",
    "Spring Boot",
    "ASP.NET Core",
    "Ruby on Rails",
    "Laravel",
    "Firebase",
    "AWS Lambda",
    "Serverless Framework",
] as const;

export const devOpsSkills = [
    "Git",
    "Gitlab",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "CircleCI",
    "Travis CI",
    "Ansible",
    "Terraform",
    "AWS",
    "Azure",
    "Google Cloud Platform",
] as const;

export const designSkills = [
    "Figma",
    "Adobe XD",
    "Sketch",
    "InVision",
    "Zeplin",
    "Abstract",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe After Effects",
    "Blender",
] as const;

  // Data for coding profiles
  export const codingProfiles = [
    { imageUrl: digiboard, alt: "CodeForces", platform: "CodeForces", link: "https://codeforces.com/username" },
    { imageUrl: quill, alt: "CodeChef", platform: "CodeChef", link: "https://codechef.com/username" },
    { imageUrl: digiboard, alt: "LeetCode", platform: "LeetCode", link: "https://leetcode.com/username" },
    { imageUrl: digiboard, alt: "GeeksForGeeks", platform: "GeeksForGeeks", link: "https://geeksforgeeks.com/username" },
    { imageUrl: digiboard, alt: "HackerRank", platform: "HackerRank", link: "https://hackerrank.com/username" },
    { imageUrl: digiboard, alt: "CodingNinjas", platform: "CodingNinjas", link: "https://codingninjas.com/username" }
  ] as const;
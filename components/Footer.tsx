import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaBlog, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Aira. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>

      <div className="flex justify-center gap-2 mt-2 -mb-2">
        <a
          className="bg-white p-2 text-gray-700 flex items-center gap-2 text-[0.9rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/aira-jena/"
          target="_blank"
        >
          <IoLogoLinkedin />
        </a>
        <a
          className="bg-white p-2 text-gray-700 flex items-center gap-2 text-[0.9rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/0xaira"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className="bg-white p-2 text-gray-700 flex items-center gap-2 text-[0.9rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://twitter.com/0xAira"
          target="_blank"
        >
          <FaSquareXTwitter />
        </a>

        <a
          className="bg-white p-2 text-gray-700 flex items-center gap-2 text-[0.9rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://airablog.com"
          target="_blank"
        >
          <FaBlog />
        </a>
      </div>
    </footer>
  );
}

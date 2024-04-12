// projects/Header.tsx
import React from "react";
import Link from "next/link";

const HeaderProjects = () => {
  return (
    <header className="z-[999] relative">
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          <li className="h-3/4 flex items-center justify-center relative">
            <Link href="/">
              <h1 className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300">
                Home
              </h1>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderProjects;

import React from "react";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const HomeBtn = () => {
  return (
    <Link href="/">
      <h1 className="fixed left-4 bottom-4 z-50 flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65">
        <BsArrowLeft className="opacity-70 group-hover:translate-x-1 transition" />
        <span className="hidden sm:inline">Home</span>
      </h1>
    </Link>
  );
};

export default HomeBtn;

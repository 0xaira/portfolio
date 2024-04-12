import Link from 'next/link';
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

export default function ProjectBtn() {
  return (
    <Link
    href="/projects"
    className="group flex items-center justify-center gap-2 h-[3rem] w-[12rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 mt-4"
    onClick={() => {}}
    >
    See All Projects{" "}
    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
  </Link>
  )
}

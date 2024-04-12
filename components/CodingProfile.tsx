"use client";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import profile from "../public/profile.jpeg";
import { useSectionInView } from "@/lib/hooks";

export default function CodingProfile() {
  const { ref } = useSectionInView("CodingProfiles");
  return (
    <section
      className="w-full py-12 md:py-24 -mt-24"
      id="coding-profiles"
      ref={ref}
    >
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-4">
          <SectionHeading>My Coding Profiles</SectionHeading>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Find me on these platforms where I showcase my coding skills.
          </p>
        </div>
        <div className="grid grid-cols-1 items-center justify-center gap-6 sm:grid-cols-3 md:gap-12">
          {/* CodeForces */}
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="relative w-20 h-20 rounded-full overflow-hidden">
              <Image
                alt="CodeForces"
                className="object-cover"
                src={profile}
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-lg font-bold">CodeForces</h3>
            <Link href="https://codeforces.com/username" passHref>
              <h1 className="underline">codeforces.com/username</h1>
            </Link>
          </div>
          {/* CodeChef */}
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="relative w-20 h-20 rounded-full overflow-hidden">
              <Image
                alt="CodeChef"
                className="object-cover"
                src={profile}
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-lg font-bold">CodeChef</h3>
            <Link href="https://codechef.com/username" passHref>
              <h1 className="underline">codechef.com/username</h1>
            </Link>
          </div>
          {/* LeetCode */}
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="relative w-20 h-20 rounded-full overflow-hidden">
              <Image
                alt="LeetCode"
                className="object-cover"
                src={profile}
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-lg font-bold">LeetCode</h3>
            <Link href="https://leetcode.com/username" passHref>
              <h1 className="underline">leetcode.com/username</h1>
            </Link>
          </div>
          {/* GeeksForGeeks */}
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="relative w-20 h-20 rounded-full overflow-hidden">
              <Image
                alt="GeeksForGeeks"
                className="object-cover"
                src={profile}
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-lg font-bold">GeeksForGeeks</h3>
            <Link href="https://geeksforgeeks.com/username" passHref>
              <h1 className="underline">geeksforgeeks.com/username</h1>
            </Link>
          </div>
          {/* HackerRank */}
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="relative w-20 h-20 rounded-full overflow-hidden">
              <Image
                alt="HackerRank"
                className="object-cover"
                src={profile}
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-lg font-bold">HackerRank</h3>
            <Link href="https://hackerrank.com/username" passHref>
              <h1 className="underline">hackerrank.com/username</h1>
            </Link>
          </div>
          {/* CodingNinjas */}
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="relative w-20 h-20 rounded-full overflow-hidden">
              <Image
                alt="CodingNinjas"
                className="object-cover"
                src={profile}
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-lg font-bold">CodingNinjas</h3>
            <Link href="https://codingninjas.com/username" passHref>
              <h1 className="underline">codingninjas.com/username</h1>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

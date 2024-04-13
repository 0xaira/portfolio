"use client";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Image, { StaticImageData } from "next/image";
import { useSectionInView } from "@/lib/hooks";
import codechef from "../public/codechef.png";
import codeforces from "../public/codeforces.png"
import hackerrank from "../public/hackerrank.png"
import codingninjas from "../public/codingninjas.png"
import leetcode from "../public/leetcode.png"
import gfg from "../public/gfg.png"

interface CodingProfileProps {
  alt: string;
  platform: string;
  link: string;
  image: StaticImageData;
}

function CodingProfileEntry({ alt, platform, link, image }: CodingProfileProps) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="relative w-20 h-20 rounded-full overflow-hidden">
        <Image
          alt={alt}
          src={image}
          width={80}
          height={80}
          layout="responsive"
        />
      </div>
      <h3 className="text-lg font-bold">{platform}</h3>
      <Link href={link} passHref>
        <h1 className="underline">{link}</h1>
      </Link>
    </div>
  );
}

const codingProfiles: CodingProfileProps[] = [
  { alt: "CodeForces", platform: "CodeForces", link: "https://codeforces.com/username", image: codeforces },
  { alt: "CodeChef", platform: "CodeChef", link: "https://codechef.com/username", image: codechef },
  { alt: "LeetCode", platform: "LeetCode", link: "https://leetcode.com/username", image: leetcode },
  { alt: "GeeksForGeeks", platform: "GeeksForGeeks", link: "https://geeksforgeeks.com/username", image: gfg },
  { alt: "HackerRank", platform: "HackerRank", link: "https://hackerrank.com/username", image: hackerrank},
  { alt: "CodingNinjas", platform: "CodingNinjas", link: "https://codingninjas.com/username", image: codingninjas }
];


export default function CodingProfile() {
  const { ref } = useSectionInView("CodingProfiles");


  return (
    <section className="w-full py-12 md:py-24 -mt-24" id="coding-profiles" ref={ref}>
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-4">
          <SectionHeading>My Coding Profiles</SectionHeading>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Find me on these platforms where I showcase my coding skills.
          </p>
        </div>
        <div className="grid grid-cols-1 items-center justify-center gap-6 sm:grid-cols-3 md:gap-12">
          {codingProfiles.map((profile, index) => (
            <CodingProfileEntry key={index} image={profile.image} alt={profile.alt} platform={profile.platform} link={profile.link} />
          ))}
        </div>
      </div>
    </section>
  );
}

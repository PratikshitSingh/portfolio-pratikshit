"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

import iit from "@/public/iit.png";
import uofi from "@/public/uofi.png";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <section ref={ref} id="education" className="scroll-mt-28 mb-28">
      <SectionHeading>Education</SectionHeading>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <section className="flex flex-col justify-center items-center w-full group bg-gray-100 max-w-[32rem] border border-black/5 rounded-lg overflow-hidden relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 ">
          <Image
            src={uofi}
            alt="university"
            width="220"
            height="220"
            quality={95}
            className="group:delay-32 sm:block mt-5 mx-10 rounded-t-lg bg-gray-100 group-hover:bg-gray-200 dark:bg-white/0 dark:group-hover:bg-white/0"
          />
          <div className="flex flex-col text-center pt-4 pb-7 px-8 sm:pl-2 sm:pr-2 sm:pt-10 sm:max-w-[100%]  h-[100%] w-[18rem]">
            <a 
            href="https://cs.illinois.edu/"
            target="_blank"
            className="text-xl font-semibold underline">
              University of Illinois {"\n"} Urbana-Champaign
            </a>
            <p className="mt-2 text-gray-700 dark:text-white/70">
              Masters of Computer Science
            </p>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center w-full group bg-gray-100 max-w-[32rem] border border-black/5 rounded-lg overflow-hidden relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 ">
          <Image
            src={iit}
            alt="university"
            width="130"
            height="130"
            quality={95}
            className="group:delay-32 sm:block mt-5 mx-10 rounded-t-lg bg-gray-100 group-hover:bg-gray-200 dark:bg-white/0 dark:group-hover:bg-white/0"
          />
          <div className="flex flex-col text-center pt-4 pb-7 px-8 sm:pl-2 sm:pr-2 sm:pt-10 sm:max-w-[100%]  h-[100%] w-[18rem]">
            <a 
            href="https://www.iitbhu.ac.in/"
            target="_blank"
            className="text-xl font-semibold underline">
              Indian Institute of Technology Varanasi
            </a>
            <p className="mt-2 text-gray-700 dark:text-white/70">
              B.Tech. in Electrical Engineering
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";

import { BsEyeFill, BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

import pratikshit from "@/public/pratikshit.png";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } =  useActiveSectionContext();

  return (
    <section
      id="home"
      ref={ref}
      className="mb--28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={pratikshit}
              alt="Pratikshit portrait"
              width="192"
              height="192"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.30rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2x1 font-medium !leading-[1.5] sm:text-4x-1"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Pratikshit,</span> a
        forward-thinking <span className="font-bold">software engineer</span>{" "}
        with a passion for solving challenging problems in collaborative
        environments.
        <br />
        <br />
        Currently I'm developing robust and scalable{" "}
        <span className="font-bold">
            applications for solving customer problems.{" "}
        </span>
        <span className="italic">Experienced working in Adtech, Fintech and Transportation.</span>{" "} My past experiences at <span className="italic">Zeta, Illinois Center of Transportation, JP Morgan Chase</span> and current work has honed my skills in creating highly available, scalable, reliable, robust software solutions, with a special focus on combining cloud and AI technologies with full-stack development, with blend of Data Science and Machine Learning.
        <br />
        <br />I am driven by the challenge of innovating in the tech landscape,
        and I am always eager to apply my expertise to new, groundbreaking
        projects.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex items-center bg-gray-900 text-white px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:tranlate-x-1 transition" />
        </Link>
        <a
          href="https://drive.google.com/file/d/11X2QYqfdQFfBF_QEtoiaZXh-eAE5Fwlg/view?usp=sharing"
          target="_blank"
          className="group flex items-center bg-white px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack dark:bg-white/10"
        >
          Resume{" "}
          <BsEyeFill className="opacity-70 group-hover:tranlate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/pratikshit-singh/"
          target="_blank"
          className="flex items-center bg-white text-gray-700 p-4 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/PratikshitSingh"
          target="_blank"
          className="flex items-center bg-white text-gray-700 p-4 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

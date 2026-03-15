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
        <span className="font-bold">I build systems that don't flinch under scale—</span>
        <span className="font-bold">event-driven services, data pipelines, and GenAI apps that actually ship.</span>
        <br />
        <br />
        Currently focused on designing{" "}
        <span className="font-bold">
          microservices that stay up, fast, and readable
        </span>{" "}
        with production GenAI patterns (RAG, agents, evaluation). I've spent time at{" "}
        <span className="italic">Intuit, Zeta Global, Illinois Center of Transportation, and JP Morgan Chase</span> building systems where correctness, performance, and maintainability all matter.
        <br />
        <br />
        <span className="italic">Open to collaborating on:</span> RAG/Agent systems solving real workflows, data platforms (PySpark/EMR, event-driven architectures), and backend systems where scale meets observability.
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
          href="/pratikshit_resume.pdf"
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

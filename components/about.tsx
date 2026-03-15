"use client";

import React from "react";
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-7 sm-mb-40 scroll-mt-28"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        <span className="font-bold">
          I am open to new opportunities for full-time positions as a Full Stack 
          Software Engineer/MLE/AI Engineer. Feel free to contact me if you have any! 
        </span>
      </p>

      <p className="mb-3">
        I'm specialized in{" "}
        <span className="font-bold">
          full-stack development, cloud computing, and AI technologies
        </span>
        . I'm proficient in{" "}
        <span className="font-bold">
          Java, Python, JavaScript, React, Next.js, SpringBoot, Django, Flask, Postgres,
           MongoDB, AWS, Docker, Kubernetes, AI technologies and Kafka.
        </span>
        I'm eager to apply these skills in a dynamic software engineering
        role.
      </p>

      <p className="mb-3">
        My passion for programming lies in the thrill of solving complex
        problems. There's nothing more satisfying than crafting the perfect
        solution after a challenging puzzle. I'm constantly seeking to expand my
        knowledge and master new technologies. I'm always experimenting with
        innovative ways to automate the mundane aspects of daily life to create
        enjoyable, efficient experiences.
        <br />
        When I'm not working you can find me lifting or eating.
      </p>
    </motion.section>
  );
}

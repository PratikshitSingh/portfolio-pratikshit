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
          I am open to new opportunities for full-time positions as a Backend Engineer, 
          Software Engineer, or AI Engineer. Feel free to reach out!
        </span>
      </p>

      <p className="mb-3">
        My core expertise lies in{" "}
        <span className="font-bold">
          full-stack development, designing event-driven microservices, building scalable data pipelines, and shipping production GenAI systems.
        </span>
        {" "}I'm proficient in{" "}
        <span className="font-bold">
          Spring Boot, Python, Kafka, PostgreSQL, AWS, Docker, Kubernetes, LangChain, RAG patterns, PyTorch, React, Next.js, and TypeScript.
        </span>
      </p>

      <p className="mb-3">
        I'm currently exploring <span className="font-bold">production GenAI patterns</span>—evaluating RAG approaches, building reliable agents, and making LLM systems measurable and safe. I love problems where clean architecture, operational excellence, and Hexagonal design patterns intersect.
      </p>

      <p className="mb-3">
        <span className="font-bold italic">Open to Collaborate On:</span>
        <br />
        • Retrieval-Augmented Generation (RAG) and Agent systems solving real workflows
        <br />
        • Data platforms (PySpark/EMR, streaming, event-driven architectures)
        <br />
        • Backend systems where performance, correctness, and maintainability all matter
      </p>

      <p className="mb-3">
        When I'm not working, you can find me lifting or eating.
      </p>
    </motion.section>
  );
}

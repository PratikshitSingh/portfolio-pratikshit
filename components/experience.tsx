"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.5)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      theme === "light"
                        ? "white"
                        : "rgba(255, 255, 255, 0.15)",
                    borderRadius: "50%",
                    overflow: "hidden",
                    padding: 0,
                  }}
                >
                  <Image
                    src={item.logoPath}
                    alt={`${item.title} logo`}
                    width={32}
                    height={32}
                    style={{ maxWidth: "32px", maxHeight: "32px", width: "auto", height: "auto", objectFit: "contain" }}
                    priority={index === 0}
                  />
                </div>
              }
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
                width: "3.5rem",
                height: "3.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3 className="font-bold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal !text-sm text-gray-700 dark:text-white/75">
                {item.description}
              </p>
              <ul className="!mt-4 flex flex-wrap gap-2 sm:mt-auto">
                {item.tags.map((tag, index) => (
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

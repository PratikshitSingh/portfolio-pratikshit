"use client";

import React, { useRef, useState, useEffect } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Blob from "./blob";

type ProjectProps = (typeof projectsData)[number] & {
  index: number;
  onOpenModal: (project: typeof projectsData[number]) => void;
};

export default function Project({
  title,
  description,
  tags,
  projectUrl,
  imageUrl,
  index,
  onOpenModal,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Detect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
  }, []);

  // Scroll-based float effect with staggered offset per project
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const floatAmount = 60 - index * 15; // Staggered float depth
  const floatY = useTransform(scrollYProgress, [0, 1], [floatAmount, -floatAmount]);

  // Fade in on scroll entrance
  const cardOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const cardScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  // Cursor tracking parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxX = useSpring(useTransform(mouseX, [0, 1], [-12, 12]), {
    damping: 20,
    stiffness: 300,
  });
  const parallaxY = useSpring(useTransform(mouseY, [0, 1], [-12, 12]), {
    damping: 20,
    stiffness: 300,
  });

  // Blur intensity based on hover
  const blurAmount = useMotionValue(11);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    mouseX.set(offsetX / rect.width);
    mouseY.set(offsetY / rect.height);
  };

  const handleMouseLeave = () => {
    if (!isReducedMotion) {
      mouseX.set(0.5);
      mouseY.set(0.5);
      blurAmount.set(11);
    }
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    blurAmount.set(15);
    setIsHovered(true);
  };

  // Generate unique blob color based on project index
  const blobColors = [
    "rgba(139, 92, 246, 0.4)", // Purple
    "rgba(59, 130, 246, 0.4)", // Blue
    "rgba(16, 185, 129, 0.4)", // Teal
    "rgba(168, 85, 247, 0.4)", // Violet
    "rgba(236, 72, 153, 0.4)", // Pink
    "rgba(249, 115, 22, 0.4)", // Orange
    "rgba(34, 197, 94, 0.4)", // Green
  ];

  const blobColor = blobColors[index % blobColors.length];

  return (
    <motion.div
      ref={ref}
      style={{
        y: floatY,
        opacity: cardOpacity,
        scale: cardScale,
      }}
      className="mb-8 sm:mb-16 last:mb-0 cursor-pointer"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onClick={() =>
          onOpenModal({
            title,
            description,
            tags,
            projectUrl,
            imageUrl,
          })
        }
        style={{
          x: isReducedMotion ? 0 : parallaxX,
          y: isReducedMotion ? 0 : parallaxY,
        }}
        className="relative group h-full"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Glassmorphic card background */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            backdropFilter: "blur(11px)",
            background:
              "rgba(255, 255, 255, 0.1) linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: isHovered
              ? "0 20px 60px rgba(0, 0, 0, 0.3)"
              : "0 8px 32px rgba(0, 0, 0, 0.1)",
          }}
          animate={{
            boxShadow: isHovered
              ? "0 25px 70px rgba(0, 0, 0, 0.35)"
              : "0 8px 32px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Blob background */}
        <div className="absolute inset-0 rounded-lg overflow-hidden opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          <Blob
            animationDuration={isHovered ? 4 : 8}
            delay={index * 0.1}
            color={blobColor}
            opacity={0.4}
          />
        </div>

        {/* Content container */}
        <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between">
          {/* Project image - hidden in 2-column layout */}

          {/* Text content */}
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0.95,
            }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="mt-2 sm:mt-3 leading-relaxed text-gray-700 dark:text-white/80 text-sm">
              {description}
            </p>
          </motion.div>

          {/* Tags */}
          <motion.ul
            className="flex flex-wrap gap-2 mt-4 sm:mt-6"
            animate={{
              opacity: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.2 }}
          >
            {tags.map((tag, i) => (
              <li
                key={i}
                className="bg-black/30 backdrop-blur-md px-3 py-1 text-[0.65rem] sm:text-[0.7rem] uppercase tracking-wider text-white/90 rounded-full border border-white/20 hover:bg-black/50 transition"
              >
                {tag}
              </li>
            ))}
          </motion.ul>

          {/* Links */}
          <motion.div
            className="mt-auto pt-4 flex gap-3"
            animate={{
              opacity: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.2 }}
          >
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm underline"
              onClick={(e) => e.stopPropagation()}
            >
              View Project
            </a>
            <span className="text-white/30">•</span>
            <span className="text-white/60 text-sm">Click card to expand</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import Blob from "./blob";

type Project = typeof projectsData[number];

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  index?: number;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
  index = 0,
}: ProjectModalProps) {
  if (!project) return null;

  const blobColors = [
    "rgba(139, 92, 246, 0.5)", // Purple
    "rgba(59, 130, 246, 0.5)", // Blue
    "rgba(16, 185, 129, 0.5)", // Teal
    "rgba(168, 85, 247, 0.5)", // Violet
    "rgba(236, 72, 153, 0.5)", // Pink
    "rgba(249, 115, 22, 0.5)", // Orange
    "rgba(34, 197, 94, 0.5)", // Green
  ];

  const blobColor = blobColors[index % blobColors.length];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            transition={{ duration: 0.2 }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* Glassmorphic card container */}
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden"
              style={{
                background:
                  "rgba(255, 255, 255, 0.05) linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              {/* Blob background */}
              <div className="absolute inset-0 opacity-40">
                <Blob
                  animationDuration={6}
                  color={blobColor}
                  opacity={0.5}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full overflow-y-auto">
                <div className="flex flex-col lg:flex-row gap-8 p-6 sm:p-10">
                  {/* Left: Content */}
                  <div className="flex-1 min-w-0">
                    {/* Close button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={onClose}
                      className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </motion.button>

                    {/* Title */}
                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-3xl sm:text-4xl font-bold text-white mb-4"
                    >
                      {project.title}
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="text-base sm:text-lg text-white/80 leading-relaxed mb-6"
                    >
                      {project.description}
                    </motion.p>

                    {/* Tags */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mb-8"
                    >
                      <h3 className="text-sm uppercase tracking-wider text-white/60 mb-3">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: 0.25 + i * 0.05,
                            }}
                            className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-md border border-white/20 text-white/90 hover:bg-white/20 transition"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500/80 hover:bg-blue-500 text-white font-semibold backdrop-blur-md border border-blue-400/30 transition"
                    >
                      View Project
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6l6-6m0 0l-6 6m6-6v12"
                        />
                      </svg>
                    </motion.a>
                  </div>

                  {/* Right: Image (visible on larger screens) */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="hidden lg:block flex-1 min-w-0"
                  >
                    <div className="relative w-full h-full min-h-96 rounded-lg overflow-hidden">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                        quality={95}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
                    </div>
                  </motion.div>
                </div>

                {/* Image on mobile - below content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="lg:hidden px-6 sm:px-10 pb-10"
                >
                  <div className="relative w-full h-64 rounded-lg overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                      quality={95}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

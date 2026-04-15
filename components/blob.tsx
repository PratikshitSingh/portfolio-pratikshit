"use client";

import React from "react";
import { motion } from "framer-motion";

interface BlobProps {
  animationDuration?: number;
  delay?: number;
  color?: string;
  opacity?: number;
}

export default function Blob({
  animationDuration = 8,
  delay = 0,
  color = "rgba(139, 92, 246, 0.4)", // Purple by default
  opacity = 0.4,
}: BlobProps) {
  // Generate randomized but smooth blob path points
  const generateBlobPath = (seed: number) => {
    const random = (min: number, max: number) => {
      const x = Math.sin(seed) * 10000;
      return min + (x - Math.floor(x)) * (max - min);
    };

    const cx = 100;
    const cy = 100;
    const radius = 50;

    // Generate 8 points around a circle with randomized distances
    const points = Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * Math.PI * 2;
      const randomRadius = radius * (0.6 + random(0, 0.4)); // 60-100% of radius
      const x = cx + Math.cos(angle) * randomRadius;
      const y = cy + Math.sin(angle) * randomRadius;
      return [x, y];
    });

    // Create smooth cubic bezier curve through points
    let path = `M ${points[0][0]} ${points[0][1]}`;
    for (let i = 0; i < points.length; i++) {
      const current = points[i];
      const next = points[(i + 1) % points.length];
      const prev = points[i === 0 ? points.length - 1 : i - 1];

      const cp1x = current[0] + (next[0] - prev[0]) * 0.2;
      const cp1y = current[1] + (next[1] - prev[1]) * 0.2;
      const cp2x = next[0] - (current[0] - prev[0]) * 0.2;
      const cp2y = next[1] - (current[1] - prev[1]) * 0.2;

      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next[0]} ${next[1]}`;
    }
    path += " Z";
    return path;
  };

  const blobPath = generateBlobPath(Date.now() % 10000);

  const blobVariants = {
    animate: {
      scale: [1, 1.08, 1.15, 1.08, 1],
      opacity: [opacity * 0.6, opacity, opacity * 1.2, opacity, opacity * 0.6],
      transition: {
        duration: animationDuration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      },
    },
  };

  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
      style={{ filter: "blur(2px)" }}
    >
      <defs>
        <filter id="blur-blob">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>
      <motion.path
        d={blobPath}
        fill={color}
        filter="url(#blur-blob)"
        variants={blobVariants}
        animate="animate"
      />
    </motion.svg>
  );
}

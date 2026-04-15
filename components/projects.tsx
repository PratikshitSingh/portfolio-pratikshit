"use client";

import React, { useState } from "react";

import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import ProjectModal from "./project-modal";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[number] | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpenModal = (project: typeof projectsData[number], index: number) => {
    setSelectedProject(project);
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-12 sm:mt-16">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project 
              {...project} 
              index={index}
              onOpenModal={(proj) => handleOpenModal(proj, index)}
            />
          </React.Fragment>
        ))}
      </div>
      
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={handleCloseModal}
        index={selectedIndex}
      />
    </section>
  );
}

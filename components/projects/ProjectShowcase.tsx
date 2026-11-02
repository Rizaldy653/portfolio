"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";
import { projects } from "../../data/project";

const VISIBLE_CARDS = 5;

export default function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const selectedProject = projects[activeIndex];

  // Get 5 projects, wrapping around when reaching the end.
  const visibleProjects = Array.from(
    { length: Math.min(VISIBLE_CARDS, projects.length) },
    (_, index) => {
      const projectIndex = (activeIndex + index) % projects.length;

      return {
        project: projects[projectIndex],
        originalIndex: projectIndex,
      };
    },
  );

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % projects.length);
  };

  const handlePrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + projects.length) % projects.length,
    );
  };

  if (!selectedProject) {
    return <p>No projects found.</p>;
  }

  return (
    <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.2fr_0.8fr]">
      {/* Project Details */}
      <section>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-black uppercase">Project Details</h2>

          <span className="text-sm font-bold">
            {activeIndex + 1} / {projects.length}
          </span>
        </div>

        <ProjectDetails project={selectedProject} />
      </section>

      {/* Infinite Stacked Cards */}
      <section>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-black uppercase">More Projects</h2>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous project"
              className="rounded-lg border-2 border-black bg-white px-3 py-2 font-bold shadow-[3px_3px_0_#000] hover:bg-[#FFE66D]"
            >
              ↑
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next project"
              className="rounded-lg border-2 border-black bg-white px-3 py-2 font-bold shadow-[3px_3px_0_#000] hover:bg-[#FFE66D]"
            >
              ↓
            </button>
          </div>
        </div>

        <div className="relative h-[480px] overflow-hidden">
          {visibleProjects.map(({ project, originalIndex }, position) => (
            <div
              key={project.id}
              className="absolute inset-x-0 top-0 transition-all duration-500 ease-in-out"
              style={{
                transform: `translateY(${position * 76}px) scale(${1 - position * 0.045})`,
                zIndex: VISIBLE_CARDS - position,
                opacity: 1 - position * 0.12,
                transformOrigin: "top center",
              }}
            >
              <ProjectCard
                project={project}
                index={originalIndex}
                isSelected={position === 0}
                onSelect={() => setActiveIndex(originalIndex)}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

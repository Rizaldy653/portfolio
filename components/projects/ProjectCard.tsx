// src/app/components/projects/ProjectCard.tsx

import { ArrowUpRight } from "lucide-react";
import type { Project } from "./project-data";

type ProjectCardProps = {
  project: Project;
  index: number;
  isSelected: boolean;
  onSelect: (id: string) => void;
};

export default function ProjectCard({
  project,
  index,
  isSelected,
  onSelect,
}: ProjectCardProps) {
  return (
    <article
      className={`relative w-full rounded-2xl border-2 border-black p-5 transition-colors duration-300 ${
        isSelected
          ? "bg-[#FFE66D] shadow-[6px_6px_0px_#000]"
          : "bg-[#FFFDF5] shadow-[4px_4px_0px_#000]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-600">
          Project {String(index + 1).padStart(2, "0")}
        </span>

        {isSelected && (
          <span className="rounded-full border border-black bg-white px-2 py-1 text-[10px] font-bold uppercase">
            Selected
          </span>
        )}
      </div>

      <h3 className="mt-4 text-xl font-black leading-tight sm:text-2xl">
        {project.title}
      </h3>

      <p className="mt-1 text-sm font-medium text-neutral-600">
        {project.category}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.slice(0, 3).map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-black bg-white px-2 py-1 text-xs font-semibold"
          >
            {technology}
          </span>
        ))}

        {project.technologies.length > 3 && (
          <span className="rounded-md border border-black px-2 py-1 text-xs font-semibold">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>

      <button
        type="button"
        onClick={() => onSelect(project.id)}
        aria-pressed={isSelected}
        className="mt-5 flex w-full items-center justify-between rounded-lg border-2 border-black bg-white px-4 py-3 text-sm font-bold transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
      >
        <span>{isSelected ? "Currently Selected" : "Show Details"}</span>

        <ArrowUpRight size={18} aria-hidden="true" />
      </button>
    </article>
  );
}

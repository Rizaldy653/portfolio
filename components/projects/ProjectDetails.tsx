// src/app/components/projects/ProjectDetails.tsx

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "../../data/project";

type ProjectDetailsProps = {
  project: Project;
};

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <article
      key={project.id}
      className="overflow-hidden rounded-2xl border-2 border-black bg-[#FFFDF5] shadow-[5px_5px_0px_0px_#000]"
    >
      {/* Project preview */}
      <div className="relative aspect-[16/9] overflow-hidden border-b-2 border-black bg-[#FFE66D]">
        <Image
          src={project.image}
          alt={`${project.title} project screenshot`}
          fill
          sizes="(min-width: 768px) 55vw, 100vw"
          priority
          className="object-cover"
        />
      </div>

      {/* Project information */}
      <div className="p-5 sm:p-6 lg:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
          Selected Project
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
          {project.title}
          <span className="text-[#D4A900]">.</span>
        </h2>

        <p className="mt-2 text-sm font-semibold text-neutral-600 sm:text-base">
          {project.category}
        </p>

        <p className="mt-5 text-sm leading-7 text-neutral-700 sm:text-base">
          {project.description}
        </p>

        {/* Technology stack */}
        <div className="mt-6">
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest">
            Built With
          </h3>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-black bg-[#FFE66D] px-3 py-1.5 text-xs font-bold"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Project links */}
        <div className="mt-7 flex flex-wrap gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-[#FFE66D] px-4 py-3 text-sm font-bold transition hover:-translate-y-1 hover:shadow-[3px_3px_0px_0px_#000] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              Live Demo
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-white px-4 py-3 text-sm font-bold transition hover:-translate-y-1 hover:shadow-[3px_3px_0px_0px_#000] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              <FaGithub size={17} aria-hidden="true" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

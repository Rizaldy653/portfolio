"use client";

import ProjectCard from "@/components/projectCard";
import { projects } from "@/data/project";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.priority === 1);

  return (
    <div className="mt-16 w-full">
      <div className="flex items-center gap-4 pb-2">
        <h2 className="shrink-0 font-poppins text-3xl font-bold text-[#FFE66D] text-shadow-brutal text-stroke-brutal">
          Projects
        </h2>

        <div className="h-[3px] flex-1 bg-black" />
      </div>

      <div className="mb-5 grid grid-cols-1 items-center justify-center gap-5 pt-3 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.length > 0 ? (
          featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className="col-span-full py-10 text-center font-poppins text-lg">
            More projects coming soon.
          </p>
        )}
      </div>
    </div>
  );
}

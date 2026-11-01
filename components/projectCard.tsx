import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "./projects/project-data";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border-2 border-black bg-[#FFFDF5] shadow-[4px_4px_0px_#000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]">
      {/* Project Image */}
      <div className="relative aspect-video w-full overflow-hidden border-b-2 border-black bg-neutral-200">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-poppins text-xl font-black leading-tight text-black sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm font-medium leading-relaxed text-neutral-600">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-black bg-white px-2.5 py-1 text-xs font-semibold text-black"
            >
              {technology}
            </span>
          ))}

          {project.technologies.length > 3 && (
            <span className="rounded-md border border-black bg-white px-2.5 py-1 text-xs font-semibold text-black">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex gap-3 pt-6">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-black bg-white px-3 py-3 text-sm font-bold text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              <FaGithub size={17} />
              GitHub
              <ArrowUpRight size={15} />
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} demo`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-black bg-[#FFE66D] px-3 py-3 text-sm font-bold text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              View Demo
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

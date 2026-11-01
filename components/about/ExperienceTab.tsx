// components/about/ExperienceTab.tsx

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
} from "lucide-react";

import AboutSectionHeading from "@/components/about/AboutSectionHeading";

import { experience, selectedProjects } from "@/data/about";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

export default function ExperienceTab() {
  return (
    <section className="space-y-10">
      <AboutSectionHeading
        number="04"
        title="Experience & projects"
        description="Professional experience and selected projects where I've applied my technical skills."
      />

      {/* Professional Experience */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center border-2 border-black bg-[#FFE66D]">
            <BriefcaseBusiness className="size-5" />
          </div>

          <h3 className="text-lg font-black uppercase tracking-wide">
            Professional Experience
          </h3>
        </div>

        {experience.map((item) => (
          <Card
            key={`${item.organization}-${item.position}`}
            className="rounded-none border-2 border-black bg-white shadow-[6px_6px_0px_0px_#000]"
          >
            <CardContent className="p-5 sm:p-7">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <Badge className="mb-3 rounded-none border-2 border-black bg-[#FFE66D] text-black">
                    {item.type}
                  </Badge>

                  <h4 className="text-xl font-black sm:text-2xl">
                    {item.position}
                  </h4>

                  <p className="mt-2 font-semibold">{item.organization}</p>
                </div>

                <p className="w-fit shrink-0 border-2 border-black px-3 py-2 text-xs font-bold uppercase tracking-wide">
                  {item.period}
                </p>
              </div>

              <p className="mb-5 text-sm leading-7 text-muted-foreground sm:text-base">
                {item.description}
              </p>

              <h5 className="mb-3 text-sm font-black uppercase tracking-wide">
                Responsibilities
              </h5>

              <ul className="space-y-3">
                {item.responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="flex items-start gap-3 text-sm leading-7 sm:text-base"
                  >
                    <span className="mt-2 size-2 shrink-0 border border-black bg-[#FFE66D]" />

                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t-2 border-dashed border-black pt-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest">
                  Technologies & Tools
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <Badge
                      key={technology}
                      className="rounded-none border-2 border-black bg-white px-3 py-1 font-semibold text-black"
                    >
                      {technology}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Selected Projects */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center border-2 border-black bg-[#FFE66D]">
            <Code2 className="size-5" />
          </div>

          <h3 className="text-lg font-black uppercase tracking-wide">
            Selected Projects
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {selectedProjects.map((project) => (
            <Card
              key={project.name}
              className="flex h-full flex-col rounded-none border-2 border-black bg-white shadow-[5px_5px_0px_0px_#000] transition-transform hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_#000]"
            >
              <CardHeader>
                <Badge className="w-fit rounded-none border-2 border-black bg-[#FFE66D] text-black">
                  {project.category}
                </Badge>

                <CardTitle className="text-xl font-black leading-snug">
                  {project.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col">
                <p className="text-sm leading-7 text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Badge
                      key={technology}
                      className="rounded-none border border-black bg-white text-xs font-semibold text-black"
                    >
                      {technology}
                    </Badge>
                  ))}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-sm font-bold underline decoration-2 underline-offset-4"
                  >
                    View Project
                    <ArrowUpRight className="size-4" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-start gap-3 border-2 border-black bg-[#FFE66D] p-4 shadow-[4px_4px_0px_0px_#000]">
          <ExternalLink className="mt-0.5 size-5 shrink-0" />

          <p className="text-sm leading-6">
            Explore my portfolio and GitHub profile to discover more of my
            software development work.
          </p>
        </div>
      </section>
    </section>
  );
}

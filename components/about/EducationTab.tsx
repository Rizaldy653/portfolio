import { FaGithub } from "react-icons/fa";

import AboutSectionHeading from "@/components/about/AboutSectionHeading";

import { education } from "@/data/about";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

export default function EducationTab() {
  return (
    <section className="space-y-8">
      <AboutSectionHeading
        title="My academic journey"
        description="The academic foundation behind my technical knowledge and software development skills."
      />

      {/* Education */}
      <Card className="rounded-none border-2 border-black bg-white shadow-[6px_6px_0px_0px_#000]">
        <CardContent className="p-5 sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {education.period}
                </p>

                <h3 className="text-xl font-black sm:text-2xl">
                  {education.institution}
                </h3>

                <p className="mt-2 text-sm font-semibold sm:text-base">
                  {education.degree}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {education.abbreviation}
                </p>
              </div>
            </div>

            <div className="shrink-0 border-2 border-black bg-[#FFE66D] p-4 sm:text-right">
              <p className="text-xs font-bold uppercase tracking-wider">GPA</p>

              <p className="mt-1 text-2xl font-black">{education.gpa}</p>
            </div>
          </div>

          <div className="mt-6 border-t-2 border-dashed border-black pt-5">
            <h4 className="mb-2 font-black uppercase">Academic Background</h4>

            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              {education.description}
            </p>
          </div>

          <div className="mt-5">
            <h4 className="mb-3 text-sm font-black uppercase">
              Areas of Study
            </h4>

            <div className="flex flex-wrap gap-2">
              {education.focusAreas.map((area) => (
                <Badge
                  key={area}
                  className="rounded-none border-2 border-black bg-white px-3 py-1 font-semibold text-black hover:bg-[#FFE66D]"
                >
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Thesis */}
      <Card className="rounded-none border-2 border-black bg-[#FFE66D] shadow-[6px_6px_0px_0px_#000]">
        <CardHeader>
          <p className="text-xs font-bold uppercase tracking-widest">
            Undergraduate Thesis
          </p>

          <CardTitle className="text-2xl font-black">
            {education.thesis.name}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <h3 className="mb-4 text-lg font-bold leading-snug sm:text-xl">
            {education.thesis.title}
          </h3>

          <p className="mb-5 text-sm leading-7 sm:text-base">
            {education.thesis.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {education.thesis.technologies.map((technology) => (
              <Badge
                key={technology}
                className="rounded-none border-2 border-black bg-white px-3 py-1 font-semibold text-black"
              >
                {technology}
              </Badge>
            ))}
          </div>

          <a
            href={education.thesis.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 border-2 border-black bg-white px-4 py-2 text-sm font-bold shadow-[3px_3px_0px_0px_#000] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          >
            <FaGithub className="size-4" />
            Explore SITILAP
          </a>
        </CardContent>
      </Card>
    </section>
  );
}

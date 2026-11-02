// components/about/ExperienceTab.tsx

import { BriefcaseBusiness } from "lucide-react";

import AboutSectionHeading from "@/components/about/AboutSectionHeading";

import { experience } from "@/data/about";

import { Card, CardContent } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

export default function ExperienceTab() {
  return (
    <section className="space-y-10">
      <AboutSectionHeading
        title="Experience & projects"
        description="Professional experience where I've applied my technical skills."
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
    </section>
  );
}

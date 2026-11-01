"use client";

import { experiences } from "@/data/data";
import ExperienceCard from "@/components/experienceCard";

export default function Experiences() {
  const featuredExperiences = experiences.filter(
    (experience) => experience.featured,
  );

  return (
    <div className="mt-16 w-full">
      <div className="flex items-center gap-4 pb-2">
        <h2 className="shrink-0 font-poppins text-3xl font-bold text-[#FFE66D] text-shadow-brutal text-stroke-brutal">
          Experience
        </h2>

        <div className="h-[3px] flex-1 bg-black" />
      </div>

      <div className="mb-5 grid grid-cols-1 items-stretch gap-5 pt-3 lg:grid-cols-2">
        {featuredExperiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
}

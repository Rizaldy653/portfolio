import type { Experience } from "@/data/data";

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border-2 border-black bg-[#FFFDF5] p-5 shadow-[4px_4px_0px_#000]">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-poppins text-lg font-bold text-black">
            {experience.position}
          </h3>

          <p className="text-sm font-medium text-neutral-700">
            {experience.organization}
          </p>
        </div>

        <span className="shrink-0 rounded-md border-2 border-black bg-[#FFE66D] px-2 py-1 text-xs font-bold">
          Internship
        </span>
      </div>

      {/* Period and Location */}
      <div className="flex flex-wrap justify-between gap-2 text-xs text-neutral-500">
        <span>{experience.period}</span>
        <span>{experience.location}</span>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-neutral-700">
        {experience.description}
      </p>

      {/* Technologies */}
      <div className="mt-auto flex flex-wrap gap-2">
        {experience.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-black bg-white px-2 py-1 text-xs font-medium text-black"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}

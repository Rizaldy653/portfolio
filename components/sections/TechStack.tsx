import TechCard from "@/components/techCard";
import { techStack } from "@/data/data";

export default function TechStack() {
  return (
    <section className="mt-16 w-full">
      <div className="flex items-center gap-4">
        <h2 className="shrink-0 font-poppins text-3xl font-bold text-[#FFE66D] text-shadow-brutal text-stroke-brutal">
          Tech Stack
        </h2>

        <div className="h-[3px] flex-1 bg-black" />
      </div>

      <div className="grid grid-cols-1 items-stretch gap-5 pt-3 md:grid-cols-2 lg:grid-cols-3">
        {techStack.map((item) => (
          <TechCard key={item.title} title={item.title} items={item.items} />
        ))}
      </div>
    </section>
  );
}

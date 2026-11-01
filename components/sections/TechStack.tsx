import TechCard from "@/components/techCard";

const data = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "PHP", "Python", "Java", "C++", "C#"],
  },
  {
    title: "Backends",
    items: ["Node.js", "Laravel", "Spring"],
  },
];
export default function TechStack() {
  return (
    <div className="w-full mt-16">
      <div className="flex items-center gap-4">
        <h2 className="shrink-0 font-poppins text-3xl font-bold text-[#FFE66D] text-shadow-brutal text-stroke-brutal">
          Tech Stack
        </h2>
        <div className="h-[3px] flex-1 bg-black" />
      </div>

      <div className="grid grid-cols-1 justify-center items-center pt-3 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <TechCard key={index} title={item.title} children={item.items} />
        ))}
      </div>
    </div>
  );
}

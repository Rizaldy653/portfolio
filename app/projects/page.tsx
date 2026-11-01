import ProjectShowcase from "@/components/projects/ProjectShowcase";

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-20 pt-28 sm:px-8 sm:pt-36 lg:px-10 lg:pt-44">
      {/* Page heading */}
      <header className="mb-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-500">
          Portfolio
        </p>

        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          My Projects<span className="text-[#D4A900]">.</span>
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
          Explore the applications and backend systems I have built. Select a
          project to see its details, technologies, and links.
        </p>
      </header>

      {/* Interactive project showcase */}
      <ProjectShowcase />
    </main>
  );
}

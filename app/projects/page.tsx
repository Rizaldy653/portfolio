import type { Metadata } from "next";

import ProjectShowcase from "@/components/projects/ProjectShowcase";

export const metadata: Metadata = {
  title: "My Projects | Rizaldy Kusuma",
  description:
    "Explore the applications and backend systems I have built. Select a project to see its details, technologies, and links.",
};

export default function ProjectsPage() {
  return (
    <div
      className="flex min-h-screen flex-col items-center"
      style={{
        backgroundImage: "url('/pattern2.svg')",
        backgroundRepeat: "repeat",
      }}
    >
      <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-16 lg:px-8">
        <header className="mb-10">
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-[#D97706]">My</span> Projects.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
            Explore the applications and backend systems I have built. Select a
            project to see its details, technologies, and links.
          </p>
        </header>

        <ProjectShowcase />
      </main>
    </div>
  );
}

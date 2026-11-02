import type { Metadata } from "next";

import AboutTabs from "@/components/about/AboutTabs";

export const metadata: Metadata = {
  title: "About Me | Rizaldy Kusuma",
  description:
    "Learn more about Rizaldy Kusuma, including his profile, education, certifications, and software development experience.",
};

export default function AboutPage() {
  return (
    <div
      className="flex min-h-screen flex-col items-center"
      style={{
        backgroundImage: "url('/pattern3.svg')",
        backgroundRepeat: "repeat",
      }}
    >
      <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-16 lg:px-8">
        <header className="mb-8 space-y-4 sm:mb-10">
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            About <span className="text-[#D97706]">Me.</span>
          </h1>

          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            My background, academic journey, and experience building software
            solutions.
          </p>
        </header>

        <AboutTabs />
      </main>
    </div>
  );
}

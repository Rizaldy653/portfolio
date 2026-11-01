// components/about/ProfileTab.tsx

import type { ReactNode } from "react";

import { ArrowUpRight, Code2, Heart, UserRound } from "lucide-react";

import AboutSectionHeading from "@/components/about/AboutSectionHeading";

import { aboutProfile } from "@/data/about";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function InfoCard({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: ReactNode;
}) {
  return (
    <Card className="h-full rounded-none border-2 border-black bg-white shadow-[5px_5px_0px_0px_#000]">
      <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-3">
        <div className="flex size-10 items-center justify-center border-2 border-black bg-[#FFE66D]">
          {icon}
        </div>

        <CardTitle className="text-base font-black uppercase">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-6">
              <span className="mt-2 size-2 shrink-0 border border-black bg-[#FFE66D]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function ProfileTab() {
  return (
    <section className="space-y-8">
      <AboutSectionHeading
        number="01"
        title="A little about me"
        description="My background, interests, and approach to software development."
      />

      {/* Introduction */}
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <Card className="rounded-none border-2 border-black bg-[#FFE66D] shadow-[6px_6px_0px_0px_#000]">
          <CardContent className="p-5 sm:p-7">
            <div className="mb-5 flex size-12 items-center justify-center border-2 border-black bg-white">
              <UserRound className="size-6" />
            </div>

            <p className="mb-2 text-sm font-bold uppercase tracking-widest">
              Hello, I'm
            </p>

            <h3 className="mb-4 text-3xl font-black leading-tight sm:text-4xl">
              {aboutProfile.name}
            </h3>

            <p className="mb-4 text-lg font-bold">{aboutProfile.headline}</p>

            <p className="mb-4 text-sm leading-7 sm:text-base">
              {aboutProfile.introduction}
            </p>

            <p className="text-sm leading-7 sm:text-base">
              {aboutProfile.description}
            </p>

            <a
              href={aboutProfile.github}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-2 border-2 border-black bg-white px-4 py-2 text-sm font-bold shadow-[3px_3px_0px_0px_#000] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
            >
              Visit GitHub
              <ArrowUpRight className="size-4" />
            </a>
          </CardContent>
        </Card>

        {/* Quick facts */}
        <Card className="rounded-none border-2 border-black bg-white shadow-[6px_6px_0px_0px_#000]">
          <CardHeader>
            <CardTitle className="text-lg font-black uppercase">
              Quick Facts
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-0">
            {aboutProfile.facts.map((fact, index) => (
              <div
                key={fact.label}
                className={`space-y-1 py-4 ${
                  index !== aboutProfile.facts.length - 1
                    ? "border-b-2 border-dashed border-black"
                    : ""
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {fact.label}
                </p>

                <p className="break-words text-sm font-semibold leading-6">
                  {fact.value}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Focus and values */}
      <div className="grid gap-6 md:grid-cols-2">
        <InfoCard
          title="Current Focus"
          items={aboutProfile.focus}
          icon={<Code2 className="size-5" />}
        />

        <InfoCard
          title="What I Value"
          items={aboutProfile.values}
          icon={<Heart className="size-5" />}
        />
      </div>
    </section>
  );
}

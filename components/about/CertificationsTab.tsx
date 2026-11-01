// components/about/CertificationsTab.tsx

import { ArrowUpRight, Award, BookOpen, ExternalLink } from "lucide-react";

import AboutSectionHeading from "@/components/about/AboutSectionHeading";

import { certifications } from "@/data/about";

import { Card, CardContent } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

export default function CertificationsTab() {
  return (
    <section className="space-y-8">
      <AboutSectionHeading
        number="03"
        title="Learning & credentials"
        description="Professional certifications, completed courses, and additional learning."
      />

      {certifications.length === 0 ? (
        <Card className="rounded-none border-2 border-black bg-[#FFE66D] shadow-[6px_6px_0px_0px_#000]">
          <CardContent className="flex flex-col items-start p-6 sm:p-10">
            <div className="mb-5 flex size-14 items-center justify-center border-2 border-black bg-white">
              <BookOpen className="size-7" />
            </div>

            <h3 className="text-2xl font-black">Always learning.</h3>

            <p className="mt-3 max-w-xl text-sm leading-7 sm:text-base">
              I'm continuously developing my skills through hands-on projects,
              technical documentation, and independent learning. This section
              will showcase my certifications and completed courses as I add
              them.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((certification) => (
            <Card
              key={`${certification.name}-${certification.issuer}`}
              className="rounded-none border-2 border-black bg-white shadow-[5px_5px_0px_0px_#000]"
            >
              <CardContent className="flex h-full flex-col p-5">
                <div className="mb-4 flex size-12 items-center justify-center border-2 border-black bg-[#FFE66D]">
                  <Award className="size-6" />
                </div>

                <Badge className="mb-3 w-fit rounded-none border-2 border-black bg-white text-black">
                  {certification.category === "course"
                    ? "Course"
                    : "Certification"}
                </Badge>

                <h3 className="text-lg font-black leading-snug">
                  {certification.name}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {certification.issuer}
                </p>

                {certification.date && (
                  <p className="mt-3 text-xs font-bold uppercase tracking-wider">
                    {certification.date}
                  </p>
                )}

                {certification.credentialId && (
                  <p className="mt-2 break-all text-xs text-muted-foreground">
                    Credential ID: {certification.credentialId}
                  </p>
                )}

                {certification.credentialUrl && (
                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-sm font-bold underline decoration-2 underline-offset-4"
                  >
                    View Credential
                    <ArrowUpRight className="size-4" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="flex items-start gap-3 border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_#000]">
        <ExternalLink className="mt-0.5 size-5 shrink-0" />

        <p className="text-sm leading-6">
          Only verified credentials and completed training should be listed
          here. Add the certificate URL when one is available so visitors can
          verify your achievements.
        </p>
      </div>
    </section>
  );
}

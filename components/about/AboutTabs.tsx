// components/about/AboutTabs.tsx

"use client";

import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import ProfileTab from "@/components/about/ProfileTab";
import EducationTab from "@/components/about/EducationTab";
import CertificationsTab from "@/components/about/CertificationsTab";
import ExperienceTab from "@/components/about/ExperienceTab";

const tabItems = [
  {
    value: "profile",
    label: "Profile",
  },
  {
    value: "education",
    label: "Education",
  },
  {
    value: "certifications",
    label: "Certifications",
  },
  {
    value: "experience",
    label: "Experience",
  },
] as const;

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      {/* Desktop navigation */}
      <div className="mb-8 hidden md:block">
        <TabsList className="grid h-auto w-full grid-cols-4 gap-2 rounded-none border-0 bg-transparent p-0">
          {tabItems.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="
                min-h-12 rounded-none border-2 border-black
                bg-white px-3 py-3 text-sm font-bold
                uppercase tracking-wide text-black
                shadow-[4px_4px_0px_0px_#000]
                transition-all
                hover:-translate-y-0.5
                hover:bg-[#FFF4B8]
                data-[state=active]:translate-x-0
                data-[state=active]:translate-y-0
                data-[state=active]:bg-[#FFE66D]
                data-[state=active]:text-black
                data-[state=active]:shadow-[2px_2px_0px_0px_#000]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-black
                focus-visible:ring-offset-2
              "
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {/* Mobile dropdown */}
      <div className="mb-6 md:hidden">
        <label
          htmlFor="about-section-select"
          className="mb-2 block text-sm font-bold uppercase tracking-wide"
        >
          Explore sections
        </label>

        <Select value={activeTab} onValueChange={setActiveTab}>
          <SelectTrigger
            id="about-section-select"
            className="
              h-12 w-full rounded-none border-2 border-black
              bg-[#FFE66D] px-4 font-bold text-black
              shadow-[4px_4px_0px_0px_#000]
              focus:ring-2 focus:ring-black focus:ring-offset-2
            "
          >
            <SelectValue placeholder="Choose a section" />
          </SelectTrigger>

          <SelectContent className="rounded-none border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000]">
            {tabItems.map((tab) => (
              <SelectItem
                key={tab.value}
                value={tab.value}
                className="cursor-pointer rounded-none font-medium focus:bg-[#FFE66D] focus:text-black"
              >
                {tab.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Tab content */}
      <div className="min-w-0">
        <TabsContent value="profile" className="mt-0">
          <ProfileTab />
        </TabsContent>

        <TabsContent value="education" className="mt-0">
          <EducationTab />
        </TabsContent>

        <TabsContent value="certifications" className="mt-0">
          <CertificationsTab />
        </TabsContent>

        <TabsContent value="experience" className="mt-0">
          <ExperienceTab />
        </TabsContent>
      </div>
    </Tabs>
  );
}

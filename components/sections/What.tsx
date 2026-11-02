"use client";

import WhatCard from "@/components/whatCard";
import { what } from "@/data/data";

export default function What() {
  return (
    <section className="mt-16 w-full">
      <div className="flex items-center gap-4 pb-2">
        <h2 className="shrink-0 font-poppins text-3xl font-bold text-[#FFE66D] text-shadow-brutal text-stroke-brutal">
          What I Do
        </h2>

        <div className="h-[3px] flex-1 bg-black" />
      </div>

      <div className="mb-5 grid grid-cols-1 items-stretch gap-5 pt-3 sm:grid-cols-2">
        {what.map((item) => (
          <WhatCard key={item.title} title={item.title} items={item.items} />
        ))}
      </div>
    </section>
  );
}

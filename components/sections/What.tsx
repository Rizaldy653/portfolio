"use client";

import WhatCard from "@/components/whatCard";
import { what } from "@/data/data";

export default function What() {
  return (
    <div className="w-full mt-16">
      <div className="flex items-center gap-4 pb-2">
        <h2 className="shrink-0 font-poppins text-3xl font-bold text-[#FFE66D] text-shadow-brutal text-stroke-brutal">
          What I Do
        </h2>
        <div className="h-[3px] flex-1 bg-black" />
      </div>

      <div className="grid grid-cols-2 justify-center items-center pt-3 gap-5 mb-5">
        {what.map((item, index) => (
          <WhatCard key={index} title={item.title} children={item.items} />
        ))}
      </div>
    </div>
  );
}

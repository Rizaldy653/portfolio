"use client";

import type { ReactNode } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

interface WhatCardProps {
  title: string;
  children: ReactNode[];
}

export default function WhatCard({ title, children }: WhatCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 lg:flex-row">
        {children.map((item, index) => (
          <div
            key={index}
            className="font-poppins flex items-center gap-2 flex-wrap"
          >
            {index > 0 && <span>•</span>}
            <span>{item}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

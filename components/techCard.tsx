"use client";

import type { ReactNode } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

interface TechCardProps {
  title: string;
  children: ReactNode[];
}

export default function TechCard({ title, children }: TechCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-wrap gap-2 lg:flex-row">
        {children.map((item, index) => (
          <span key={index} className="font-poppins">
            {item}
          </span>
        ))}
      </CardContent>
    </Card>
  );
}

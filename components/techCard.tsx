"use client";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from "./ui/card";

export default function TechCard({ title, children }) {
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

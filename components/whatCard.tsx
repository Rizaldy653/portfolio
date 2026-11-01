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

export default function WhatCard({ title, children }) {
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

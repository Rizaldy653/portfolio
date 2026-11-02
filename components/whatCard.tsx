import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface WhatCardProps {
  title: string;
  items: string[];
}

export default function WhatCard({ title, items }: WhatCardProps) {
  return (
    <Card className="h-full rounded-none border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000]">
      <CardHeader className="pb-3">
        <CardTitle className="font-poppins text-base font-bold sm:text-lg">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ul className="flex flex-col gap-3">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 font-poppins text-sm leading-6"
            >
              <span className="mt-2 size-2 shrink-0 border border-black bg-[#FFE66D]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

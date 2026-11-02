import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface TechCardProps {
  title: string;
  items: string[];
}

export default function TechCard({ title, items }: TechCardProps) {
  return (
    <Card className="h-full rounded-none border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000]">
      <CardHeader className="pb-3">
        <CardTitle className="font-poppins text-base font-bold sm:text-lg">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ul className="flex flex-wrap gap-2">
          {items.map((item) => (
            <li
              key={item}
              className="border-2 border-black bg-[#FFE66D] px-3 py-1 font-poppins text-xs font-semibold sm:text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

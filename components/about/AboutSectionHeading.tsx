// components/about/AboutSectionHeading.tsx

interface AboutSectionHeadingProps {
  number: string;
  title: string;
  description: string;
}

export default function AboutSectionHeading({
  number,
  title,
  description,
}: AboutSectionHeadingProps) {
  return (
    <header className="mb-6 space-y-3">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
        {number} / About
      </p>

      <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
        {title}
      </h2>

      <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
        {description}
      </p>
    </header>
  );
}

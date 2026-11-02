// components/about/AboutSectionHeading.tsx

interface AboutSectionHeadingProps {
  title: string;
  description: string;
}

export default function AboutSectionHeading({
  title,
  description,
}: AboutSectionHeadingProps) {
  return (
    <header className="mb-6 space-y-3">
      <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
        {title}
      </h2>

      <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
        {description}
      </p>
    </header>
  );
}

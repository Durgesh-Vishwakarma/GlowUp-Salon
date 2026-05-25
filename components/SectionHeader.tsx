import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center"
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-9 max-w-2xl md:mb-12",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <p className="eyebrow mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold leading-[1.05] text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

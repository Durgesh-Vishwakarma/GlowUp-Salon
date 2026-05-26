import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-3xl md:mb-14",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <p
        className={cn(
          "mb-4 text-[11px] font-bold uppercase tracking-[0.26em]",
          invert ? "text-[#B87955]" : "text-[#6E2438]"
        )}
      >
        {eyebrow}
      </p>

      <h2
        className={cn(
          "font-display text-4xl font-semibold leading-[0.98] tracking-[-0.02em] sm:text-5xl md:text-6xl",
          invert ? "text-white" : "text-[#111111]"
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-7 md:text-lg",
            align === "center" ? "mx-auto" : "",
            invert ? "text-white/62" : "text-[#5F5752]"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
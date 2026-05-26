import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-[-0.01em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#5B0623] text-white shadow-[0_18px_45px_rgba(91,6,35,0.24)] hover:-translate-y-0.5 hover:bg-[#711034] hover:shadow-[0_24px_60px_rgba(91,6,35,0.28)]",
        secondary:
          "border border-[#E7DDD3] bg-white text-[#111111] shadow-[0_14px_35px_rgba(17,17,17,0.08)] hover:-translate-y-0.5 hover:border-[#D8C9BC] hover:bg-[#FAF7F2]",
        ghost:
          "text-[#111111] hover:bg-[#F1E8DF]",
        outline:
          "border border-[#111111]/15 bg-transparent text-[#111111] hover:-translate-y-0.5 hover:border-[#111111]/30 hover:bg-white/70",
        dark:
          "bg-[#111315] text-white shadow-[0_18px_45px_rgba(17,19,21,0.22)] hover:-translate-y-0.5 hover:bg-[#1B1D20]",
        copper:
          "bg-[#B87955] text-white shadow-[0_18px_45px_rgba(184,121,85,0.22)] hover:-translate-y-0.5 hover:bg-[#A86745]"
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-7 text-base",
        xl: "h-16 px-9 text-base",
        icon: "h-11 w-11"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);

Button.displayName = "Button";

export { Button, buttonVariants };
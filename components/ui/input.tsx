import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "h-[52px] w-full rounded-full border border-[#E7DDD3] bg-white px-5 text-sm text-[#111111] shadow-[0_10px_30px_rgba(17,17,17,0.05)] outline-none transition placeholder:text-[#8A817B] focus:border-[#5B0623] focus:ring-4 focus:ring-[#5B0623]/10",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);

Input.displayName = "Input";

export { Input };
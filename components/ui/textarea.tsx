import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "min-h-28 w-full resize-none rounded-3xl border border-[#E7DDD3] bg-white px-5 py-4 text-sm text-[#111111] shadow-[0_10px_30px_rgba(17,17,17,0.05)] outline-none transition placeholder:text-[#8A817B] focus:border-[#5B0623] focus:ring-4 focus:ring-[#5B0623]/10",
      className
    )}
    ref={ref}
    {...props}
  />
));

Textarea.displayName = "Textarea";

export { Textarea };
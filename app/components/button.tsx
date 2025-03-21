import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Button({
  children,
  className,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={twMerge(
        "bg-vivid-blue flex items-center justify-center gap-x-2 self-stretch rounded-xl p-4.5 font-bold text-white",
        className,
      )}
    >
      {children}
    </button>
  );
}

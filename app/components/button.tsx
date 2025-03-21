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
        "bg-vivid-blue flex w-full max-w-[350px] items-center justify-center gap-x-2 rounded-xl p-4.5 font-bold text-white md:text-lg",
        className,
      )}
    >
      {children}
    </button>
  );
}

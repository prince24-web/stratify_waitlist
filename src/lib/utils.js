import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// cn function merges Tailwind + conditional classNames
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

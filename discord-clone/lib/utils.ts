import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combining clsx or classnames with tailwind-merge allows us to 
 * conditionally join Tailwind CSS classes in classNames together 
 * without style conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

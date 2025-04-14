import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


/**
 * Combines class names using clsx and merges Tailwind CSS classes using tailwind-merge.
 * @param inputs - Class names or conditional class objects.
 * @returns A single merged class name string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts a string to capital case.
 * @param title - The string to convert.
 * @returns The capitalized string.
 * @example
 * toCapitalCase("hello world") // "Hello World"
 * toCapitalCase("hello") // "Hello"
 * toCapitalCase("hELLO") // "Hello"
 * toCapitalCase("hELLO wORLD") // "Hello World"
 */
export const toCapitalCase = (title: string) => {
    const len: number = title.length;
    let capitalized: string = "";
    for(let i = 0; i<len; i++){
        if(i === 0) {
            capitalized += title.charAt(i).toUpperCase();
            continue;
        }
        if(title.charAt(i-1) === ' '){
            capitalized += title.charAt(i).toUpperCase();
            continue;
        }
        capitalized += title.charAt(i);
    }
    return capitalized;
}

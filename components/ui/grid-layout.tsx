"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

// Grid Wrapper Component
interface GridProps {
    children: ReactNode;
    cols?: string; // Responsive grid column settings
    gap?: string; // Tailwind gap classes like 'gap-4', 'gap-6', etc.
    className?: string;
}

/**
 * Grid component for creating a responsive grid layout.
 * @param {ReactNode} children - Content to be displayed in the grid.
 * @param {string} [cols] - Responsive grid column settings (default: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4").
 * @param {string} [gap] - Tailwind gap classes (default: "gap-6").
 * @param {string} [className] - Additional custom classes (optional).
 * @returns {JSX.Element} Rendered Grid component.
 * @example
 * <Grid cols="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" gap="gap-4">
 *  <GridCol>Item 1</GridCol>
 *  <GridCol>Item 2</GridCol>
 * </Grid>
 */
const Grid = ({
    children,
    cols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4",
    gap = "gap-6",
    className,
}: GridProps) => {
    return <div className={cn("grid", cols, gap, className)}>{children}</div>;
};

// **Predefined Variants for Common Layouts**
const predefinedSpans = {
    card: "col-span-1", // Default for cards
    wide: "col-span-1 sm:col-span-2 2xl:col-span-3", // Wide cards
    full: "col-span-1 sm:col-span-2 lg:col-span-3 2xl:col-span-4", // Full-width cards
} as const;

// Grid Column Component (Predefined Variants)
interface GridColProps {
    children: ReactNode;
    colSpan?: string; // Custom col-span if needed
    variant?: keyof typeof predefinedSpans; // Predefined variant options
    className?: string;
}
/**
 * GridCol component for defining grid columns with optional predefined spans.
 * @param {ReactNode} children - Content to be displayed in the column.
 * @param {string} [colSpan] - Custom col-span class (optional).
 * @param {keyof typeof predefinedSpans} [variant] - Predefined variant for col-span (optional).
 * @param {string} [className] - Additional custom classes (optional).
 * @returns {JSX.Element} Rendered GridCol component.
 * @example
 * <GridCol variant="card">Card Content</GridCol>
 */
const GridCol = ({ children, colSpan, variant = "card", className }: GridColProps) => {
    return <div className={cn(colSpan ?? predefinedSpans[variant], className)}>{children}</div>;
};

export { Grid, GridCol };

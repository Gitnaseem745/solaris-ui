'use client';

import { Grid, GridCol } from "@/components/ui/grid-layout";

export default function GridLayoutDemo() {
  return (
    <div className="flex justify-center items-center p-8">
      <Grid cols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4" gap="gap-6">
        {/* Card Variant */}
        <GridCol variant="card">
          <div className="bg-neutral-800 text-white p-6 rounded-lg shadow-md flex flex-col h-full">
            <h3 className="text-lg font-semibold">Normal Card</h3>
            <p className="text-sm text-neutral-400 mt-auto">This is a simple card.</p>
          </div>
        </GridCol>

        {/* Wide Variant */}
        <GridCol variant="wide">
          <div className="bg-neutral-800 text-white p-6 rounded-lg shadow-md flex flex-col h-full">
            <h3 className="text-lg font-semibold">Wide Card</h3>
            <p className="text-sm text-neutral-400 mt-auto">
              This card spans multiple columns and is great for larger content.
            </p>
          </div>
        </GridCol>

        {/* Full-Width Variant */}
        <GridCol variant="full">
          <div className="bg-neutral-800 text-white p-6 rounded-lg shadow-md flex flex-col h-full">
            <h3 className="text-lg font-semibold">Full-Width Card</h3>
            <p className="text-sm text-neutral-400 mt-auto">
              This card spans the entire width of the grid.
            </p>
          </div>
        </GridCol>
      </Grid>
    </div>
  );
}

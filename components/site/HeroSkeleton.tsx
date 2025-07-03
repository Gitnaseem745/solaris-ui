import { FC } from "react";

interface HeroSkeletonProps {
  className?: string;
}

const HeroSkeleton: FC<HeroSkeletonProps> = ({ className = "" }) => {
  return (
    <div className={`relative w-full rounded-lg overflow-hidden shadow-2xl ${className}`}>
      <div className="aspect-[16/9] w-full bg-gradient-to-br from-primary/20 via-background to-secondary/20 rounded-lg border border-border">
        {/* Window-like interface skeleton */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-4xl p-6">
            <div className="w-full h-full bg-card rounded-lg border border-border shadow-sm p-4">
              {/* Window controls */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              {/* Content grid */}
              <div className="grid grid-cols-5 gap-4">
                {/* Sidebar */}
                <div className="col-span-1 space-y-3">
                  <div className="h-8 w-full bg-muted rounded-md"></div>
                  <div className="h-4 w-4/5 bg-muted rounded-md"></div>
                  <div className="h-4 w-full bg-muted rounded-md"></div>
                  <div className="h-4 w-3/4 bg-muted rounded-md"></div>
                </div>
                
                {/* Main content */}
                <div className="col-span-4 bg-background rounded-md p-4 border border-border">
                  <div className="h-6 w-1/3 bg-muted rounded-md mb-4"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="h-20 bg-primary/10 rounded-md"></div>
                      <div className="h-4 w-full bg-muted rounded-md"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-20 bg-secondary/10 rounded-md"></div>
                      <div className="h-4 w-full bg-muted rounded-md"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-20 bg-accent/10 rounded-md"></div>
                      <div className="h-4 w-full bg-muted rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;

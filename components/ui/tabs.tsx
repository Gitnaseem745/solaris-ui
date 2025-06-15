'use client';

import React, { createContext, useContext, useState, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

// Define interfaces for our components
interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
}

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

// Create context for tabs
const TabsContext = createContext<TabsContextValue | undefined>(undefined);

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs provider");
  }
  return context;
};

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, defaultValue, value: controlledValue, onValueChange, children, ...props }, ref) => {
    // Use controlled or uncontrolled state
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue || "");
    
    // Determine if the component is controlled or uncontrolled
    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : uncontrolledValue;
    
    // Handle value change
    const handleValueChange = (newValue: string) => {
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }
      onValueChange?.(newValue);
    };

    return (
      <TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
        <div
          className={cn(
            "w-full h-full flex flex-col justify-center items-start gap-4",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);

Tabs.displayName = "Tabs";

const TabsList = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={cn(
        "inline-flex justify-center items-center gap-1 h-9 bg-neutral-700 rounded-sm p-1",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);

TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, ...props }, ref) => {
    const { value: selectedValue, onValueChange } = useTabs();
    const isActive = selectedValue === value;

    return (
      <button
        className={cn(
          "inline-flex justify-center items-center line-clamp-1 whitespace-nowrap overflow-hidden px-3 py-1 text-sm transition-colors rounded-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          isActive 
            ? "bg-neutral-800 text-white" 
            : "bg-transparent text-neutral-200 hover:bg-neutral-500",
          className
        )}
        onClick={() => onValueChange(value)}
        role="tab"
        aria-selected={isActive}
        data-state={isActive ? "active" : "inactive"}
        ref={ref}
        {...props}
      />
    );
  }
);

TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, children, ...props }, ref) => {
    const { value: selectedValue } = useTabs();
    const isActive = selectedValue === value;

    if (!isActive) return null;

    return (
      <div
        className={cn(
          "w-full h-full bg-neutral-700 rounded-sm p-2",
          className
        )}
        role="tabpanel"
        data-state={isActive ? "active" : "inactive"}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };

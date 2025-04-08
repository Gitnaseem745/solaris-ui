"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiSettings } from "react-icons/fi";

const themes = ["light", "dark"]; // Add more themes here as needed

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensure the component only runs on the client
  }, []);

  const ToggleTheme = () => {
    const currentIndex = themes.indexOf(theme || "light");
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  // Render icons based on the current theme
  const renderIcon = () => {
    if (!mounted) return <FiSettings className="w-5 h-5" />; // Default loading icon
    switch (theme) {
      case "light":
        return <FiSun className="w-5 h-5" />;
      case "dark":
        return <FiMoon className="w-5 h-5" />;
      default:
        return <FiSettings className="w-5 h-5" />; // Default for additional themes
    }
  };

  return (
    <button
      onClick={ToggleTheme}
      className="p-2 rounded-md text-foreground hover:bg-white/5 hover:backdrop-blur-sm"
    >
      {renderIcon()}
    </button>
  );
}

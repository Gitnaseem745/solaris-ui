"use client"

import { useState } from "react"
import { Menu, X, Palette } from "lucide-react"
import { predefinedThemes } from "@/themes/themes"
import { themeColors } from "@/types/themes"
import ThemeSidebar from "@/components/site/ThemeSidebar"
import ThemePreview from "@/components/site/ThemePreview"
import GoBack from "@/components/site/GoBack"
import ColorsModal from "@/components/site/CopyColorsModal"
import Link from "next/link"

export default function Page() {
    const initialTheme: themeColors = predefinedThemes.lemon.colors
    const [themeColors, setThemeColors] = useState<themeColors>(initialTheme)
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = () => setSidebarOpen((prev) => !prev)

    return (
        <div className="relative min-h-screen flex flex-col overflow-hidden">
            {/* Header */}
            <header
                className="sticky top-0 z-50 w-full px-4 py-3 flex items-center justify-between shadow-sm"
                style={{
                    backgroundColor: themeColors.background,
                    color: themeColors.foreground,
                    borderBottom: `1px solid ${themeColors.border}`,
                }}
            >
                <div className="flex items-center gap-3">
                    {/* Toggle Sidebar Button */}
                    <button
                        id="sidebar-toggle"
                        onClick={toggleSidebar}
                        className="p-2 rounded-md hover:bg-opacity-10 lg:hidden transition-colors"
                        style={{
                            backgroundColor: `${themeColors.primary}20`,
                            color: themeColors.primary,
                        }}
                    >
                        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>

                    {/* Logo and Title */}
                    <Link href={'/'} className="md:flex items-center gap-2 hidden">
                        <Palette size={24} style={{ color: themeColors.primary }} />
                        <h1 className="text-lg font-semibold">SolarisUI Themes</h1>
                    </Link>
                </div>

                {/* Copy Colors Modal */}
                <ColorsModal themeColors={themeColors} />

            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <ThemeSidebar
                    themeColors={themeColors}
                    sidebarOpen={sidebarOpen}
                    setThemeColors={setThemeColors}
                />

                {/* Preview */}
                <ThemePreview themeColors={themeColors} />

                {/* Back Button */}
                <GoBack className="absolute bottom-4 right-4" />
            </div>
        </div>
    )
}

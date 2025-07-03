import { ChevronDown, ChevronRight, Check, Repeat, Sparkles } from "lucide-react"
import { useState } from "react"
import { predefinedThemes, theme } from "@/themes/themes"
import { themeColors } from "@/types/themes"

interface ThemeSidebarProps {
  themeColors: themeColors
  sidebarOpen: boolean
  setThemeColors: React.Dispatch<React.SetStateAction<themeColors>>
}

export default function ThemeSidebar({
  themeColors,
  sidebarOpen,
  setThemeColors,
}: ThemeSidebarProps) {
  const [selectedTheme, setSelectedTheme] = useState<string>("lemon")
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const handleColorChange = (variable: string, color: string) => {
    setThemeColors((prev) => ({
      ...prev,
      [variable]: color,
    }))
  }

  const applyTheme = (themeName: string) => {
    if (predefinedThemes[themeName]) {
      setThemeColors(predefinedThemes[themeName].colors)
      setSelectedTheme(themeName)
    }
  }

  const toggleSection = (sectionName: string) => {
    setActiveSection((prev) => (prev === sectionName ? null : sectionName))
  }

  const randomizeThemeColors = () => {
    setThemeColors((prev) =>
      Object.keys(prev).reduce((acc, key) => {
        acc[key as keyof themeColors] =
          theme.find((section) => section.name === key)?.colors[
            Math.floor(Math.random() * 32)
          ] || prev[key as keyof themeColors]
        return acc
      }, {} as themeColors)
    )
  }

  return (
    <aside
      id="theme-sidebar"
      className={`fixed inset-y-0 left-0 z-40 w-72 lg:pt-1 pt-16 transition-transform duration-300 ease-in-out transform no-scrollbar ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 lg:sticky lg:top-0 lg:h-[calc(100vh-60px)] lg:w-72 overflow-y-auto`}
      style={{
        backgroundColor: themeColors.card,
        color: themeColors["card-foreground"],
        borderRight: `1px solid ${themeColors.border}`,
      }}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Sparkles size={18} />
            Predefined Themes
          </h2>
          <button
            id="randomize-theme"
            onClick={randomizeThemeColors}
            className="p-1 rounded-md hover:bg-opacity-10 transition-colors"
            style={{
              backgroundColor: `${themeColors["secondary-foreground"]}20`,
              color: themeColors.foreground,
            }}
          >
            <Repeat size={16} />
          </button>
        </div>

        {/* Predefined Themes Section */}
        <div className="mb-6">
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(predefinedThemes).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => applyTheme(key)}
                className="p-2 rounded-md text-xs font-medium transition-all"
                style={{
                  backgroundColor: theme.colors.card,
                  color: theme.colors["card-foreground"],
                  borderColor: theme.colors.border,
                  border: `1px solid ${theme.colors.border}`,
                  boxShadow:
                    selectedTheme === key
                      ? `0 0 0 2px ${theme.colors.ring}`
                      : `0 0 0 0 ${theme.colors.ring}`,
                }}
              >
                <div className="flex items-center justify-between">
                  <span>{theme.name}</span>
                  {selectedTheme === key && <Check size={12} />}
                </div>
                <div className="flex mt-2 space-x-1">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: theme.colors.primary }}
                  ></div>
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: theme.colors.secondary }}
                  ></div>
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: theme.colors.accent }}
                  ></div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Theme Sections */}
        <div className="space-y-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
            <Sparkles size={18} />
            Customize Theme
          </h2>
          {theme.map((section) => (
            <div key={section.name} className="rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection(section.name)}
                className="w-full px-3 py-2 flex items-center justify-between rounded-md transition-colors"
                style={{
                  backgroundColor:
                    activeSection === section.name
                      ? `${themeColors.primary}15`
                      : "transparent",
                  color:
                    activeSection === section.name
                      ? themeColors.primary
                      : themeColors["card-foreground"],
                }}
              >
                <span className="font-medium capitalize">
                  {section.name.replace("-", " ")}
                </span>
                {activeSection === section.name ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>

              {activeSection === section.name && (
                <div className="mt-2 p-2 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {section.colors.map((color, index) => (
                      <label key={index} className="relative">
                        <input
                          type="radio"
                          className="sr-only"
                          name={section.name}
                          value={color}
                          checked={themeColors[section.name] === color}
                          onChange={() => handleColorChange(section.name, color)}
                        />
                        <div
                          className="w-8 h-8 rounded-md cursor-pointer transition-all duration-200 flex items-center justify-center"
                          style={{
                            backgroundColor: color,
                            boxShadow:
                              themeColors[section.name] === color
                                ? `0 0 0 2px ${themeColors.primary}`
                                : "none",
                          }}
                        >
                          {themeColors[section.name] === color && (
                            <Check
                              size={14}
                              color={
                                isLightColor(color) ? "#000" : "#fff"
                              }
                            />
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

// Helper function to determine if a color is light or dark
function isLightColor(color: string): boolean {
  let r, g, b
  if (color.startsWith("#")) {
    const hex = color.substring(1)
    r = Number.parseInt(hex.substring(0, 2), 16)
    g = Number.parseInt(hex.substring(2, 4), 16)
    b = Number.parseInt(hex.substring(4, 6), 16)
  } else {
    return false
  }
  const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return brightness > 0.5
}

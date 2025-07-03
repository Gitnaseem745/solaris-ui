'use client';

import { Button } from "@/components/ui/button";
import { Modal, ModalBody, ModalClose, ModalFooter, ModalHeader, ModalTitle } from "@/components/ui/modal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/site/tabs";
import { useState } from "react";
import { themeColors } from "@/types/themes";

interface CopyColorsModalProps {
  themeColors: themeColors;
}

type formatType = "hex" | "rgb" | "rgba" | "hsl" | "oklch";

export default function CopyColorsModal({ themeColors }: CopyColorsModalProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [colorFormat, setColorFormat] = useState<formatType>("hex");

  // Function to convert colors to different formats
  const convertColor = (color: string, format: formatType) => {
    const hexToRgb = (hex: string) => {
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return { r, g, b };
    };
  
    const rgbToHsl = (r: number, g: number, b: number) => {
      r /= 255;
      g /= 255;
      b /= 255;
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h = 0,
        s = 0;
      const lightness = (max + min) / 2; // Renamed `l` to `lightness`
  
      if (max !== min) {
        const d = max - min;
        s = lightness > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
  
      return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(lightness * 100) };
    };
  
    const rgbToOklch = (r: number, g: number, b: number) => {
      // Normalize RGB values to [0, 1]
      r /= 255;
      g /= 255;
      b /= 255;
  
      // Convert RGB to linear-light (sRGB)
      const toLinear = (c: number) =>
        c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      const rLin = toLinear(r);
      const gLin = toLinear(g);
      const bLin = toLinear(b);
  
      // Convert linear-light RGB to XYZ
      const x = rLin * 0.4124564 + gLin * 0.3575761 + bLin * 0.1804375;
      const y = rLin * 0.2126729 + gLin * 0.7151522 + bLin * 0.0721750;
      const z = rLin * 0.0193339 + gLin * 0.1191920 + bLin * 0.9503041;
  
      // Convert XYZ to Lab
      const whitePoint = { x: 0.95047, y: 1.0, z: 1.08883 }; // D65 white point
      const f = (t: number) =>
        t > 0.008856 ? Math.cbrt(t) : (t * 903.3 + 16) / 116;
      const lightness = 116 * f(y / whitePoint.y) - 16; // Renamed `l` to `lightness`
      const a = 500 * (f(x / whitePoint.x) - f(y / whitePoint.y));
      const chromaB = 200 * (f(y / whitePoint.y) - f(z / whitePoint.z)); // Renamed `b` to `chromaB`
  
      // Convert Lab to Oklch
      const chroma = Math.sqrt(a * a + chromaB * chromaB); // Renamed `c` to `chroma`
      const hue = Math.atan2(chromaB, a) * (180 / Math.PI);
      const hueDeg = hue < 0 ? hue + 360 : hue; // Ensure hue is in [0, 360]
  
      return { l: lightness / 100, c: chroma / 100, h: hueDeg }; // Normalize l and c to [0, 1]
    };
  
    if (format === "hex") return color;
  
    const { r, g, b } = hexToRgb(color);
  
    if (format === "rgb") return `rgb(${r}, ${g}, ${b})`;
    if (format === "rgba") return `rgba(${r}, ${g}, ${b}, 1)`;
  
    const { h, s, l } = rgbToHsl(r, g, b);
    if (format === "hsl") return `hsl(${h}, ${s}%, ${l}%)`;
  
    const { l: oklchL, c: oklchC, h: oklchH } = rgbToOklch(r, g, b);
    if (format === "oklch") return `oklch(${oklchL.toFixed(3)} ${oklchC.toFixed(3)} ${oklchH.toFixed(1)})`;
  
    return color;
  };
  // Function to generate CSS variables in the selected format
  const generateCSSVariables = (format: formatType) => {
    const cssVariables = Object.entries(themeColors)
      .map(([key, value]) => `  --${key}: ${convertColor(value, format)};`)
      .join("\n");
    return `:root {\n  --radius: 0.75rem;\n${cssVariables}\n}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCSSVariables(colorFormat));
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000) // Reset copied state after 2 seconds
  }

  return (
    <div className="flex justify-center">
      <Button
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md shadow transition-colors focus:ring-2 ring-ring"
        onClick={() => setModalOpen(true)}
      >
        Copy Theme
      </Button>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <ModalHeader>
          <ModalTitle className="text-foreground">Copy Theme Colors</ModalTitle>
          <ModalClose className="text-foreground" onClick={() => setModalOpen(false)} />
        </ModalHeader>
        <ModalBody>
          <Tabs defaultValue="hex" onValueChange={(value) => setColorFormat(value as formatType)}>
            <TabsList className="bg-neutral-900">
              <TabsTrigger value="hex">Hex</TabsTrigger>
              <TabsTrigger value="rgb">RGB</TabsTrigger>
              <TabsTrigger value="rgba">RGBA</TabsTrigger>
              <TabsTrigger value="hsl">HSL</TabsTrigger>
              <TabsTrigger value="oklch">OKLCH</TabsTrigger>
            </TabsList>
            <TabsContent value="hex">
              <pre className="bg-neutral-900 text-white/50 p-4 rounded-md overflow-auto text-sm">
                {generateCSSVariables("hex")}
              </pre>
            </TabsContent>
            <TabsContent value="rgb">
              <pre className="bg-neutral-900 text-white/50 p-4 rounded-md overflow-auto text-sm">
                {generateCSSVariables("rgb")}
              </pre>
            </TabsContent>
            <TabsContent value="rgba">
              <pre className="bg-neutral-900 text-white/50 p-4 rounded-md overflow-auto text-sm">
                {generateCSSVariables("rgba")}
              </pre>
            </TabsContent>
            <TabsContent value="hsl">
              <pre className="bg-neutral-900 text-white/50 p-4 rounded-md overflow-auto text-sm">
                {generateCSSVariables("hsl")}
              </pre>
            </TabsContent>
            <TabsContent value="oklch">
              <pre className="bg-neutral-900 text-white/50 p-4 rounded-md overflow-auto text-sm">
                {generateCSSVariables("oklch")}
              </pre>
            </TabsContent>
          </Tabs>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" className="text-foreground" onClick={copyToClipboard}>
            {copied ? "Copied!" : "Copy"}
          </Button>
          <Button variant="outline" className="text-foreground" onClick={() => setModalOpen(false)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

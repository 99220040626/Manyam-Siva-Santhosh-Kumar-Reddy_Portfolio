"use client";
import { useState, useEffect } from "react";

export const OS_THEMES = [
  { name: "JARVIS CYAN", primary: "#00F5FF", primaryRgb: "0, 245, 255", secondary: "#7C4DFF", secondaryRgb: "124, 77, 255", accent: "#4ADE80", accentRgb: "74, 222, 128" },
  { name: "F.R.I.D.A.Y VIOLET", primary: "#A855F7", primaryRgb: "168, 85, 247", secondary: "#00F5FF", secondaryRgb: "0, 245, 255", accent: "#38BDF8", accentRgb: "56, 189, 248" },
  { name: "MATRIX EMERALD", primary: "#4ADE80", primaryRgb: "74, 222, 128", secondary: "#00F5FF", secondaryRgb: "0, 245, 255", accent: "#22D3EE", accentRgb: "34, 211, 238" },
  { name: "VISION PRO GOLD", primary: "#F59E0B", primaryRgb: "245, 158, 11", secondary: "#7C4DFF", secondaryRgb: "124, 77, 255", accent: "#00F5FF", accentRgb: "0, 245, 255" },
];

export function useOsTheme() {
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    const t = OS_THEMES[themeIndex];
    const root = document.documentElement;
    root.style.setProperty("--os-primary", t.primary);
    root.style.setProperty("--os-primary-rgb", t.primaryRgb);
    root.style.setProperty("--os-secondary", t.secondary);
    root.style.setProperty("--os-secondary-rgb", t.secondaryRgb);
    root.style.setProperty("--os-accent", t.accent);
    root.style.setProperty("--os-accent-rgb", t.accentRgb);
  }, [themeIndex]);

  const cycleTheme = () => setThemeIndex((prev) => (prev + 1) % OS_THEMES.length);

  return { currentTheme: OS_THEMES[themeIndex], cycleTheme };
}

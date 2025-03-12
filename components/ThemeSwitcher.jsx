"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 border rounded-lg transition-all bg-gray-200 dark:bg-black dark:text-white cursor-pointer"
    >
      {theme === "dark" ? "🌙 Dark Mode" : "☀ Light Mode"}
    </button>
  );
}

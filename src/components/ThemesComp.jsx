"use client"
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { CiDark, CiSun } from "react-icons/ci";

const ThemesComp = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const themeMode = theme === "system" ? systemTheme || "dark" : theme;

  return (
    <div>
      {mounted && (
        themeMode === "dark" ? (
          <CiSun
            size={25}
            className="cursor-pointer"
            onClick={() => setTheme("light")}
          />
        ) : (
          <CiDark
            size={25}
            className="cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        ))
      }
    </div>
  );
};

export default ThemesComp;

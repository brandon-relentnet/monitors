import React, { useEffect, useState } from "react";
import Button from "../Button";

const themes = ["mocha", "macchiato", "frappe", "latte"];
const icons = {
  mocha: ["fas", "cloud-moon"],
  macchiato: ["fas", "moon"],
  frappe: ["fas", "sun"],
  latte: ["fas", "cloud-moon-rain"],
};

const ThemeManager = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "mocha");

  useEffect(() => {
    document.body.classList.remove(...themes);
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleClick = () => {
    setTheme(themes[(themes.indexOf(theme) + 1) % themes.length]);
  };

  return (
    <Button
      icons={icons}
      handleClick={handleClick}
      type={theme}
      arrayName="theme"
    />
  );
};

export default ThemeManager;

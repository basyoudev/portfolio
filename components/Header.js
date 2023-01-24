import { useState } from "react";
import { SunIcon, MoonIcon, Bars3Icon } from "@heroicons/react/24/outline";

import useDarkMode from "../hooks/useDarkMode";
import SmallMenu from "./modals/SmallMenu";

export default function Header() {
  const [colorTheme, setTheme] = useDarkMode();
  const [smallMenuOpen, setSmallMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-center w-full h-16 bg-white border-b dark:border-gray-800 dark:bg-zinc-900">
      <div className="flex items-center w-full max-w-3xl px-3 ">
        <a href="#" className="flex items-center ">
          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-2 text-2xl text-white bg-purple-600 rounded-full ">
            B
          </div>
          <span className="font-semibold opacity-80 dark:font-normal">
            Bassam
          </span>
        </a>
        <div className="items-center justify-end flex-grow hidden sm:flex">
          <a href="#about" className="navLink">
            About
          </a>
          <a href="#services" className="navLink">
            Services
          </a>
          <a href="#projects" className="navLink">
            Projects
          </a>
          <a href="#contact" className="navLink">
            Contact
          </a>
          <button
            className="headerIcon"
            aria-label="Color theme"
            onClick={() => setTheme(colorTheme)}
          >
            {colorTheme === "light" ? (
              <SunIcon className="w-6 h-6 " />
            ) : (
              <MoonIcon className="w-6 h-6 " />
            )}
          </button>
        </div>
        <div className="flex items-center justify-end flex-grow sm:hidden">
          <button
            className="headerIcon"
            aria-label="Color theme"
            onClick={() => setTheme(colorTheme)}
          >
            {colorTheme === "light" ? (
              <SunIcon className="w-6 h-6 " />
            ) : (
              <MoonIcon className="w-6 h-6 " />
            )}
          </button>
          <button
            className="headerIcon"
            aria-label="Small menu"
            onClick={() => setSmallMenuOpen(true)}
          >
            <Bars3Icon className="w-6 h-6 " />
          </button>
        </div>
      </div>
      <SmallMenu
        smallMenuOpen={smallMenuOpen}
        setSmallMenuOpen={setSmallMenuOpen}
      />
    </nav>
  );
}

import { useContext } from "react";
import { ThemeContext } from "theme/ThemeContext";
import { MouseEvent } from "react";

export const ThemeToggle = () => {
    const { dark, toggleTheme } = useContext(ThemeContext);
    const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      typeof toggleTheme !== "undefined" ? toggleTheme() : null;
    };
    return (
      <>
        <h1>{dark ? "🌙" : "🌞"}</h1>
        <button onClick={handleOnClick}>Toggle Dark Mode</button>
      </>
    );
  };
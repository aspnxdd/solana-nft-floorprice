import "../public/index.css";
import MainNav from "../components/layout/MainNav";
import SidebarNav from "../components/layout/SidebarNav";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme,
  GlobalStyles,
} from "../components/layout/themes";

import Footer from "../components/common/Footer";

function MyApp({ Component, pageProps }) {
  let [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme = theme === "light" ? "dark" : "light";
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const defaultTheme = localStorage.getItem("theme") || "light";
    setTheme(defaultTheme);
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />

        <MainNav theme={theme} themeToggler={themeToggler} />
        <SidebarNav theme={theme} themeToggler={themeToggler} />
        <Component {...pageProps} />

        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;

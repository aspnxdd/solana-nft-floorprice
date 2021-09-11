import "../public/index.css";
import MainNav from "../components/layout/MainNav";
import SidebarNav from "../components/layout/SidebarNav";
import { useState, useEffect } from "react";

import {ThemeProvider} from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "./themes";

function setlocalstorage(theme){
  localStorage.setItem('theme', theme);
}

function MyApp({ Component, pageProps }) {
  
  let [theme, setTheme] = useState("light")
  const themeToggler = () =>{
    theme = theme === "light" ? "dark" : "light"
    setTheme(theme)
    setlocalstorage(theme)
  }

  useEffect(() => {
    const defaultTheme = localStorage.getItem('theme');
    setTheme(defaultTheme)
  }, [])


  const [isOpen, setIsOpen] = useState(false);
  const toggle = function () {
    setIsOpen(!isOpen);
    console.log("isOpen",isOpen)
  };
  return (
    <div>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
      <MainNav toggle={toggle} theme={theme} themeToggler={themeToggler}/>
      
      <SidebarNav isOpen={isOpen} toggle={toggle} theme={theme} themeToggler={themeToggler} />
      <Component {...pageProps} />
  
    </ThemeProvider>
  </div>
    )
}

export default MyApp

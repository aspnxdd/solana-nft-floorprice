import "../public/index.css";
import {ThemeProvider} from "styled-components"
import MainNav from "../components/layout/MainNav";
import SidebarNav from "../components/layout/SidebarNav";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = function () {
    setIsOpen(!isOpen);
    console.log("isOpen",isOpen)
  };
  return (
    <div>
   
      <MainNav toggle={toggle}/>
      <SidebarNav isOpen={isOpen} toggle={toggle} />
      <Component {...pageProps} />
  
  </div>
    )
}

export default MyApp

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  MobileIcon,
  NavLeftElement,
  NavLinkLeft,
  ThemeToggle
} from "./MainNavElements";
import Link from "next/link";

import Ticker from "../ticker/Ticker";
import { FaQuestion } from "react-icons/fa";
import { BiMoon, BiSun } from "react-icons/bi";
import React, {useState, useEffect} from "react";

const MainNav = ({ toggle,themeToggler, theme }) => {

  const [themeIcon, setThemeIcon] = useState(theme)

  useEffect(() => {
    return () => {
      setThemeIcon(!themeIcon)
    };
  }, [themeToggler])

  return (
    <header>
      <Nav>
        <NavLeftElement>
          <NavLinkLeft>
            <Link href="/" activeStyle>
              <b>NFT FP</b>
            </Link>
          </NavLinkLeft>
            
          <MobileIcon onClick={toggle}>
            <Bars />
          </MobileIcon>
        </NavLeftElement>

        <NavMenu>
        <Ticker ></Ticker>  
     
          <Link href="/faq" activeStyle>
            <NavLink>
              {" "}
              <FaQuestion></FaQuestion>&nbsp;F.A.Q.
            </NavLink>
          </Link>
        <ThemeToggle onClick={themeToggler}>
        {theme==="light" && <BiMoon  />}
        {theme==="dark" && <BiSun  />}
        </ThemeToggle>
       
        </NavMenu>
        
      </Nav>
    </header>
  );
};

export default MainNav;

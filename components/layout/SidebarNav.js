import {
  SidebarContainer,
  IconContainer,
  SidebarWrapper,
  CloseIcon,
  SidebarNavLink,
  ThemeToggle,
} from "./SidebarNavElements";
import Link from "next/link";
import Ticker from "../ticker/Ticker";
import { FaQuestion } from "react-icons/fa";
import { BiMoon, BiSun } from "react-icons/bi";
import React, { useState, useEffect } from "react";

const SidebarNav = ({ isOpen, toggle, themeToggler, theme }) => {
  const [themeIcon, setThemeIcon] = useState(theme);

  useEffect(() => {
    return () => {
      setThemeIcon(!themeIcon);
    };
  }, [themeToggler]);

  return (
    <header>
      <SidebarContainer isOpen={isOpen}>
        <IconContainer onClick={toggle}>
          <CloseIcon />
        </IconContainer>
        <SidebarWrapper>
          <SidebarNavLink gridrow="0">
            <Ticker></Ticker>
          </SidebarNavLink>

          <SidebarNavLink gridrow="2">
            <Link href="/faq" activeStyle>
              <span>
                <FaQuestion></FaQuestion>&nbsp;F.A.Q.
              </span>
            </Link>
          </SidebarNavLink>
          <SidebarNavLink gridrow="4">
            <ThemeToggle onClick={themeToggler}>
              {theme === "light" && <BiMoon />}
              {theme === "dark" && <BiSun />}
            </ThemeToggle>
          </SidebarNavLink>
        </SidebarWrapper>
      </SidebarContainer>
    </header>
  );
};

export default SidebarNav;

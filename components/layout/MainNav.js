import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  MobileIcon,
  NavLeftElement,
  NavLinkLeft,
} from "./MainNavElements";
import Link from "next/link";

import Ticker from "../ticker/Ticker";
import { FaQuestion } from "react-icons/fa";

import React from "react";

const MainNav = ({ toggle }) => {
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
     
          <Link href="/faq" activeStyle>
            <NavLink>
              {" "}
              <FaQuestion></FaQuestion>&nbsp;F.A.Q.
            </NavLink>
          </Link>
        <Ticker ></Ticker>
        </NavMenu>
        
      </Nav>
    </header>
  );
};

export default MainNav;

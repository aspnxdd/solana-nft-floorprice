import {
  SidebarContainer,
  IconContainer,
  SidebarWrapper,
  
  CloseIcon,
  
  SidebarNavLink,
} from "./SidebarNavElements";
import Link from "next/link";

import { FaQuestion } from "react-icons/fa";


import React from "react";


const SidebarNav = ({ isOpen, toggle }) => {


  return (
    <header>
      <SidebarContainer isOpen={isOpen}>
        <IconContainer onClick={toggle}>
          <CloseIcon />
        </IconContainer>
        <SidebarWrapper>
         
          <SidebarNavLink gridrow="2">
            <Link href="/faq" activeStyle>
              <span>
              <FaQuestion></FaQuestion>&nbsp;F.A.Q.
              </span>
            </Link>
          </SidebarNavLink>
      
        </SidebarWrapper>
      </SidebarContainer>
    </header>
  );
};

export default SidebarNav;

import {
  FaBars
} from "react-icons/fa";

import styled from "styled-components";

import {
  ImCross
} from "react-icons/im";

export const SidebarContainer = styled.aside `
  background: ${e => e.theme.navBackgroundColor};
  color: ${e => e.theme.navFontColor};
  top:0rem;
  height: 100%;
  display: block;
  position: fixed;
  border-left:  1px solid #b9b9b9;
  transform: ${({isOpen}) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  right: 0;
  z-index: 999;
  width: ${({isOpen})=>(isOpen ? "50%" : "0")};
  opacity: ${({isOpen})=>(isOpen ? "100%" : "0")};
  transition: all 0.3s ease-in-out 0s;
  
`;

export const CloseIcon = styled(ImCross)
`
  color: ${e => e.theme.navFontColor};
  font-size: 1.6rem;
  margin-right:0.8rem;
    
`;

export const IconContainer = styled.div `
  position: absolute;
  top: 0.9rem;
  right: 1.3rem;
  outline: none;

`;

export const SidebarWrapper = styled.div `
  border-radius: 4px;
  background-color: ${e => e.theme.navBackgroundColor};
  color: ${e => e.theme.navFontColor};
  font-size: 3rem;
  display: inline-grid;
  flex-direction: column;
  margin-top: 100px;
  text-decoration: none;
  position: absolute;
  padding-left: 10px;
  justify-items: stretch;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-auto-flow: row;
  gap: 2rem;
  
  `;

export const SidebarNavLink = styled.div `
  grid-column: 1;
  grid-row: ${(e) => e.gridrow};
  border-radius: 4px;
  font-size: 1.5rem;
  text-decoration: none;
  margin-top: 30%;
  color: ${e => e.theme.navFontColor};
  align-items: center;
  white-space: nowrap;
  padding-top: 0.5em;
  cursor: pointer;
  &.active {
    color: #010606;
    background: #c2c2c2;
  }
  &:hover, active {
    transition: all 0.5s ease-in-out;
    background: #fff;
    color: #010606;
    & > div { 
      display: flex;
      opacity: 1;
      transition: opacity 1s ease;
    }
  }
  & > a {
    color: #000;
    text-decoration: none;
  }
`;



export const SidebarLink = styled.div `
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -1rem;
    right: 5rem;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const SidebarMenu = styled(FaBars)
`
  background-color: ${e => e.theme.navBackgroundColor};
  color: ${e => e.theme.navFontColor};
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
   
    transform: translate(-100%, 170%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const ThemeToggle = styled.div`

  
  @media screen and (max-width: 768px) {
    height: 5rem;
  display: flex;

  margin-right: 5rem;
  align-content: center;
  justify-content: center;
  align-items: center;
    flex-direction: column;
    font-size: 3rem;
  
    
  }
  
`;
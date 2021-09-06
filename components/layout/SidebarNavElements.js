import {
  FaBars
} from "react-icons/fa";

import styled from "styled-components";

import {
  ImCross
} from "react-icons/im";

export const SidebarContainer = styled.aside `

  top:3rem;
  background: #fff;
  height: 100%;
  display: block;
  position: fixed;
  border-left: 0.2rem solid #000;
  transform: ${({isOpen}) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  right: 0;
  z-index: 999;
  width: ${({isOpen})=>(isOpen ? "50%" : "0")};
  opacity: ${({isOpen})=>(isOpen ? "100%" : "0")};
  transition: all 0.3s ease-in-out;
  
`;

export const CloseIcon = styled(ImCross)
`
  color: white;
  font-size: 1.6rem;
    
`;

export const IconContainer = styled.div `
  position: absolute;
  top: 0.9rem;
  right: 1.3rem;
  outline: none;

`;

export const SidebarWrapper = styled.div `
  border-radius: 4px;
  color: white;
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
  color: black;
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
  color: white;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
   
    transform: translate(-100%, 170%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
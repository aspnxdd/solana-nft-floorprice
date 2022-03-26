import {
  FaBars
} from "react-icons/fa";

import styled from "styled-components";

export const Nav = styled.nav `
  font-family: "Sofia Pro";
  background-color: ${e => e.theme.navBackgroundColor};
  color: ${e => e.theme.navFontColor};
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  position: fixed;
  width: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 9;

  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled.div `
  font-size: 1.2rem;
   max-width:10rem;
  align-items: center;
  text-decoration: none;
  display: inline-block;
 
  
  cursor: pointer;
  margin-top: 0.6rem;
  &:hover:after {
    width: 100%;
  }
  &:after {
    content: "";
    display: block;
    margin-top: 5px;
    width: 0;
    height: 2px;
    background: #3e73b3;
    transition: width 0.3s;
  }
  & > a {
    color: inherit;
    text-decoration: none;
  }
`;

export const NavLinkLeft = styled.div `
  cursor: pointer;
  display: inline-block;
  font-family:"Press Start 2P";
  font-size: 2rem;
  margin-top: 0.7rem;
  align-items: center;
  text-decoration: none;
  position: absolute;
  top: 0.2rem;
  padding-left: 10px;
  left: 5%;

  &:hover:after {
    width: 100%;
  }
  &:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #3e73b3;
    transition: width 0.3s;
  }
  & > a {
    color: inherit;
    text-decoration: none;
  }
  @media screen and (max-width: 1747px) {
    font-size: 1rem;
    margin-top: 1rem;
    margin-left: -1rem;
  }
`;

export const MobileIcon = styled.div `
  display: none;

  @media screen and (max-width: 1747px) {
    display: block;
    position: absolute;
    top: -2.5rem;
    right: 2rem;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Bars = styled(FaBars)
`
  color: ${e => e.theme.navFontColor};
  @media screen and (max-width: 1747px) {
    display: block;
    position: absolute;

    transform: translate(-100%, 170%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div `
  display: flex;
  align-items: center;
  row-gap: 4rem;
  column-gap: 8rem;
  padding-right: 2rem;
  position: relative;
  margin-left: 18 rem;
  margin-right: 1rem;
  @media screen and (max-width: 1747px) {
    display: none;
  }
`;

export const SearchBarMenu = styled.div `
  display: flex;
  align-items: center;
  row-gap: 4rem;
  column-gap: 10rem;
  padding-right: 2rem;
  position: relative;
  margin-left: 6rem;
  margin-right: 10rem;
  position: relative;
  
  @media screen and (max-width: 1747px) {
    display: flex;
    align-items: center;
    row-gap: 1rem;
    column-gap: 1rem;
    margin-left: 0rem;
    margin-right: 10rem;
    padding-left: -10rem;
    padding-right: 10rem;
    width: 5rem;
  }
 
  
`;

export const NavMenuRight = styled.div `
  display: flex;
  align-items: center;
  margin-right: 5rem;
  height: 100%;

  @media screen and (max-width: 1747px) {
    display: none;
    
  }
`;

export const NavLeftElement = styled.div `
  display: flex;
  align-items: center;
  width: 160px;
  float: left;
  margin-right:8rem;
  flex: 1;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 1747px) {
    display: block;
    
  }
`;

export const NavBtn = styled.nav `
  display: flex;
  align-items: center;
  margin-right: 24px;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 1747px) {
    display: none;
    
  }
`;

export const NavBtnLink = styled.button `
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  display: flex;
  align-items: center;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 1rem;
  font-family: "Atkinson Hyperlegible";

  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.5s ease-in-out;
    background: #fff;
    color: #010606;
  }
  & > a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Label = styled.h4 `
  display: flex;
  margin-left: 15%;
  background: white;
`;

export const AllNoneToggle = styled.div `
  display: flex;
  margin-left: 15%;
  margin-bottom: 5%;
  margin-top: -5%;
  background: white;
  color: #303030;
  cursor: pointer;
  &:hover {
    color: #5a92ed;
  }
`;

export const ThemeToggle = styled.div `
  height: 3rem;
  display: flex;
  font-size: 30px;
  margin-right: 5rem;
  align-content: center;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 1747px) {
    flex-direction: column;
    font-size: 1.8rem;
    margin-top: -3rem;
    
  }
  
`;
import {
  FaBars
} from "react-icons/fa";

import styled from "styled-components";


export const Nav = styled.nav `
  background: #fff;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  position: fixed;
  width: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 9;
  border-bottom: 1px solid #000;
  
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled.div `

  font-size: 1.2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  position: absolute;
  top: 0.8rem;

  cursor: pointer;
  &.active {
    color: #010606;
    background: #c2c2c2;
  }
  &:hover {
    transition: color 0.5s ease-in-out;
    
    border-bottom: 0.2rem solid #568eeb;
    
  }
  & > a {
    color: inherit;
    text-decoration: none;
  }
`;

export const NavLinkLeft = styled.div `
  cursor:pointer;
  color: #000;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  position: absolute;
  top:0.2rem;
  padding-left: 10px;
  left: 5%;
  &:hover {
    transition: color 0.5s ease-in-out;
    
    border-bottom: 0.2rem solid #568eeb;
    
  }
  & > a {
    color: inherit;
    text-decoration: none;
  }
`;

export const MobileIcon = styled.div `
  display: none;

  @media screen and (max-width: 768px) {
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

  color: black;
  @media screen and (max-width: 768px) {
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
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuRight = styled.div `
  display: flex;
  align-items: center;
  margin-right: 5rem;
  height: 100%;
  /* Second Nav */
  /* ; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLeftElement = styled.div `
  display: flex;
  align-items: center;
  width: 160px;
  
  margin-right: 6rem;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HoverMenu = styled.div `
    color: rgb(0, 0, 0);
    cursor: initial;
    position: fixed;
    border-bottom-left-radius: 1em 1em; 
    border-bottom-right-radius: 1em 1em; 
    top: 4rem;
    display: none;
    align-items: flex-start;
    width: 30%;
    left: 15em;
    opacity: 0;
    padding-top: 3rem;
    &:hover{
      display: block;
    }
`;

export const HoverSectionLeft = styled.div `
  width:100%;
  height: 23rem;
  border-top-left-radius: 1em 1em;
  border-bottom-left-radius: 1em 1em; 
  display: flex;
  border-right: 0.1rem solid rgb(218, 223, 232);
  box-shadow: 0px 5px 15px rgb(0 0 0 / 15%);
  z-index: 9;
  align-items: flex-start;
  transition: all 0.5s ease-in-out;
  background: white;
  & > ul{
    list-style: none;
    text-decoration: none;
  };
  
     
`;
export const HoverSectionRight = styled.div `
  width:100%;
  height: 23rem;
  border-top-right-radius: 1em 1em;
  border-bottom-right-radius: 1em 1em; 
  box-shadow: 0px 5px 15px rgb(0 0 0 / 15%);
  z-index: 9;
    ${'' /* border-radius: top-left, top-right, bottom-right, bottom-left */}
  display: flex;
  align-items: flex-start;
  transition: all 0.5s ease-in-out;
  background: white;
  & > ul{
    list-style: none;
  };
  & > a{
    text-decoration: none;
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
  font-family: 'Atkinson Hyperlegible';

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
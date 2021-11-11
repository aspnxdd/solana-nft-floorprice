import styled from "styled-components";


export const Container = styled.div `
    font-family: "Sofia Pro";
    background-color: #000;
    height: 7rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
    bottom: 0;
    left: 0;
    z-index: 9;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap:1rem;
    
  `;

export const Socials = styled.div `
    display: flex;
    width: 20%;
    justify-content: center;
    column-gap: 2rem;
    font-size: 2rem;
    & > a{
      color: #fff;
      &:hover{
        transition: color 0.5s ease-in-out;
        color: #b4b4b4;
      }
    }
  `;

export const Links = styled.div `
    display: flex;
    width: 30%;
    justify-content: center;
    column-gap: 2rem;
    & > a{
      color: #fff;
      &:hover{
        transition: color 0.5s ease-in-out;
        color: #b4b4b4;
      }
    }
  `;
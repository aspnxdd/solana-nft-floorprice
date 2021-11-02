import styled from "styled-components";


export const Container = styled.div `
  height: 3rem;
  display: flex;
  font-size: 15px;
  margin-left:1rem;
  align-content: center;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 25rem;
  @media screen and (max-width: 768px) {
    left: 11rem;
    width: 5rem;
  }
  
`;

export const SearchBarInput = styled.input `
    background-color: ${(e) => e.theme.search};
    border: 4px solid;
    border-color: ${(e) => e.theme.searchBorder};
    border-radius: 1rem;
    font-family: Ubuntu;
    display: flex;
    height: 3rem;
    width: 16rem;
    outline: none;
    color: ${(e) => e.theme.fontColor};
`

export const SearchBarResults = styled.div `
     color: rgb(0, 0, 0);
    cursor: initial;
    position: fixed;
    font-family: Ubuntu;
    display: block;
    border-radius: 1em; 
    border: 4px solid;
    border-color: ${(e) => e.theme.searchBorder};
    color: ${(e) => e.theme.fontColor};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    top: 3.3rem;
    background-color: ${(e) => e.theme.searchResults};
    align-items: flex-start;
    width: 16rem;
    left: 26em;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    @media screen and (max-width: 768px) {
        left: 8.5rem;
        width: 13rem;
        font-size: 0.8rem;
    }
    
`;


export const Img = styled.img `
    margin-right: 1rem;
    height: 2rem;
    width: 2rem;
`;

export const Row = styled.div `
    cursor: pointer;
    margin-top: 0.1rem;
    display: flex;
    align-items: center;
    width: 14rem;
    
   
    border-radius: 1rem;
    &:hover{
        background-color: white;
    }

`
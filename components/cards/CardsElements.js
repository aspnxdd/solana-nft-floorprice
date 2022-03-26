import styled from "styled-components";

export const CardsArea = styled.div `
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-right: 2rem;
    margin-left: 2rem;
    column-gap: 1rem;
    padding-top: 1rem;
    row-gap: 1rem;
    margin-bottom: 1rem;
    @media (max-width: 1200px) {
        margin-right: -1.5rem;
        margin-left: 0.5rem;
        column-gap: 2rem;
    row-gap: 1.5rem;

  }
  a{
      color:${e => e.theme.fontColor};
  }

`;

export const Card = styled.div `
    background-color: ${e => e.theme.cardBackgroundColor};
    cursor: pointer; 
    height: 14rem;
    width: 11rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:  flex-start;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    transition: all;
        transition-duration: 150ms;
        transition-timing-function: ease-in-out;
    &:hover{
        border: 4px solid #3984ce;
        
        transform: scale(1.05);
        
    }
`;
export const Img = styled.img `
    margin-top: 1rem;
    
    height: 8rem;
    width: 8rem;
`;

export const Title = styled.label `
    padding-top: 0.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    cursor: pointer; 
`;

export const MarketplacesArea = styled.div `
    height: 1rem;
    width: 5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
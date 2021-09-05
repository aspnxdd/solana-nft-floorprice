import styled from "styled-components";

export const CardsArea = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-right: 1rem;
    margin-left: 1rem;
    column-gap: 1rem;
    padding-top: 1rem;
    row-gap: 1rem;
`;

export const Card = styled.div `
    background-color: #fff;
    cursor: pointer;
  
  
    height: 14rem;
    width: 11rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:  flex-start;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    &:hover{
        border: 4px solid #3984ce;
    }
`;
export const Img = styled.img `
    margin-top: 1rem;
    
    height: 8rem;
    width: 8rem;
`;

export const Title = styled.label `
padding-top: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`;

export const MarketplacesArea = styled.div `
    height: 1rem;
    width: 5rem;
    margin-top: 0.5rem;
  
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
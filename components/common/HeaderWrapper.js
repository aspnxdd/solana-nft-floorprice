import styled from "styled-components";

export const HeaderWrapper = styled.div `
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  @media (max-width: 1200px) {
    row-gap: 1rem;
    column-gap: 225rem;
    margin-left: 0rem;
    flex-direction: column;
  }
`;

export const TitleSubtitle = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  & > h3 > div {
    margin-left: 0px;
  }
  @media (max-width: 1200px) {
    
 
    
    width: 100%;
  }
`;
export const TextWrapper = styled.div `

  
  margin-left: -1rem;
  width: 25%;
  @media (max-width: 1200px) {
    row-gap: 1rem;
 
  
    width: 100%;
  }
`;
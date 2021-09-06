import styled from "styled-components";

export const HeaderWrapper = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  @media (max-width: 1200px) {
    row-gap: 1rem;
    column-gap: 225rem;
    margin-left: 1rem;
    
  }
`;

export const TitleSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  justify-content: space-around;
  & > h3 > div {
    margin-left: 0px;
  }
`;

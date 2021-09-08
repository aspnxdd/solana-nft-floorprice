import styled from "styled-components";

export const Container = styled.div`
  height: 3rem;
  width: auto;
  display: flex;
  font-size: 15px;
  margin-right: 5rem;
  
`;
export const LeftSection = styled.section`
  height: auto;
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 1rem;
  padding-left: 1rem;
 
`;

export const RightSection = styled.section`
  height: auto;
  width: auto;
  max-width: 10rem;
  align-items: center;
  background-image: linear-gradient(#2fcfb7, #b448ee);
  display: flex;
  padding-right: 1rem;
  padding-left: 1rem;
  flex-wrap: wrap;
  column-gap: 5rem;
  justify-content: space-around;
  & > p {
    margin: 0 0 0 0;
  }
  border: 2px solid #7f7f7f;
  border-radius: 1rem;
`;

export const Percent = styled.div`
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  border-radius: 1rem;
  background: ${({ priceChangePercent }) =>
    priceChangePercent >= 0 ? "#76c754" : "#c60005"};
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  font-size: 14px;
`;

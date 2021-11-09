import styled from "styled-components";

export const Container = styled.div`
  height: 3rem;
  display: flex;
  font-size: 15px;
  margin-right: 5rem;
  align-content: center;
  justify-content: center;
  align-items: center;
 
  @media screen and (max-width: 768px) {
    flex-direction: column;
    font-size: 1.8rem;
    margin-top: -3rem;
  }
  
`;
export const LeftSection = styled.section`
  height: auto;
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 1rem;
  padding-left: 1rem;
  font-size: 20px;
 
`;

export const RightSection = styled.section`
  height: 3rem;
  min-width: 10rem;
  color: black;
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
    color: black;
  }
  border: 2px solid #7f7f7f;
  border-radius: 1rem;
  @media screen and (max-width: 768px) {
    height: auto;
    margin-top: 0.5rem;
  }
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
  @media screen and (max-width: 768px) {
    height: auto;
   
    font-size: 1.8rem;
  }
`;

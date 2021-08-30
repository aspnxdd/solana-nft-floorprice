import styled from "styled-components";

export const Title = styled.div `
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const Container = styled.div `
  position: absolute;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
  background: #d2bf39;
  color: #2f3f3;
  top: 2rem;
  right: 20rem;
  width: 25%;
  height: auto;
  border-radius: 2rem;
  border: 15px solid white;
  overflow-x: auto;


  @media (max-width: 600px) {
     position: static;
     right: 0px;
     width: auto;
     height: auto;
  }

  & > img {
    margin-top: 1rem;
    margin-left: 40%;
    height: 120px;
    width: 120px;
  }

`;

export const Label = styled.label `
  margin-left: 2rem;
  margin-top: 1rem;
  margin-right: 2rem;
  color: #285fc4;
`;

export const Address = styled.label `
  cursor: pointer;
  color: #285fc4;
  word-break: break-all;
  &:hover {
    color: #fff;
  }
  
  margin-right: 2rem;
  
`;
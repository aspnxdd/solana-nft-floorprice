import styled from "styled-components";

export const Title = styled.div `
  margin-left: 2rem;
`;

export const Container = styled.div `
  position: absolute;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
 
  height: 19.5rem;
  background: #d2bf39;
  color: #2f3f3;
  right: 20rem;
  width: 30%;
  height: auto;
  border-radius: 2rem;
  border: 15px solid white;
  overflow-x: auto;


  @media (max-width: 600px) {
     position: static;
     right: 0px;
     width: 100%;
     height: 22rem;
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
  color: #285fc4;
`;

export const Address = styled.label `
  cursor: pointer;
  color: #285fc4;
  word-break: break-all;
  &:hover {
    color: #fff;
  }

  
`;
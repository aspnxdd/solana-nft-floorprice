import styled from "styled-components";

export const Title = styled.div`
  margin-left: 2rem;
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
 
  height: 19.5rem;
  background: #d2bf39;
  color: #2f3f3;
  margin-left: 70rem;
  margin-right: 20rem;

  border-radius: 2rem;
  border: 15px solid white;
`;

export const Label = styled.label`
  margin-left: 2rem;
  margin-top: 1rem;
  color: #285fc4;
`;

export const Address = styled.label`
  cursor: pointer;
  color: #285fc4;
  &:hover {
    color: #fff;
  }

  
`;

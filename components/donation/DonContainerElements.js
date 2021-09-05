import styled from "styled-components";

export const Title = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-left: 1.5rem;
 margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
  background-image: linear-gradient(#2fcfb7, #b448ee);
  color: #2f3f3;
  top: 2rem;
  right: 3rem;
  width: 25rem;
  height: auto;
  border-radius: 1rem;
  overflow-x: auto;
  @media (max-width: 956px) {
    position: static;
    right: 0px;
    width: 24rem;
    height: auto;
    
   
  }
 
`;

export const Label = styled.label`
  margin-left: 2rem;
  margin-top: 1rem;
  margin-right: 2rem;
  color: #000;
`;

export const Address = styled.label`
  cursor: pointer;
  color: #000;
  word-break: break-all;
  &:hover {
    color: #fff;
  }

  margin-right: 2rem;
`;

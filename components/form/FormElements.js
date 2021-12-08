import styled from "styled-components";

export const Form = styled.form `
  margin-top: 6rem;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Sofia Pro";
  height: 67vh;

  & > div {
    display: flex;
    flex-direction: column;
    & input {
      border-radius: 7px;
    }
    & label {
      margin-top:1rem;
      margin-bottom:0.3rem;
    }
  }
  & button{
    font-family: "Sofia Pro";
    cursor: pointer;
    margin-left: 0rem;
    margin-top:2rem;
    border-radius: 50px;  
    color: ${(e) => e.theme.fontColor};
    background-color: ${(e) => e.theme.search};
    transition: all;
    transition-duration: 150ms;
    transition-timing-function: ease-in-out;
    border-color: ${(e) => e.theme.searchBorder};
    &:hover{
        transform: scale(1.15);
    }
  }

`
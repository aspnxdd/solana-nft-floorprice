import styled from "styled-components";

export const Container = styled.div`
  width: 44rem;
  height: 30rem;
  padding-right: 1rem;
  padding-bottom: 4rem;
  border-radius: 1rem;
  background-color: ${(e) => e.theme.containerBackground};
  span {
    
    display: flex;
    justify-content: center;
    margin-right: 0.5rem;
    align-items: center;
    width: auto;
  }
  @media screen and (max-width: 768px) {
    position: static;
    display: block;
    width: auto;
    margin-bottom: 2rem;
    margin-right: 0.2rem;
    margin-left: 0rem;
  }
  span {
    padding-top: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
  }
  
  }
`;

export const Wrapper = styled.div`
  margin: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 2rem;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: block;
    width: auto;
    margin-bottom: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

export const TopWrapper = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 4rem;
  width: 100%;
  height: 16rem;
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;
  @media screen and (max-width: 768px) {
    position: static;
    display: block;
    width: auto;
    margin-bottom: 8rem;
    margin-right: 2rem;
    margin-left: 1rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 44rem;
  height: 15rem;
  padding-right: 1rem;
  padding-bottom: 4rem;
  padding-top: 1rem;
  margin-top: 1rem;
  border-radius: 1rem;
  background-color: ${(e) => e.theme.containerBackground};
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: auto;
    margin-bottom: 2rem;
    height: 35rem;
    margin-left: 1rem;
    align-items: center;
    justify-content: center;
  }
`;

export const Info = styled.div`
  width: 60%;
  height: 18rem;
  @media screen and (max-width: 768px) {
    height: 20rem;
    width: 100%;

    margin-bottom: -5rem;
  }
`;

export const Img = styled.div`
  margin-top: 1rem;
  right: 5rem;
  height: 15rem;
  @media screen and (max-width: 768px) {
    margin-top: 6rem;
  }
`;
export const Marketplaces = styled.div`
  display: flex;
  padding-left: 2rem;
  column-gap: 1rem;
  align-items: center;
`;
export const Area = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;

  @media screen and (max-width: 768px) {
    row-gap: 6rem;
  }
`;
export const UpdateBtnDiv = styled.div`
  display: flex;
  height: 2rem;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding-top: 6rem;
    margin-bottom: -5rem;
    margin-top: 2rem;
  }
`;

export const UpdateBtn = styled.button`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  display: flex;
  align-items: center;
  color: #fff;
  outline: none;
  border: 1px solid;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 0.8rem;
  width: 6rem;
  border-color: ${(e) => e.theme.timeBtnBorder};
  /* Second Nav */
  margin-left: 3rem;
  &:hover {
    transition: background 0.5s ease-in-out;
    background: ${(e) => e.theme.timeBtnBackground};
    color: #256ce1;
    border: 1px solid;
  }

  & > a {
    color: inherit;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    width: 5rem;
    padding: 1rem 0.8rem;
    margin-left: 1.2rem;
  }
`;

export const TimeButton = styled.button`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  display: flex;
  align-items: center;
  color: #fff;
  outline: none;
  border: 1px solid;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 0.8rem;
  width: 6rem;
  border-color: ${(e) => e.theme.timeBtnBorder};
  /* Second Nav */
  margin-left: 3rem;
  &:hover {
    transition: background 0.5s ease-in-out;
    background: ${(e) => e.theme.timeBtnBackground};
    color: #256ce1;
    border: 1px solid;
  }

  & > a {
    color: inherit;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    width: 2rem;
    padding: 1rem 0.8rem;
    margin-left: 1.2rem;
  }
`;

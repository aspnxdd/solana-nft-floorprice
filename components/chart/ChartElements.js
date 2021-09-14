import styled from "styled-components";

export const Container = styled.div`
  width: 47%;
  height: 30rem;
  padding-right: 1rem;
  padding-bottom: 4rem;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  @media screen and (max-width: 768px) {
    position: static;
    display: block;
    width: auto;
    margin-bottom: 2rem;
    margin-right: 0.2rem;
    margin-left: 0rem;
  }
`;

export const Wrapper = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  height: 40rem;
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 2rem;
  @media screen and (max-width: 768px) {
    position: static;
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
  row-gap: 2rem;
  @media screen and (max-width: 768px) {
    position: static;
    display: block;
    width: auto;
    margin-bottom: 2rem;
    margin-right: 2rem;
    margin-left: 1rem;
  }
`;

export const InfoContainer = styled.div`
  width: 47%;
  height: 15rem;
  padding-right: 1rem;
  padding-bottom: 4rem;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  @media screen and (max-width: 768px) {
    position: static;
    display: block;
    width: auto;
    margin-bottom: 2rem;

    margin-left: 1rem;
  }
`;

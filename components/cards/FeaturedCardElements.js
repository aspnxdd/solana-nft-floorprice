import styled from "styled-components";


 export const CardContainer = styled.div `
display: flex;

flex-direction: column;
 align-items: center;

`;

export const AreaCardF = styled.div `
    display: flex;
    margin-top:1rem ;
    flex-direction: column;
     align-items: center;
   
`;

export const FeaturedLabel = styled.div `
    font-size:1.4rem;
    margin-bottom: 0.5rem;
    @media (max-width: 1200px) {
    margin-top: -1rem;
  }

`;

export const CardF = styled.div `
    position: relative;
    overflow: hidden;
    background-color: #383838;
    cursor: pointer; 
    height: 16rem;
    width: 12rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:  flex-start;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    
    &:after{
        content: "";
        position: absolute;
        top: -150%;
        left: -210%;
        width: 300%;
        height: 200%;
        opacity: 0;
        transform: rotate(30deg);
        background: rgba(255, 255, 255, 0.13);
        background: linear-gradient(
            to right, 
            rgba(255, 255, 255, 0.13) 0%,
            rgba(255, 255, 255, 0.13) 77%,
            rgba(255, 255, 255, 0.5) 92%,
            rgba(255, 255, 255, 0.0) 100%
        );
   }

   &:hover:after {
    opacity: 1;
    top: -30%;
    left: -30%;
    transition-property: left, top, opacity;
    transition-duration: 0.7s, 0.7s, 0.15s;
    transition-timing-function: ease;
 }
    &:active:after {
        opacity: 0;
}
 
`;
export const ImgF = styled.img `
    margin-top: 1rem;
    
    height: 10rem;
    width: 10rem;
`;

export const TitleF = styled.label `
padding-top: 0.5rem;
cursor: pointer; 
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    color: #fff;
    font-size: 1.1rem;
`;

export const MarketplacesAreaF = styled.div `
    height: rem;
    width: 5rem;
    margin-top: 0.5rem;
  
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const CollectionLinks = styled.div `
height: 1rem;
width: 5rem;
margin-top: 1rem;
cursor: pointer; 
column-gap: 1.5rem;
display: flex;
justify-content: space-around;
align-items: center;
`;
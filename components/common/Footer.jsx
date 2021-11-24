import { Container, Socials, Links } from "./FooterElements";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";


export default function Footer() {
  return (
    

    <Container>
      <Socials>
        <a href="https://github.com/aspnxdd/solana-nft-floorprice">
          <AiFillGithub />
        </a>
        <a href="https://twitter.com/home">
          <AiFillTwitterCircle />
        </a>
      </Socials>
      <Links>
        <a href={`/faq`}> FAQ</a>
      </Links>
    </Container>
    
  );
}

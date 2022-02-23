import TitleWelcome from "../components/common/TitleWelcome";

import DonContainer from "../components/donation/DonContainer";

import CardComponent from "../components/cards/CardComponent";
import FeaturedCard from "../components/cards/FeaturedCard";
import {
  HeaderWrapper,
  TitleSubtitle,
  TextWrapper,
} from "../components/common/HeaderWrapper";

export default function Home() {
  return (
    <div style={{ paddingBottom: "2rem" }}>
      <HeaderWrapper>
        <TextWrapper>
          <TitleSubtitle>
            <TitleWelcome />
            <br></br> <br></br>
            <h3>
              <div>
                Here you can track the history of Floor Price for the
                collections from{" "}
                <a className="a" href="https://digitaleyes.market/">DigitalEyes</a>, {" "} 
                <a className="a" href="https://solanart.io/">Solanart</a> and{" "}
                {/* <a className="a" href="https://magiceden.io/">MagicEden</a> */}
              </div>
              <img
                className="sol-logo"
                src="/static/images/solana.svg"
                alt="sol-logo"
              ></img>
            </h3>
          </TitleSubtitle>
        </TextWrapper>

        <FeaturedCard></FeaturedCard>

        <DonContainer />
      </HeaderWrapper>
      
      <CardComponent></CardComponent>
      {/* <Links></Links> */}
    </div>
  );
}

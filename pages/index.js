import Links from "../components/links/Links";
import Time from "../components/currentTime/CurrentTime";
import TitleWelcome from "../components/common/TitleWelcome";
import InfoTwoHours from "../components/common/InfoTwoHours";
import DonContainer from "../components/donation/DonContainer";
import LinkHome from "../components/common/LinkHome";
import CardComponent from "../components/cards/CardComponent";
import FeaturedCard from "../components/cards/FeaturedCard";
import {
  HeaderWrapper,
  TitleSubtitle,
} from "../components/common/HeaderWrapper";

export default function Home() {
  return (
    <div>
      <HeaderWrapper>
        <TitleSubtitle>
          <TitleWelcome />


          <h3>
            <div>
              Here you can track the history of Floor Price for the collections
              from <a href="https://digitaleyes.market/">DigitalEyes</a> and{" "}
              <a href="https://solanart.io/">Solanart</a>
           
            </div>
            <img className="sol-logo" src="/static/images/solana.svg" alt="sol-logo"></img>
          </h3>
        </TitleSubtitle>
        
      <FeaturedCard></FeaturedCard>
        <DonContainer />
      </HeaderWrapper>

      <CardComponent></CardComponent>
      {/* <Links></Links> */}
    </div>
  );
}

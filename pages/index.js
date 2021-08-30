import Links from "../components/links/Links";
import Time from "../components/currentTime/CurrentTime";
import TitleWelcome from "../components/common/TitleWelcome";
import InfoTwoHours from "../components/common/InfoTwoHours";
import DonContainer from "../components/donation/DonContainer";

export default function Home() {
  return (
    <div>
      <TitleWelcome />

      <h3>
        <div>
          Here you can track the history of Floor Price for the collections from{" "}
          <a href="https://digitaleyes.market/">
            DigitalEyes
          </a>
        </div>
      </h3>
      <DonContainer />
      <InfoTwoHours />
      <Time />
      <Links></Links>
    </div>
  );
}

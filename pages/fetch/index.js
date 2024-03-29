import Time from "../../components/currentTime/CurrentTime";
import React from "react";
import TitleWelcome from "../../components/common/TitleWelcome";
import InfoTwoHours from "../../components/common/InfoTwoHours";
import DonContainer from "../../components/donation/DonContainer";
import LinkHome from "../../components/common/LinkHome";
import CardComponent from "../../components/cards/CardComponent";


function Data() {
  return (
    <div>
    <LinkHome />
      <TitleWelcome />
      <h3>
        <div >
          Here you can track the history of Floor Price for the collections from {" "}
          <a href="https://digitaleyes.market/">
            DigitalEyes
          </a> and {" "}
          <a href="https://solanart.io/">
            Solanart
          </a>
        </div>
      </h3>
      <DonContainer />
      <InfoTwoHours />
      <Time />
      <CardComponent></CardComponent>
      {/* <Links></Links> */}
    </div>
  );
}
export default Data;

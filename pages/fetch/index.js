import Time from "../../components/currentTime/CurrentTime";
import React from "react";
import TitleWelcome from "../../components/common/TitleWelcome";
import InfoTwoHours from "../../components/common/InfoTwoHours";
import DonContainer from "../../components/donation/DonContainer";

import Links from "../../components/links/Links";

function Data() {
  return (
    <div>
    <DonContainer />
      <TitleWelcome />
      <h3>
        Here you can track the history of Floor Price for the collections from{" "}
        <a href="https://digitaleyes.market/collections/SolanaDogeNFTs">
          &nbsp;DigitalEyes
        </a>
      </h3>
      <InfoTwoHours />
      <Time />
      <Links></Links>
    </div>
  );
}
export default Data;

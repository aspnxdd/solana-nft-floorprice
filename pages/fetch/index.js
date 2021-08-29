
import Time from "../../components/currentTime/CurrentTime";
import React from "react";



import Links from "../../components/links/Links"




function Data() {
  return (
    <div>
      <h1>Welcome to NFT Floor Price</h1>
      <h3>
        Here you can track the history of Floor Price for SolanaDoges in{" "}
        <a href="https://digitaleyes.market/collections/SolanaDogeNFTs">
          DigitalEyes
        </a>
      </h3>
      <Time />
      <Links></Links>
      </div>
  );
}
export default Data;

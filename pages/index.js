import Links from "../components/links/Links";
import Time from "../components/currentTime/CurrentTime";

export default function Home() {
  return (
    <div>
      <h1>Welcome to NFT Floor Price</h1>
      <h3>
        Here you can track the history of Floor Price for the collections from{" "}
        <a href="https://digitaleyes.market/collections/SolanaDogeNFTs">
          DigitalEyes
        </a>
      </h3>
      <h4>It is being updated every 2 hours</h4>
      <Time />
      <Links></Links>
    </div>
  );
}

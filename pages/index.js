import TitleWelcome from "../components/common/TitleWelcome";
import DonContainer from "../components/donation/DonContainer";
import CardComponent from "../components/cards/CardComponent";
import FeaturedCard from "../components/cards/FeaturedCard";
import {
  HeaderWrapper,
  TitleSubtitle,
  TextWrapper,
} from "../components/common/HeaderWrapper";
import collections from "../components/cards/collections";
import { useEffect, useState } from "react";

async function getFloorPrices() {
  const res = await fetch(
    `${
      window.origin == "http://localhost:3000"
        ? "http://localhost:8080"
        : "https://nft-api-rust.herokuapp.com"
    }/loadall`
  );
  //
  let data = await res.json();
  return data;
}

export default function Home() {
  const setFloorPrice = async (data) => {
    const marketplaces = [
      { mp: "so", marketplace: "solanart" },
      { mp: "de", marketplace: "digitaleyes" },
    ];
    for (const { mp, marketplace } of marketplaces) {
      collections.forEach((collection) => {
        if (collection[marketplace]) {
          const collectionData = data.find(
            (e) => e.collection == collection.url
          )?.data;
          collection.fp = collectionData?.find(
            (e) => e.marketplace === mp
          )?.data[0].price;
        }
      });
    }
  };

  const [marketplaceArr, setMarketplaceArr] = useState([]);

  useEffect(() => {
    getFloorPrices().then((data) => {
      setFloorPrice(data);
      setMarketplaceArr(collections);
    });
  }, []);

  return (
    <div style={{ paddingBottom: "2rem" }}>
      <HeaderWrapper>
        <TextWrapper>
          <TitleSubtitle>
            <TitleWelcome />
            <h3>
              <div>
                Here you can track the history of Floor Price for the collections from{" "}
                <a className="a" href="https://digitaleyes.market/">
                  DigitalEyes
                </a>{" "}
                and{" "}
                <a className="a" href="https://solanart.io/">
                  {" "}
                  Solanart
                </a>
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

        <FeaturedCard marketplaceArr={marketplaceArr}></FeaturedCard>

        <DonContainer />
      </HeaderWrapper>

      <CardComponent marketplaceArr={marketplaceArr}></CardComponent>
    </div>
  );
}

import { CardsArea, Card, Img, Title, MarketplacesArea } from "./CardsElements";
import collectionsDigitalEyes from "../../server/collectionsDigitalEyes.json";
import collectionsSolanart from "../../server/collectionsSolanart.json";
import { useEffect, useState } from "react";
import Link from "next/link";

import _collections from "./_collections";

async function getFloorPrices() {
  const res = await fetch(
    `${
      window.origin == "http://localhost:3000"
        ? "http://localhost:8080"
        : "https://nft-nextjs.herokuapp.com"
    }/loadall`
  );
  //
  let { data } = await res.json();
  return data;
}

// loop through the collections to add marketplace name to array

export default function CardComponent() {
  async function addMarketplace(dataAll) {
    console.log(dataAll);
    for (let i = 0; i < _collections.length; i++) {
      collectionsDigitalEyes.forEach((col) => {
        if (col.name == _collections[i].url) {
          _collections[i]?.marketplace.push("digitaleyes");
          dataAll.forEach((k) => {
            if (
              k?.marketplace.includes("digitaleyes") &&
              k.collectionname == _collections[i].url
            ) {
              _collections[i].fp = k.floorprice;
            }
          });
        }
      });
    }
    for (let i = 0; i < _collections.length; i++) {
      collectionsSolanart.forEach((col) => {
        if (col.name == _collections[i].url) {
          _collections[i]?.marketplace.push("solanart");
          dataAll.forEach((k) => {
            if (
              k?.marketplace.includes("solanart") &&
              k.collectionname == _collections[i].url
            ) {
              _collections[i].fp = k.floorprice;
            }
          });
        }
      });
    }
  }

  const [marketplaceArr, setMarketplaceArr] = useState([]);

  useEffect(() => {
    getFloorPrices().then((data) => {
      addMarketplace(data);
      setMarketplaceArr(_collections);
    });
  }, []);
  return (
    <CardsArea>
      {marketplaceArr.map((e) => {
        return (
          <Link key={e.name} href={`/fetch/${e.url}`}>
            <Card>
              <Img src={`./static/images/${e.img}`}></Img>
              <Title>
                {e.name}
                
              </Title>
              <MarketplacesArea>
                {e.marketplace.includes("digitaleyes") && (
                  <img
                    src="/static/images/digitaleyes.svg"
                    alt="de-logo"
                    width="40px"
                  ></img>
                )}

                {e.marketplace.includes("solanart") && (
                  <img
                    src="/static/images/solanart.svg"
                    alt="so-logo"
                    width="25px"
                  ></img>
                )}
              </MarketplacesArea>
              <div style={{display:"flex", columnGap:"0.4rem"}}>
              Latest FP: {Math.round(e.fp * 100) / 100} <img width="15px" src="/static/images/solana.svg" alt="sol-logo"></img>
           </div>
            </Card>
          </Link>
        );
      })}
    </CardsArea>
  );
}

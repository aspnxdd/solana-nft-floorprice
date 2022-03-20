import { CardsArea, Card, Img, Title, MarketplacesArea } from "./CardsElements";
import collectionsDigitalEyes from "../../server/collectionsDigitalEyes.json";
import collectionsSolanart from "../../server/collectionsSolanart.json";
import collectionsMagicEden from "../../server/collectionsMagicEden.json";
import { useEffect, useState } from "react";
import Link from "next/link";

import _collections from "./_collections";

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

// loop through the collections to add marketplace name to array

export default function CardComponent() {
  async function addMarketplace(dataAll) {
    console.log("dataAll", dataAll);

   
    for (let i = 0; i < _collections.length; i++) {
      collectionsDigitalEyes.forEach((col) => {
        if (col.name == _collections[i].url) {
          _collections[i]?.marketplace.push("digitaleyes");
          dataAll.forEach((k) => {
            console.log("y", k);
            k.data.forEach((marketplaceData) => {
              console.log("marketplaceData",marketplaceData)
              if (
                marketplaceData.marketplace.includes("de") &&
                k.collection == _collections[i].url
              ) {
                console.log("_collections",_collections[i])
                if (
                  _collections[i].fp == 0 ||
                  _collections[i].fp > marketplaceData?.data[0].price
                ) {
                  console.log(1, k.marketplaceData);
                  _collections[i].fp = marketplaceData?.data[0].price
                }
              }
            });
          });
        }
      });
    }
    for (let i = 0; i < _collections.length; i++) {
      collectionsDigitalEyes.forEach((col) => {
        if (col.name == _collections[i].url) {
          _collections[i]?.marketplace.push("solanart");
          dataAll.forEach((k) => {
            console.log("y", k);
            k.data.forEach((marketplaceData) => {
              console.log("marketplaceData",marketplaceData)
              if (
                marketplaceData.marketplace.includes("so") &&
                k.collection == _collections[i].url
              ) {
                console.log("_collections",_collections[i])
                if (
                  _collections[i].fp == 0 ||
                  _collections[i].fp > marketplaceData?.data[0].price
                ) {
                  console.log(1, k.marketplaceData);
                  _collections[i].fp = marketplaceData?.data[0].price
                }
              }
            });
          });
        }
      });
    }
    // for (let i = 0; i < _collections.length; i++) {
    //   collectionsMagicEden.forEach((col) => {
    //     if (col.name == _collections[i].url) {
    //       _collections[i]?.marketplace.push("magiceden");
    //       dataAll.forEach((k) => {
    //         if (
    //           k?.marketplace.includes("magiceden") &&
    //           k.collectionname == _collections[i].url

    //         ) {
    //           if(_collections[i].fp == 0 || _collections[i].fp > k.floorprice){
    //             console.log(2,_collections[i])
    //             _collections[i].fp = k.floorprice;
    //           }
    //         }
    //       });
    //     }
    //   });
    // }
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
            <a>
              <Card>
                <Img loading="lazy" src={`./static/images/${e.img}`}></Img>
                <Title>{e.name}</Title>
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

                  {/* {e.marketplace.includes("magiceden") && (
                  <img
                    src="/static/images/magiceden.png"
                    alt="me-logo"
                    width="25px"
                  ></img>
                )} */}
                </MarketplacesArea>
                <div style={{ display: "flex", columnGap: "0.4rem" }}>
                  Latest FP: {Math.round(e.fp * 100) / 100}{" "}
                  <img
                    width="15px"
                    src="/static/images/solana.svg"
                    alt="sol-logo"
                  ></img>
                </div>
              </Card>
            </a>
          </Link>
        );
      })}
    </CardsArea>
  );
}

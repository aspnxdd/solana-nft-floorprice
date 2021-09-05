import {  CardF, ImgF, TitleF, MarketplacesAreaF, AreaCardF, FeaturedLabel } from "./FeaturedCardElements";
import collectionsDigitalEyes from "../../server/collectionsDigitalEyes.json";
import collectionsSolanart from "../../server/collectionsSolanart.json";
import { useEffect, useState } from "react";
import Link from "next/link";

import _collections from "./_collections";

// loop through the collections to add marketplace name to array

export default function CardComponent() {
  console.log(_collections);
  function addMarketplace() {
    for (let i = 0; i < _collections.length; i++) {
      collectionsDigitalEyes.forEach((col) => {
        if (col.name == _collections[i].url) {
          _collections[i].marketplace.push("digitaleyes");
        }
      });
    }
    for (let i = 0; i < _collections.length; i++) {
      collectionsSolanart.forEach((col) => {
        if (col.name == _collections[i].url) {
          _collections[i].marketplace.push("solanart");
        }
      });
    }
  }

  const [marketplaceArr, setMarketplaceArr] = useState([]);

  useEffect(() => {
    addMarketplace();
    setMarketplaceArr(_collections);
  }, []);
  return (
      <AreaCardF>

      
   
    <FeaturedLabel ><b>Featured Collections</b> </FeaturedLabel>
      {marketplaceArr.map((e) => {
          
        if (e.featured) return (
          <Link key={e.name} href={`/fetch/${e.url}`}>
            <CardF>
              <ImgF src={`./static/images/${e.img}`}></ImgF>
              <TitleF><b>{e.name}</b></TitleF>
              <MarketplacesAreaF>
                {e.marketplace.includes("digitaleyes") && (
                  <img
                    src="/static/images/digitaleyes.svg"
                    alt="de-logo"
                    width="50px"
                  ></img>
                )}

                {e.marketplace.includes("solanart") && (
                  <img
                    src="/static/images/solanart.svg"
                    alt="so-logo"
                    width="25px"
                  ></img>
                )}
              </MarketplacesAreaF>
            </CardF>
          </Link>
        );
      })}
</AreaCardF>
  );
}

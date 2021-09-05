import { CardsArea, Card, Img, Title, MarketplacesArea } from "./CardsElements";
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
    <CardsArea>
      {marketplaceArr.map((e) => {
        return (
          <Link href={`/fetch/${e.url}`}>

          
          <Card key={e.name}>
            <Img src={`./static/images/${e.img}`}></Img>
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
            </MarketplacesArea>
          </Card>
          </Link>
        );
      })}
    </CardsArea>
  );
}

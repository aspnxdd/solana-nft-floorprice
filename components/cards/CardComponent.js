import { CardsArea, Card, Img, Title, MarketplacesArea } from "./CardsElements";

import Link from "next/link";

export default function CardComponent({ marketplaceArr }) {
  return (
    <CardsArea>
      {marketplaceArr.map((e) => {
        if(e.fp)
        return (
          <Link key={e.name} href={`/fetch/${e.url}`}>
            <a>
              <Card>
                <Img loading="lazy" src={`./static/images/${e.img}`}></Img>
                <Title>{e.name}</Title>
                <MarketplacesArea>
                  {e.digitaleyes && (
                    <img
                      src="/static/images/digitaleyes.svg"
                      alt="de-logo"
                      width="40px"
                    ></img>
                  )}

                  {e.solanart && (
                    <img
                      src="/static/images/solanart.svg"
                      alt="so-logo"
                      width="25px"
                    ></img>
                  )}

                 
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

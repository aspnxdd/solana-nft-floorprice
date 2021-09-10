import {
  Container,
  LeftSection,
  RightSection,
  Percent,
} from "./TickerElements";
import { useState, useEffect } from "react";
const _SOLUSDT = "https://api1.binance.com/api/v3/ticker/price?symbol=SOLUSDT";
const _SOLPRICECHANGE =
  "https://api1.binance.com/api/v3/ticker/24hr?symbol=SOLUSDT";

async function getSolPrice() {
  const _price = await fetch(_SOLUSDT);
  const _priceChange = await fetch(_SOLPRICECHANGE);

  let { price } = await _price.json();
  let { priceChangePercent } = await _priceChange.json();

  return {
    price,
    priceChangePercent,
  };
}

export default function Ticker() {
  const [price, setPrice] = useState({});
  useEffect(() => {
    getSolPrice().then((data) => {
      console.log(data);
      setPrice(data);
    });
  }, []);
  return (
  
    <Container>
      <LeftSection>SOL/USD</LeftSection>
      <RightSection>
        <p>{price.price && Math.round(price.price * 100) / 100} $</p>
        <Percent priceChangePercent={Number(price.priceChangePercent)}>
          {price.priceChangePercent && Math.round(price.priceChangePercent * 10) / 10} %
        </Percent>
      </RightSection>
    </Container>
  );
}

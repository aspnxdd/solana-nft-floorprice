const _SOLUSDT = "https://api1.binance.com/api/v3/ticker/price?symbol=SOLUSDT";
const _SOLPRICECHANGE =
  "https://api1.binance.com/api/v3/ticker/24hr?symbol=SOLUSDT";
async function getSolPrice() {
  const _price = await fetch(_SOLUSDT);
  const _priceChange = await fetch(_SOLPRICECHANGE);
  //
  let { data: price } = await _price.json();
  let { data: priceChange } = await _priceChange.json();

  return {
    price,
    priceChange,
  };
}

export default function Ticker() {
  return a;
}

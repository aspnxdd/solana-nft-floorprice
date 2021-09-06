import { Title, Container, Label, Address } from "./DonContainerElements";

import { useState } from "react";

export default function DonContainer() {
  const sol_address = "EQ4zjzotsMKmQFbXxbkj7WH4M8nzjDZ2r4r3w2stokyn";
  const bsc_address = "0x14B3D1D05D90E7Bb9EF9847E92cA11DbA10D1fcB";
  const [copySuccessSol, setCopySuccessSol] = useState("");
  const [copySuccessBsc, setCopySuccessBsc] = useState("");

  if (copySuccessSol || copySuccessBsc)
    setTimeout(function () {
      setCopySuccessBsc("");
      setCopySuccessSol("");
    }, 2000);

  function copyToClipboard(address) {
    var type = "text/plain";
    var blob = new Blob([address], { type });
    var data = [new ClipboardItem({ [type]: blob })];
    navigator.clipboard.write(data).then(() => {
      return;
    });
    if (address === sol_address) setCopySuccessSol("Copied!");
    if (address === bsc_address) setCopySuccessBsc("Copied!");
  }

  return (
    <Container>
      <h1>Donations</h1>
      <Title>
        If you have found NFT Floor Price app useful, please consider leaving a{" "}
        <b>Solana</b> or <b>BSC</b> tip.
      </Title>

      <Label>
        <b>Solana Wallet address:</b>{" "}
        <Address onClick={()=>copyToClipboard(sol_address)}>{sol_address}</Address>
        {copySuccessSol}{" "}
      </Label>
      <Label>
        <b>BSC Wallet address:</b>{" "}
        <Address onClick={()=>copyToClipboard(bsc_address)}>{bsc_address}</Address>
        {copySuccessBsc}{" "}
      </Label>
      <div className="images-donation">
      {/* <img className="qr_sol" height="100px" src="/static/images/qr_sol.png" alt="qr_sol"></img>
      <img className="qr_bsc" height="90px" src="/static/images/qr_bsc.png" alt="qr_bsc"></img> */}
      </div>
    </Container>
  );
}

import { Title, Container, Label, Address } from "./DonContainerElements";


import { useState } from "react";

export default function DonContainer() {
  const address = "EQ4zjzotsMKmQFbXxbkj7WH4M8nzjDZ2r4r3w2stokyn";
  const [copySuccess, setCopySuccess] = useState("");
  
  if (copySuccess) setTimeout(function(){ setCopySuccess(""); }, 2000);


  function copyToClipboard() {
    var type = "text/plain";
    var blob = new Blob([address], { type });
    var data = [new ClipboardItem({ [type]: blob })];
    navigator.clipboard.write(data).then(() =>{
        return
    });
    setCopySuccess("Copied!");
  }

  return (
    <Container>
      <h1>Donations</h1>
      <Title>If you have found NFT Floor Price app useful, please consider leaving a <b>Solana</b> tip.</Title>

      <Label>
        <b>Solana Wallet address:</b> <Address onClick={copyToClipboard}>{address}</Address>
        {copySuccess}{" "}
      </Label>
      <div className="images-donation">

     
      <img className="qr" src="/static/images/qr.png" alt="qr"></img>

      </div>
    </Container>
  );
}

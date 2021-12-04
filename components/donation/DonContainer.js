import { Title, Container, Label, Address } from "./DonContainerElements";

import { useState } from "react";

const useMessage = () => {
  const [message, setMessage] = useState("");

  function toggle() {
    if (message == "") {
      setMessage("Copied!");
      setTimeout(() => {
        setMessage("");
      }, 1000);
    }
  }

  return [message, toggle];
};

export default function DonContainer() {
  const sol_address = "EQ4zjzotsMKmQFbXxbkj7WH4M8nzjDZ2r4r3w2stokyn";
  const bsc_address = "0x14B3D1D05D90E7Bb9EF9847E92cA11DbA10D1fcB";

  // custom hook.
  const [solMssg, toggleSol] = useMessage();
  const [bscMssg, toggleBsc] = useMessage();

  function copyToClipboard(address) {
    var type = "text/plain";
    var blob = new Blob([address], {
      type,
    });
    var data = [
      new ClipboardItem({
        [type]: blob,
      }),
    ];
    navigator.clipboard.write(data).then(() => {
      if (address == sol_address) toggleSol();

      if (address == bsc_address) toggleBsc();

      return;
    });
  }

  return (
    <Container>
      <h1> Donations </h1>{" "}
      <Title>
        If you have found NFT Floor Price app useful, please consider leaving a{" "}
        <b> Solana </b> or <b>BSC</b> tip.{" "}
      </Title>
      <Label>
        <b> Solana Wallet address: </b>{" "}
        <Address onClick={() => copyToClipboard(sol_address)}>
          {" "}
          {sol_address}{" "}
        </Address>{" "}
        {solMssg}{" "}
      </Label>{" "}
      <Label>
        <b> BSC Wallet address: </b>{" "}
        <Address onClick={() => copyToClipboard(bsc_address)}>
          {" "}
          {bsc_address}{" "}
        </Address>{" "}
        {bscMssg}{" "}
      </Label>
    </Container>
  );
}

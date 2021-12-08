import { FaDiscord, FaTwitter } from "react-icons/fa";

export default function Faq() {
  return (
    <div style={{ marginTop: "3.5rem", display:"flex", flexDirection: "column" }}>
      <h1>F.A.Q. <img className="sol-logo" src="/static/images/solana.svg" alt="sol-logo"></img></h1> 
      <p>
      <h2>0️⃣ What is this website about? </h2>
        <b>Hello, the purpose of this website is to keep track of the previous
        floor prices datapoints of the different collections from SOLANA listed. The
        sample frequency is 1h but may be changed due to server congestion.</b>
        <h2>1️⃣Who are you? </h2>
        Im just a boring guy who found out about web development and
        crypto + NFTs some time ago. I&apos;m from Spain. You can follow me on:{" "}
        <a style={{ display:"flex", width: "10rem", flexDirection: "row", alignItems: "center", columnGap:"0.7rem"}} href="https://twitter.com/ESArnau">
          <FaTwitter
            style={{ fontSize: "1.5rem", color: "#1CA0F1"}}
          /> @ESArnau
        </a>
        <a style={{ display:"flex",width: "10rem", flexDirection: "row", alignItems: "center", columnGap:"0.7rem"}} >
          <FaDiscord
            style={{ fontSize: "1.5rem", color: "#5865F2"}}
          /> Nivoa#4968
        </a>
        If you want to support me (economically+emotionally) you can send me some SOL to EQ4zjzotsMKmQFbXxbkj7WH4M8nzjDZ2r4r3w2stokyn
        That would be much appreciated!
        <h2>2️⃣ How to list my project here? </h2>
        Complete the form <a href="/newlisting">here</a>
        <h2>3️⃣ How to get my collection featured? </h2>
        Send me a
        DM on Discord Nivoa#4968 we can talk there!
        <h2>4️⃣ Any other cool websites like this one in Solana ecosystem? </h2>
        Yes!💎
        Go have a look at <a href="https://solanafloor.com/">Solanafloor</a> and <a href="https://solanalysis.com/"> Solanalysis</a>
      </p>
    </div>
  );
}

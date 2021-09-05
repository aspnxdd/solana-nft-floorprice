import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import { useEffect, useState } from "react";

import collectionsDigitalEyes from "../../server/collectionsDigitalEyes.json";
import collectionsSolanart from "../../server/collectionsSolanart.json";

let _collections = [
  {
    url: "solanadogesnfts",
    name: "SolanaDoges",
    marketplace: [],
    img: "solanadogenft.png"
  },
  {
    url: "thugbirdz",
    name: "Thugbirdz",
    marketplace: [],
    img: "thugbirdz.png"
  },
  {
    url: "degenapes",
    name: "Degen Ape Academy",
    marketplace: [],
  },
  {
    url: "abstratica",
    name: "Abstratica",
    marketplace: [],
  },
  {
    url: "solpops",
    name: "Solpops",
    marketplace: [],
  },
  {
    url: "soliens",
    name: "Soliens",
    marketplace: [],
  },
  {
    url: "soldalas",
    name: "Soldalas",
    marketplace: [],
  },
  {
    url: "solanimals",
    name: "Solanimals",
    marketplace: [],
  },
  {
    url: "pixelpenguin",
    name: "PixelPenguins",
    marketplace: [],
  },
  {
    url: "frakt",
    name: "Frakt",
    marketplace: [],
  },
  {
    url: "solchihuahua",
    name: "SolChihuahua",
    marketplace: [],
  },
  {
    url: "smb",
    name: "SMB",
    marketplace: [],
  },
  {
    url: "solbear",
    name: "SolBear",
    marketplace: [],
    img: "solbear.png"
  },
  {
    url: "sollamas-gen2",
    name: "Sollamas",
    marketplace: [],
  },
  {
    url: "boldbadgers",
    name: "Boldbadgers",
    marketplace: [],
  },
  {
    url: "solpunks",
    name: "Solpunks",
    marketplace: [],
  },
  {
    url: "solarians",
    name: "Solarians",
    marketplace: [],
  },
  {
    url: "tophatchicks",
    name: "TopHatChicks",
    marketplace: [],
  },
  {
    url: "rox",
    name: "Rox",
    marketplace: [],
  },
  {
    url: "aurory",
    name: "❌Aurory",
    marketplace: [],
  }
  
];

// loop through the collections to add marketplace name to array

export default function Links() {
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
    <>
      <div className="main-links">
        {marketplaceArr.map((e) => {
          return (
            <div key={e.name}>
              <Link href={`/fetch/${e.url}`}>
                <a className="a-link">
                  <HiChevronRight /> {e.name} &nbsp;
                  ({e.marketplace.includes("digitaleyes") && (
                    <img
                      style={{ marginTop: "0.15rem" }}
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
                  )})
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

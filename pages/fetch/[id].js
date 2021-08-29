import Table from "../../components/table/Table";
import Time from "../../components/currentTime/CurrentTime";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GrUpdate } from "react-icons/gr";
import Spinner from "../../components/spinner/Spinner";

const Styles = styled.div`
  table {
    border-spacing: 0;
    border: 1px solid #c4c4c4;
    margin-left: 2rem;
    margin-top: 2.2rem;
    margin-bottom: 1rem;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #c4c4c4;
      border-right: 1px solid #c4c4c4;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

async function getFloorPrices(req) {
  const res = await fetch(
    `${
      window.origin == "http://localhost:3000"
        ? "http://localhost:8080"
        : "https://nft-nextjs.herokuapp.com"
    }/load`
  );
  const { data } = await res.json();
  return data;
}

function Data() {
  const columns = React.useMemo(() => [
    {
      Header: "Floor Price",
      accessor: "floorprice", //key in data
    },
    {
      Header: "Time",
      accessor: "time",
    },
  ]);

  // setData modifica valor de data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // quan es renderitza el  hook o pateix canvis
  useEffect(() => {
    getFloorPrices().then((data) => {
      setData(data);
    });

    setInterval(() => {
      savePriceFloor();
      console.log("saving");
    }, 120000); //2min
  }, []);

  function updateData() {
    setLoading(true);
    getFloorPrices().then((data) => {
      setLoading(false);
      setData(data);
    });
  }

  return (
    <div>
      <h1>Welcome to NFT Floor Price</h1>
      <h3>
        Here you can track the history of Floor Price for SolanaDoges in{" "}
        <a href="https://digitaleyes.market/collections/SolanaDogeNFTs">
          DigitalEyes
        </a>
      </h3>
      <Time />
      <div style={{ display: "flex", "margin-bottom": "1rem", height: "2rem" }}>
        <button onClick={updateData}>
          <GrUpdate /> Update
        </button>
        {loading && <Spinner />}
      </div>

      <Styles>
        <Table columns={columns} data={data} />
      </Styles>
    </div>
  );
}
export default Data;

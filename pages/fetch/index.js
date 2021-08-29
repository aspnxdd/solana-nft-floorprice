import Table from "../../components/table/Table";
import Time from "../../components/currentTime/CurrentTime";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const NEXT_PUBLIC_STATIC_URL = "https://nftfloorprice.vercel.app";
const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid #c4c4c4;
    margin-left: 2rem;
    margin-top: 2rem;

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

async function getFloorPrices() {
  const res = await fetch(`${NEXT_PUBLIC_STATIC_URL}/api/dbcon`);
  const { data } = await res.json();
  return data;
}

async function savePriceFloor() {
  await fetch(`${NEXT_PUBLIC_STATIC_URL}/api/dbcon`, {
    method: "POST",
  });
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

  const [data, setData] = useState([]);

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
    getFloorPrices().then((data) => {
      setData(data);
    });
  }

  return (
    <div>
      <h1>Welcome to FloorPrices</h1>
      <h3>
        Here you can track the history of Floor Price for SolanaDoges in{" "}
        <a href="https://digitaleyes.market/collections/SolanaDogeNFTs">
          DigitalEyes
        </a>
      </h3>
      <Time />
      <button onClick={updateData}>🔄 Update</button>
      <Styles>
        <Table columns={columns} data={data} />
      </Styles>
    </div>
  );
}
export default Data;

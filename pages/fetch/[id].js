import Table from "../../components/table/Table";
import Time from "../../components/currentTime/CurrentTime";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GrUpdate } from "react-icons/gr";
import Spinner from "../../components/spinner/Spinner";
import { useRouter } from "next/router";
import TitleWelcome from "../../components/common/TitleWelcome";
import InfoTwoHours from "../../components/common/InfoTwoHours";
import DonContainer from "../../components/donation/DonContainer";

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

async function getFloorPrices(id) {
  const res = await fetch(
    `${
      window.origin == "http://localhost:3000"
        ? "http://localhost:8080"
        : "https://nft-nextjs.herokuapp.com"
    }/load`,
    {
      headers: {
        id,
      },
    }
  );
  const { data } = await res.json();
  return data;
}

function Data() {
  //enviamos el id de la href "/fetch/xxxx"
  const router = useRouter();

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
    getFloorPrices(router.query.id).then((data) => {
      setData(data);
    });
  }, [router.query]);

  function updateData() {
    setLoading(true);
    getFloorPrices(router.query.id).then((data) => {
      setLoading(false);
      setData(data);
    });
  }

  const collectionNames = {
    solanadogesnfts: "SolanaDoges",
    thugbirdz: "Thugbirdz",
    degenapes: "Degen Ape Academy",
    abstratica: "Abstratica",
    solpops: "Solpops",
    soliens: "Soliens",
    soldalas: "Soldalas",
    solanimals: "Solanimals",
    pixelpenguin: "PixelPenguins",
    frakt: "Frakt",
    solchihuahua: "SolChihuahua",
    smb: "SMB"
  };

  return (
    <div>
      <TitleWelcome />
      <h3>
        {" "}
        <div>
          Here you can track the history of Floor Price for
          {collectionNames[router.query.id]} in {" "}
          <a href="https://digitaleyes.market/">
            DigitalEyes
          </a>
        </div>
      </h3>
      <DonContainer />
      <InfoTwoHours />
      <Time />
      <div style={{ display: "flex", marginBottom: "1rem", height: "2rem" }}>
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

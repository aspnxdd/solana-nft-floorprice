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
import LinkHome from "../../components/common/LinkHome";
import LineChart from "../../components/chart/LineChart";

const Styles = styled.div`
  display: flex;
  .table-container {
    margin-right: 8rem;
    @media (max-width: 981px) {
      margin-right: 1rem;
    }
  }
  .pagination-div {
    display: flex;
    position: relative;
    top: 1rem;

    left: 2rem;
  }
  .pagination-pages {
    display: block;
    right: 4rem;
    & > span > input {
      width: 2rem;
    }
    & > select {
      width: 6rem;
    }
  }

  .pagination-buttons {
    height: 1rem;
    display: block;
    left: 8rem;
    bottom: 1rem;
    font-size: 1.2rem;
  }
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
// fetch data from server, send id to query in mongo
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
  //
  let { data } = await res.json();

  // meanwhile to reconvert it to local string format
  data.forEach((i) => {
    i.time = i.time.toLocaleString();
  });
  
  const digitalEyesData = data.filter((e) => e.marketplace === "digitaleyes");

  const solanartData = data.filter((e) => e.marketplace === "solanart");

  return {
    digitalEyesData,
    solanartData,
  };
}

function Data() {
  //enviamos el id de la href "/fetch/xxxx"
  const router = useRouter();

  const columns = (title) => {
    return [
      {
        Header: title,
        columns: [
          {
            Header: "Floor Price",
            accessor: "floorprice", //key in data
          },
          {
            Header: "Time",
            accessor: "time",
          },
        ],
      },
    ];
  };

  // setData modifica valor de data
  const [{ solanartData, digitalEyesData }, setData] = useState({
    solanartData: [],
    digitalEyesData: [],
  });
  const [loading, setLoading] = useState(false);
  const [dataForChart, setDataForChart] = useState({});

  // quan es renderitza el  hook o pateix canvis
  useEffect(() => {
    getFloorPrices(router.query.id).then((data) => {
      setData(data);
      const dataForChart = {
        dataSolanart: data.solanartData.map((e) => {
          return e.floorprice;
        }),
        dataDigitalEyes: data.digitalEyesData.map((e) => {
          return e.floorprice;
        }),
        timeSolanart: data.solanartData.map((e) => {
          return e.time;
        }),
        timeDigitalEyes: data.digitalEyesData.map((e) => {
          return e.time;
        }),
      };

  
      setDataForChart(dataForChart);
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
    smb: "SMB",
    solbear: "SolBear",
    solarians: "Solarians",
    boldbadgers: "Boldbadgers",
    "sollamas-gen2": "Sollamas",
    tophatchicks: "TopHatChicks",
    solpunks: "Solpunks",
    rox: "Rox",
    aurory: "Aurory",
  };
  const dataSolanart = {
    label: "Solanart",
    data: dataForChart.dataSolanart,
    fill: false,
    backgroundColor: "#ba49d6",
    borderColor: "#ba49d6",
  };
  const dataDigitalEyes = {
    label: "DigitalEyes",
    data: dataForChart.dataDigitalEyes,
    fill: false,
    backgroundColor: "#599aca", 
    borderColor: "#599aca", 
  };
  //data to render in chart line
  let dataChart = {
    // Array(3).fill(4);
    labels:
    dataForChart.timeSolanart?.length > 0 ? 
      dataForChart.timeSolanart
      : dataForChart.timeDigitalEyes,
      // dataForChart.timeSolanart?.length > 0
      //   ? Array(dataForChart.timeSolanart?.length).fill("")
      //   : Array(dataForChart.timeDigitalEyes?.length).fill(""), //could be time from digital eyes aswell
    datasets: [],
  };
  //add data to dataset array if exists
  if (dataForChart.dataSolanart?.length > 0)
    dataChart.datasets.push(dataSolanart);
  if (dataForChart.dataDigitalEyes?.length > 0)
    dataChart.datasets.push(dataDigitalEyes);

  const options = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div>
      <LinkHome />
      <TitleWelcome />
      <h3>
        {" "}
        <div>
          Here you can track the history of Floor Price for{" "}
          <b>{collectionNames[router.query.id]} </b>
        </div>
      </h3>
      <DonContainer />
      <InfoTwoHours />
      <Time />
      <div style={{ display: "flex", marginBottom: "0rem", height: "2rem" }}>
        <button onClick={updateData}>
          <GrUpdate /> Update
        </button>
        {loading && <Spinner />}
      </div>
      {/* <LineChart data={dataChart} options={options} /> */}
      <Styles>
        {digitalEyesData.length > 1 && (
          <Table columns={columns("DigitalEyes")} data={digitalEyesData} />
        )}
        {solanartData.length > 1 && (
          <Table columns={columns("Solanart")} data={solanartData} />
        )}
      </Styles>
    </div>
  );
}
export default Data;

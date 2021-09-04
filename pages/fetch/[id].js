import Table from "../../components/table/Table";
import Time from "../../components/currentTime/CurrentTime";
import React, { useEffect, useState, useRef } from "react";
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

  //  to reconvert it to local string format
  data.forEach((i) => {
    let date = new Date(i.time);
    i.time = date.toLocaleString("en-GB", {
      hour12: false,
      timeStyle: "short",
      dateStyle: "short",
    });
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
  // set Data for chart
  const [dataForChart, setDataForChart] = useState({});

  const [loading, setLoading] = useState(false);
  const [dataPoints, setDataPoints] = useState(20);

  function updateDataChart(data) {
    // function to update the data chart for update and useeffect
    // slice will get latest dataPoints items

    let dataForChart = {
      dataSolanart: data.solanartData
        .map((e) => {
          return e.floorprice;
        })
        .slice(-dataPoints),
      dataDigitalEyes: data.digitalEyesData
        .map((e) => {
          return e.floorprice;
        })
        .slice(-dataPoints),
      timeSolanart: data.solanartData
        .map((e) => {
          return e.time;
        })
        .slice(-dataPoints),
      timeDigitalEyes: data.digitalEyesData
        .map((e) => {
          return e.time;
        })
        .slice(-dataPoints),
    };

    return dataForChart;
  }
  // quan es renderitza el  hook o pateix canvis
  useEffect(() => {
    console.log(2)
    getFloorPrices(router.query.id).then((data) => {
      // data for Table
      setData(data);
      // data for Chart
      setDataForChart(updateDataChart(data));
    });
  }, [router.query, dataPoints]); //run useffect quan aquests paràmetres canviin

  function updateData() {
    clg(1)
    setLoading(true);
    getFloorPrices(router.query.id).then((data) => {
      setLoading(false);
      // data for Table
      setData(data);
      // data for Chart
      setDataForChart(updateDataChart(data));
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
    // labels (axis X)
    labels:
      dataForChart.timeSolanart?.length > 0
        ? dataForChart.timeSolanart
        : dataForChart.timeDigitalEyes,
    // datasets asix Y
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
      <div className="div-chart">
        <div className="chart-buttons">
          <label> Show data points: </label>
          <button onClick={() => setDataPoints(10)}> 10</button>
          <button onClick={() => setDataPoints(20)}> 20</button>
          <button onClick={() => setDataPoints(50)}> 50</button>
          <button onClick={() => setDataPoints(0)}> All</button>
        </div>
        <LineChart data={dataChart} options={options} />
      </div>
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

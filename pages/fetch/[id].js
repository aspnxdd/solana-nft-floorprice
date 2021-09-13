import Table from "../../components/table/Table";
import Time from "../../components/currentTime/CurrentTime";
import React, { useEffect, useState, useRef } from "react";
import styled, { withTheme } from "styled-components";
import { GrUpdate } from "react-icons/gr";
import Spinner from "../../components/spinner/Spinner";
import { useRouter } from "next/router";
import InfoTwoHours from "../../components/common/InfoTwoHours";
import LineChart from "../../components/chart/LineChart";
import {Styles} from "../../components/table/TableElements"
import {Container} from "../../components/chart/ChartElements"
import { Line } from "react-chartjs-2";

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
  data.forEach((e)=>{
    const date = new Date(e.time);
   
    e.time = date.toLocaleString("en-GB", {
      hour12: false,
      timeStyle: "short",
      dateStyle: "short",
    });

  })

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
  const [dataPoints, setDataPoints] = useState(0);

  function updateDataChart(data) {
    // if (data.solanartData.length  != data.digitalEyesData.length ) 
    // function to update the data chart for update and useeffect
    // slice will get latest dataPoints items
   
 
    let dataForChart = {
      dataSolanart: data.solanartData.map(e => {return e.floorprice })
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
    // fix chart if 1 dataset is smaller than the other one
    if(dataForChart.dataSolanart.length < dataForChart.dataDigitalEyes.length) {
      dataForChart.dataSolanart.reverse()
      dataForChart.dataSolanart.length = dataForChart.dataDigitalEyes.length
      dataForChart.dataSolanart.reverse()
    }

    if(dataForChart.dataSolanart.length > dataForChart.dataDigitalEyes.length) {
      dataForChart.dataDigitalEyes.reverse()
      dataForChart.dataDigitalEyes.length = dataForChart.dataSolanart.length
      dataForChart.dataDigitalEyes.reverse()
    }


    console.log("dataForChart",dataForChart)
    return dataForChart;
  }
  // quan es renderitza el  hook o pateix canvis
  // useEffect for table
  useEffect(() => {
    getFloorPrices(router.query.id).then((data) => {
      // data for Table
      setData(data);
    });
  }, [router.query]); //run useffect quan aquests paràmetres canviin

  // useEffect for Chart
  useEffect(() => {
    console.log(2);
    setLoading(true);
    getFloorPrices(router.query.id).then((data) => {
      // data for Chart
      setLoading(false);
      setDataForChart(updateDataChart(data));
    });
  }, [router.query, dataPoints]); //run useffect quan aquests paràmetres canviin

  function updateData() {
    console.log(1);
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
    type: "line",
    label: "Solanart",
    data: dataForChart.dataSolanart,
    fill: false,
    backgroundColor: "#ba49d6",
    borderColor: "#ba49d6",
    tension: 0.2,
    order: 1,
    offset: true,
    clip: true,
    stack: "line",
  
  };
  const dataDigitalEyes = {
    type: "line",
    label: "DigitalEyes",
    data: dataForChart.dataDigitalEyes,
    fill: false,
    backgroundColor: "#599aca",
    borderColor: "#599aca",
    tension: 0.2,
    order: 2,
    stack: "line"
  };
  //data to render in chart line

  let dataChart = {
    // labels (axis X)
    labels:
      
      dataForChart.timeSolanart?.length > dataForChart.timeDigitalEyes?.length ? dataForChart.timeSolanart : dataForChart.timeDigitalEyes,
      
    // datasets asix Y
    datasets: [],
  };
  //add data to dataset array if exists
  if (dataForChart.dataSolanart?.length > 0)
    dataChart.datasets.push(dataSolanart);
  if (dataForChart.dataDigitalEyes?.length > 0)
    dataChart.datasets.push(dataDigitalEyes);

  const options = {
    borderWidth:5,
    indexAxis: 'x', 
  
    autoSkip: false,
    
    spanGaps: true,
    stackWeight: 3,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          stacked: true,
          position: "right",
          
          ticks: {
            beginAtZero: true,
            major: true,
            callback: (tick) => (Number(tick) % 10 === 0 ? tick : null) // Replace null with "" to show gridline
          },
        },
      ],
      xAxes: [
        {
          
          ticks: {
            callback: (tick) => (Number(tick) % 10 === 0 ? tick : null) // Replace null with "" to show gridline
          },
          reverse: true,
          
          
        },
      ],
     
    },
  };
  return (
    <div style={{marginTop:"3.5rem"}}>
   
      
      <InfoTwoHours />
      <Time />
      <h3><b>{collectionNames[router.query.id]}</b> </h3>
      <div style={{ display: "flex", marginBottom: "0rem", height: "2rem" }}>
        <button onClick={updateData}>
          <GrUpdate /> Update
        </button>
        {loading && <Spinner />}
      </div>
      <Container>
        <div className="chart-buttons">
          <label> Show data points: </label>
          <button onClick={() => setDataPoints(10)}> 10</button>
          <button onClick={() => setDataPoints(20)}> 20</button>
          <button onClick={() => setDataPoints(50)}> 50</button>
          <button onClick={() => setDataPoints(0)}> All</button>
        </div>
        <LineChart data={dataChart} options={options} />
      </Container>
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

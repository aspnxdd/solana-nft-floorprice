import Table from "../../components/table/Table";
import Time from "../../components/currentTime/CurrentTime";
import React, { useEffect, useState, useRef } from "react";
import styled, { withTheme } from "styled-components";
import { GrUpdate } from "react-icons/gr";
import Spinner from "../../components/spinner/Spinner";
import { useRouter } from "next/router";
import InfoTwoHours from "../../components/common/InfoTwoHours";
import LineChart from "../../components/chart/LineChart";
import { Styles } from "../../components/table/TableElements";
import {
  Wrapper,
  TopWrapper,
  InfoContainer,
} from "../../components/chart/ChartElements";
import { Line } from "react-chartjs-2";
import ContainerLineChart from "../../components/chart/ContainerLineChart";
import ContainerBarChart from "../../components/chart/ContainerBarChart";

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
  // data.forEach((e) => {
  //   const date = new Date(e.time);

  //   e.time = date.toLocaleString("en-GB", {
  //     hour12: false,
  //     timeStyle: "short",
  //     dateStyle: "short",
  //   });
  // });

  const digitalEyesData = data.filter((e) => e.marketplace === "digitaleyes");

  const solanartData = data.filter((e) => e.marketplace === "solanart");

  return {
    digitalEyesData,
    solanartData,
  };
}

function Data() {
  const [loading, setLoading] = useState(false);
  // setData modifica valor de data
  const [{ solanartData, digitalEyesData }, setData] = useState({
    solanartData: [],
    digitalEyesData: [],
  });
  const [dataForChart, setDataForChart] = useState({
    solanartData: [],
    digitalEyesData: [],
  });
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
    setLoading(true);
    getFloorPrices(router.query.id).then((data) => {
      // data for Chart
      setLoading(false);

      setDataForChart(data);
    });
  }, [router.query]); //run useffect quan aquests paràmetres canviin

  function updateData() {
    setLoading(true);
    getFloorPrices(router.query.id).then((data) => {
      setLoading(false);
      // data for Table
      setData(data);
      // data for Chart
      // setDataForChart(updateDataChartFloorPrice(data));
      // updateDataChartNumberOfTokensListed(data)
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

  //data to render in chart line

  return (
    <div>
      <TopWrapper>
      <InfoContainer>
        <InfoTwoHours />
        <Time />
        <h3>
          <b>{collectionNames[router.query.id]}</b>{" "}
        </h3>
        </InfoContainer>
       

      </TopWrapper>
      <div style={{ display: "flex", marginBottom: "0rem", height: "2rem" }}>
        <button onClick={updateData}>
          <GrUpdate /> Update
        </button>
        {loading && <Spinner />}
      </div>
      <Wrapper>
        <ContainerLineChart
          data={dataForChart}
          param={"floorprice"}
        ></ContainerLineChart>
        <ContainerLineChart
          data={dataForChart}
          param={"numberofowners"}
        ></ContainerLineChart>
        <ContainerLineChart
          data={dataForChart}
          param={"numberoftokenslisted"}
        ></ContainerLineChart>
        <ContainerBarChart data={dataForChart}></ContainerBarChart>
      </Wrapper>
      {/* <Styles>
        {digitalEyesData.length > 1 && (
          <Table columns={columns("DigitalEyes")} data={digitalEyesData} />
        )}
        {solanartData.length > 1 && (
          <Table columns={columns("Solanart")} data={solanartData} />
        )}
      </Styles> */}
    </div>
  );
}
export default Data;

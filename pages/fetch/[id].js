import Time from "../../components/currentTime/CurrentTime";
import React, { useEffect, useState } from "react";
import { GrUpdate } from "react-icons/gr";
import Spinner from "../../components/spinner/Spinner";
import { useRouter } from "next/router";
import InfoTwoHours from "../../components/common/InfoTwoHours";
import {
  Wrapper,
  TopWrapper,
  InfoContainer,
  Img,
  Info,
  Marketplaces,
  Area,
  UpdateBtn
} from "../../components/chart/ChartElements";
import ContainerLineChart from "../../components/chart/ContainerLineChart";
import ContainerBarChart from "../../components/chart/ContainerBarChart";
import _collections from "../../components/cards/_collections";

// Fetch data from server, send id to query in mongo
async function getFloorPrices(id) {
  

  console.log("id", id);
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

  const digitalEyesData = data.filter((e) => e.marketplace === "digitaleyes");

  const solanartData = data.filter((e) => e.marketplace === "solanart");

  return {
    digitalEyesData,
    solanartData,
  };
}

function Data() {
  const [loading, setLoading] = useState(false);
  const [infoData, setInfoData] = useState({});
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
    if (router.query.id) {
    localStorage.setItem("id", router.query.id);
  } else {
    router.query.id = localStorage.getItem("id");
  }
    setLoading(true);
    getFloorPrices(router.query.id).then((data) => {
      // data for Chart
      setLoading(false);
      setInfoData(_collections.find((e) => e.url == [router.query.id]));
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

  //data to render in chart line

  return (
    <Area>
      <TopWrapper>
        <InfoContainer>
          <Info>
            <InfoTwoHours />
            <Time />
            <h2 style={{ marginLeft: "2rem", height: "2rem" }}>
              <b>{infoData?.name}</b>{" "}
            </h2>
            <Marketplaces>
              {infoData?.digitaleyes && (
                <a href={infoData.digitaleyes}>
                  <img
                    src="/static/images/digitaleyes.svg"
                    alt="de-logo"
                    width="50px"
                  ></img>
                </a>
              )}
              {infoData?.solanart && (
                <a href={infoData.solanart}>
                  <img
                    src="/static/images/solanart.svg"
                    alt="de-logo"
                    width="40px"
                  ></img>
                </a>
              )}
            </Marketplaces>
          </Info>

          <Img>
            <img
              src={`/static/images/${infoData.img}`}
              alt="so-logo"
              width="200px"
            ></img>
          </Img>
        </InfoContainer>
      </TopWrapper>
      <UpdateBtn>
        <button onClick={updateData}>
          <GrUpdate /> Update
        </button>
        {loading && <Spinner />}
      </UpdateBtn>
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
    </Area>
  );
}
export default Data;

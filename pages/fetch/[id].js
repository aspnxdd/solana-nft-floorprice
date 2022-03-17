import Time from "../../components/currentTime/CurrentTime";
import React, { useEffect, useState } from "react";

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
  UpdateBtnDiv,
  UpdateBtn,
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
  let  data  = await res.json();
  console.log("data",data)
  const digitalEyesData = data.filter((e) => e.marketplace === "de")[0];
  
  const solanartData = data.filter((e) => e.marketplace === "so")[0];
  console.log("digitalEyesData",digitalEyesData)

  // const magicEdenData = data.filter((e) => e.marketplace === "magiceden");
  //   console.log("magicEdenData",magicEdenData)
  return {
    digitalEyesData,
    solanartData,
  };
}

function Data() {
  const [loading, setLoading] = useState(false);
  const [infoData, setInfoData] = useState({});
  // setData modifica valor de data

  const [dataForChart, setDataForChart] = useState({
    solanartData: [],
    digitalEyesData: [],
  });
  const router = useRouter();

  // useEffect for Chart
  useEffect(() => {
    if (router.query.id) {
      setLoading(true);
      getFloorPrices(router.query.id).then((data) => {
        // data for Chart
        setLoading(false);

        setInfoData(_collections.find((e) => e.url == [router.query.id]));

        setDataForChart(data);
      });
    }
  }, [router.query.id]);

  function updateData() {
    setLoading(true);
    getFloorPrices(router.query.id).then((data) => {
      setLoading(false);
      setData(data);
    });
  }

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
                    alt="so-logo"
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
      <UpdateBtnDiv>
        <UpdateBtn onClick={updateData}>🔄Update</UpdateBtn>
        {loading && <Spinner />}
      </UpdateBtnDiv>
      <Wrapper>
        <ContainerLineChart
          data={dataForChart}
          param={"price"}
        ></ContainerLineChart>
        <ContainerLineChart
          data={dataForChart}
          param={"number_of_owners"}
        ></ContainerLineChart>
        <ContainerLineChart
          data={dataForChart}
          param={"number_of_tokens_listed"}
        ></ContainerLineChart>
        <ContainerBarChart    data={dataForChart}></ContainerBarChart>
      </Wrapper>
    </Area>
  );
}
export default Data;

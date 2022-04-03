import Time from "../../components/currentTime/CurrentTime";
import React from "react";
import {
  Wrapper,
  TopWrapper,
  InfoContainer,
  Img,
  Info,
  Marketplaces,
  Area,
} from "../../components/chart/ChartElements";
import ContainerLineChart from "../../components/chart/ContainerLineChart";
import ContainerBarChart from "../../components/chart/ContainerBarChart";
import useGetFloorPrices from "../../hooks/useGetFloorPrices";
import InfoTwoHours from "../../components/common/InfoTwoHours";

function Data() {
  const { infoData, dataForChart, loading } = useGetFloorPrices();
  if (infoData && dataForChart && !loading)
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
                  <a href={infoData?.digitaleyes}>
                    <img
                      src="/static/images/digitaleyes.svg"
                      alt="de-logo"
                      width="50px"
                    ></img>
                  </a>
                )}
                {infoData.solanart && (
                  <a href={infoData?.solanart}>
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
                src={`/static/images/${infoData?.img}`}
                alt="so-logo"
                width="200px"
                style={{ borderRadius: "100%" }}
              ></img>
            </Img>
          </InfoContainer>
        </TopWrapper>

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
          <ContainerBarChart data={dataForChart}></ContainerBarChart>
        </Wrapper>
      </Area>
    );
  else {
    return <h1>Something went wrong</h1>;
  }
}
export default Data;

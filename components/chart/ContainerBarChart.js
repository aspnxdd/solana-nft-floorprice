import React from "react";
import { Container } from "./ChartElements";
import BarChart from "./BarChart";

export default function ContainerBarChart({ data }) {
  // set Data for chart

  const dataForChart = updateDataChart(data);

  function updateDataChart(data) {
    let dataChart = {
      datasets: [],
      labels: ["1"],
    };
    // wait till all data is fetched
    console.log("data",data)
    if (
      data.digitalEyesData?.data?.length > 0 ||
      data.solanartData?.data?.length > 0 
      // data.magicEdenData.length > 0
    ) {
      const solanartData = data.solanartData?.data?.slice(-1);
      const digitalEyesData = data.digitalEyesData?.data?.slice(-1);
      console.log("digitalEyesData",digitalEyesData)
      // const magicEdenData = data.magicEdenData?.slice(-1);

      let dataForChart = {
        dataSolanart: solanartData
          ? Object.values(solanartData[0]?.number_of_nft_per_owner)
          : [],
        dataDigitalEyes: digitalEyesData
          ? Object.values(digitalEyesData[0]?.number_of_nft_per_owner)
          : [],
        // dataMagicEden: magicEdenData[0]
        //   ? Object.values(magicEdenData[0]?.numberofnftperowner)
        //   : [],
        labelSolanart: solanartData
          ? Object.keys(solanartData[0]?.number_of_nft_per_owner)
          : [],
        labelDigitalEyes: digitalEyesData
          ? Object.keys(digitalEyesData[0]?.number_of_nft_per_owner)
          : [],
        // labelMagicEden: magicEdenData[0]
        //   ? Object.keys(magicEdenData[0]?.numberofnftperowner)
        //   : [],
      };

      if (dataForChart) {
        const dataSolanart = {
          label: "Solanart",
          data: dataForChart.dataSolanart?.map((o, i) => ({
            x: dataForChart.labelSolanart[i],
            y: o,
          })),
          key: "solanart",
          backgroundColor: "#ba49d6",
          borderColor: "#ba49d6",
        };
        const dataDigitalEyes = {
          label: "DigitalEyes",
          data: dataForChart.dataDigitalEyes?.map((o, i) => ({
            x: dataForChart.labelDigitalEyes[i],
            y: o,
          })),
          key: "digitaleyes",
          backgroundColor: "#599aca",
          borderColor: "#599aca",
        };
        // const dataMagicEden = {
        //   label: "MagicEden",
        //   data: dataForChart.dataMagicEden?.map((o, i) => ({
        //     x: dataForChart.labelMagicEden[i],
        //     y: o,
        //   })),
        //   key: "magiceden",
        //   backgroundColor: "#f44c9f",
        //   borderColor: "#f44c9f",
        // };

        //add data to dataset array if exists
        if (dataForChart.dataSolanart?.length > 0)
          dataChart.datasets.push(dataSolanart);

        if (dataForChart.dataDigitalEyes?.length > 0)
          dataChart.datasets.push(dataDigitalEyes);

        // if (dataForChart.dataMagicEden?.length > 0)
        //   dataChart.datasets.push(dataMagicEden);
      }
    }

    return dataChart;
  }

  const options = {
    spanGaps: 1000 * 60 * 60 * 24 * 2, // 2 days
    interaction: {
      intersect: false,
      mode: "index",
    },
    plugins: {
      sort: {
        enable: true,
        mode: "array",
      },
      title: {
        display: true,
        text: "Number of NFT per owner (listed)",
        font: {
          size: 26,
        },
      },
    },
    borderWidth: 5,
    maintainAspectRatio: false,
    responsive: true,

    scales: {
      x: {
        display: true,

        grid: {
          // display: false,
          // drawBorder: true,
        },
      },
      y: {
        grid: {
          // display: false,
          // drawBorder: false,
        },
      },
    },
  };

  return (
    <Container>
      <BarChart data={dataForChart} options={options} />{" "}
    </Container>
  );
}

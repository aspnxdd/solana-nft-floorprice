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

    if (data.digitalEyesData.length > 0 || data.solanartData.length > 0) {
      const solanartData = data.solanartData?.slice(-1);
      const digitalEyesData = data.digitalEyesData?.slice(-1);
      const magicEdenData = data.magicEdenData?.slice(-1);
     

      let dataForChart = {
        dataSolanart: solanartData[0]
          ? Object.values(solanartData[0]?.numberofnftperowner)
          : [],
        dataDigitalEyes: digitalEyesData[0]
          ? Object.values(digitalEyesData[0]?.numberofnftperowner)
          : [],
        dataMagicEden: magicEdenData[0]
          ? Object.values(magicEdenData[0]?.numberofnftperowner)
          : [],
        labelSolanart: solanartData[0]
          ? Object.keys(solanartData[0]?.numberofnftperowner)
          : [],
        labelDigitalEyes: digitalEyesData[0]
          ? Object.keys(digitalEyesData[0]?.numberofnftperowner)
          : [],
        labelMagicEden: magicEdenData[0]
          ? Object.keys(magicEdenData[0]?.numberofnftperowner)
          : [],
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
        const dataMagicEden = {
          label: "MagicEden",
          data: dataForChart.dataMagicEden?.map((o, i) => ({
            x: dataForChart.labelMagicEden[i],
            y: o,
          })),
          key: "magiceden",
          backgroundColor: "#f44c9f",
          borderColor: "#f44c9f",
        };

        //add data to dataset array if exists
        if (dataForChart.dataSolanart?.length > 0)
          dataChart.datasets.push(dataSolanart);

        if (dataForChart.dataDigitalEyes?.length > 0)
          dataChart.datasets.push(dataDigitalEyes);

        if (dataForChart.dataMagicEden?.length > 0)
          dataChart.datasets.push(dataMagicEden);
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

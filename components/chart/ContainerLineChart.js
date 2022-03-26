import React, { useState } from "react";
import { Container,TimeButton } from "./ChartElements";
import LineChart from "../../components/chart/LineChart";
import "chartjs-adapter-luxon";

export default function ContainerLineChart({ data, param }) {

  const [dataPoints, setDataPoints] = useState(20);

  const dataForChart = updateDataChart(data, param);

  function updateDataChart(data) {
    const dataForChart = {
      dataSolanart: data.solanartData?.data?.slice(-dataPoints),
      dataDigitalEyes: data.digitalEyesData?.data?.slice(-dataPoints),
      // dataMagicEden: data.magicEdenData.slice(-dataPoints)
    };
    return dataForChart;
  }

  const dataSolanart = {
    type: "line",
    label: "Solanart",
    data: dataForChart.dataSolanart?.map((o) => ({ x: new Date(Number(o.time.$date.$numberLong)),  y: o[param] })),
    order: 2,
    fill: false,
    backgroundColor: "#ba49d6",
    borderColor: "#ba49d6",
    tension: 0.2,
    spanGaps: true,
    stack: true,
  };
  const dataDigitalEyes = {
    type: "line",
    label: "DigitalEyes",
    order: 1,
    data: dataForChart.dataDigitalEyes?.map((o) => ({ x: new Date(Number(o.time.$date.$numberLong)), y: o[param] })),
    fill: false,
    backgroundColor: "#599aca",
    borderColor: "#599aca",
    tension: 0.2,
    spanGaps: true,
  

  };


  const dataChart = {
    // labels (axis X)
    labels: new Array(),

    // datasets asix Y
    datasets: new Array(),
  };

  if (dataForChart.dataDigitalEyes?.length > 0)
    dataChart.datasets.push(dataDigitalEyes);
  if (dataForChart.dataSolanart?.length > 0)
    dataChart.datasets.push(dataSolanart);
  // if (dataForChart.dataMagicEden?.length > 0)
  //  dataChart.datasets.push(dataMagicEden);
  //add data to dataset array if exists
  console.log("dataChart",dataChart)
  const titles = {
    price:"Floor Price History",
    number_of_owners:"Number of owners (listed)",
    number_of_tokens_listed:"Number of tokens listed"
  }

  const title = titles[param] ?? null;
  

  const options = {
    interaction: {
      mode: "index",
      axis: "xy",
      intersect: true,
    },

    plugins: {
      sort: {
        enable: true,
        mode: "array",
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 26,
        },
      },
    },
    borderWidth: 5,
    maintainAspectRatio: false,
    responsive: true,
    indexAxis: "x",
    scales: {
      x: {
        alignToPixels: true,
        beginAtZero: true,
        type: "time",
        ticks: {
          autoSkip: false,
          beginAtZero: false,
          grid: {
            
            z:-1,
          },
        },
        time: {
          displayFormats: {
            hour: "dd/MM/yyyy, HH:mm",
          },
        },
        display: true,
      },
      y: {
        offset: true,
        stacked: true,
        ticks: {
          autoSkip: true,
          beginAtZero: false,
        },
        grid: {
          
          
          z:-6,
        },
      },
    },
  };

  return (
    <Container>
      <span>
        <TimeButton onClick={() => setDataPoints(24)}> 1D</TimeButton>
        <TimeButton onClick={() => setDataPoints(24*7)}> 1W</TimeButton>
        <TimeButton onClick={() => setDataPoints(24*7*30)}> 1M</TimeButton>
        <TimeButton onClick={() => setDataPoints(24*7*30*2)}> 2M</TimeButton>
        <TimeButton onClick={() => setDataPoints(24*7*30*3)}> 3M</TimeButton>
        <TimeButton onClick={() => setDataPoints(0)}> All</TimeButton>
      </span>
      <LineChart data={dataChart} options={options} />
    </Container>
  );
}

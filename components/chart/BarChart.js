import React from "react";
import { Bar  } from "react-chartjs-2";

export default function BarChart({ data, options }) {
  console.log(data)
  return (
    

      <Bar data={data} options={options} />
   
  );
}

import React from "react";
import { Line } from "react-chartjs-2";

export default function LineChart({ data, options }) {
  return (
    

      <Line data={data} options={options} />
   
  );
}

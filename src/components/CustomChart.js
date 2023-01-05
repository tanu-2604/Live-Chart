import React from "react";
import { Bar, Chart, Doughnut, Pie } from "react-chartjs-2";
//import { Chart } from "react-google-charts";

export function CustomChart({ data, options, styleData, chartType }) {
  switch (chartType) {
    case "PieChart":
      return <Pie data={data} options={options} />;
    case "Doughnut":
      return <Doughnut data={data} options={options} />;
    case "Stacked":
      return <Bar options={options} data={data} />;
    case "Charts":
      return (
        <Chart
          type={styleData.chartType}
          data={data}
          style={{ fontWeight: 500 }}
          options={options}
        />
      )
      default:
        return;
  }
}

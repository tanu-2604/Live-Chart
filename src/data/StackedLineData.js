export const mixedStackedOptions = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Last logged event FailedBeforeCharging",
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      type: "linear",
       stacked: true,
      display: true,
      position: "left",
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

export const mixedStackedData = {
  labels: [
    "NonIdentfied",
    "Missing",
    "Powersupply",
    "ShortCircuit",
    "TimeControl",
    "Voltage",
    "Unknown1",
  ],
  datasets: [
    {
      type: "bar",
      label: "Dataset 1",
      data: [550, 1600, 1800, 2200, 1500, 1100, 900],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(53, 157, 32, 1)",
      yAxisID: "y",
    },
    {
      type: "bar",
      label: "Dataset 2",
      data: [1400, 2200, 1900, 2300, 2100, 1600, 800],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(234, 17, 17, 1)",
      yAxisID: "y",
    },
    {
      type: "line",
      label: "Dataset 2",
      data: [50.2, 79, 91.2, 96.3, 97.4, 98.4, 99.2],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "y1",
    },
  ],
};

export const mixedStackedStyle = {
  chartType: "bar",
  width: "95%",
  height: "600px",
};

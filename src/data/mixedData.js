export const mixedOptions = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Last logged event FailedBeforeCharging',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};


export const mixedData={
    "labels": [
        "NonIdentfied",
        "Missing",
        "Powersupply",
        "ShortCircuit",
        "TimeControl",
        "Voltage",
        "Unknown1"
    ],
    "datasets": [
        {
             "type": 'bar',
            "label": "Dataset 1",
            "data": [
                850,
                500,
                350,
                200,
                80,
                30,
                20
            ],
            "borderColor": "rgb(255, 99, 132)",
            "backgroundColor": "rgba(255, 99, 132, 0.5)",
             "yAxisID": 'y',
        },
        {
             "type": 'line',
            "label": "Dataset 2",
            "data": [
                50.2,
                79,
                91.2,
                96.3,
                97.4,
                98.4,
                99.2
            ],
            "borderColor": "rgb(53, 162, 235)",
            "backgroundColor": "rgba(53, 162, 235, 0.5)",
             "yAxisID": 'y1',
        }
    ]
}

export const mixedStyle ={
    chartType:"bar",
      width:"95%",
      height:"400px"
}
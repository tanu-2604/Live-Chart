export const stackedOptions = {
  plugins: {
    title: {
      display: true,
      text: 'Charge outcome all customers',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export const stackedData={
       "labels": [
        "Aug 28",
        "Sep 11",
        "Sep 25",
        "Oct 9",
        "Oct 23",
        "Nov 6",
        "Nov 20"
    ],
    "datasets": [
        {
            "label": "Dataset 1",
            "data": [
                550,
                1600,
                1800,
                2200,
                1500,
                1100,
                900
            ],
            "borderColor": "rgb(255, 99, 132)",
            "backgroundColor": "rgba(53, 157, 32, 1)"
        },
        {
            "label": "Dataset 2",
            "data": [
               1400,
                2200,
                1900,
                2300,
                2100,
                1600,
                800
            ],
            "borderColor": "rgb(53, 162, 235)",
            "backgroundColor": "rgba(234, 17, 17, 1)"
        }
    ]
}
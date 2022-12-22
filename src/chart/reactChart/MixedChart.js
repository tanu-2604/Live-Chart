import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);


// export const data = {
//   labels,
//   datasets: [
//     {
//       type: 'line',
//       label: 'Dataset 1',
//       borderColor: 'rgb(255, 99, 132)',
//       borderWidth: 2,
//       fill: false,
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//     },
//     {
//       type: 'bar',
//       label: 'Dataset 2',
//       backgroundColor: 'rgb(75, 192, 192)',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'white',
//       borderWidth: 2,
//     },
//     {
//       type: 'bar',
//       label: 'Dataset 3',
//       backgroundColor: 'rgb(53, 162, 235)',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//     },
//   ],
// };
export function MixedChart() {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data={
    "labels": [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July"
    ],
    "datasets": [
        {
             "type": 'bar',
            "label": "Dataset 1",
            "data": [
                200,
                300,
                400,
                500,
                600,
                700,
                900
            ],
            "borderColor": "rgb(255, 99, 132)",
            "backgroundColor": "rgba(255, 99, 132, 0.5)"
        },
        {
             "type": 'line',
            "label": "Dataset 2",
            "data": [
                620,
                665,
                528,
                287,
                958,
                80,
                692
            ],
            "borderColor": "rgb(53, 162, 235)",
            "backgroundColor": "rgba(53, 162, 235, 0.5)"
        }
    ]
}

  return <Chart type='bar' data={data} />;
}

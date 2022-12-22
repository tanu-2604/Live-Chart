import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Stacked Bar Chart',
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

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       backgroundColor: 'rgb(255, 99, 132)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       backgroundColor: 'rgb(75, 192, 192)',
//     },
//     {
//       label: 'Dataset 3',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       backgroundColor: 'rgb(53, 162, 235)',
//     },
//   ],
// };
// console.log(data.datasets);
export function StackedBarChart() {
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
  return <Bar options={options} data={data} />;
}

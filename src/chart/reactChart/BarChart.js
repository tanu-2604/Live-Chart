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
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Bar Chart',
    },
  },
};



export function BarChart() {
   // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
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

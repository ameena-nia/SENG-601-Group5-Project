import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const data = {
    labels: ["White", "Black", "Asian", "Latino"],
    datasets: [
      {
        label: "Error Rate",
        data: [5, 15, 10, 8],
        backgroundColor: "#4f3d64",
        borderColor: "#4f3d64",
        borderRadius: {
            topLeft: 25,
            topRight: 25,
            bottomLeft: 0,
            bottomRight: 0
        },
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,

    
    animation: {
      duration: 1800,  
      easing: "easeOutBounce", 
    },

    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Error Rates by Demographic",
      },
    },

    scales: {
        x: {
            grid: {
            display: false, 
            },
        },
        y: {
            grid: {
            display: false, 
            },
            beginAtZero: true,
        },
        },
  };

  return <Bar data={data} options={options} />;
};

export default Chart;

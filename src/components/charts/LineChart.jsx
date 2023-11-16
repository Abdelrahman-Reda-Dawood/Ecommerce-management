import React from 'react';
import {
  Chart as ChartJs,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const LineChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    legend: false,
    datasets: [
      {
        data: [6, 4, 3, 5, 4, 6, 8],
        borderColor: 'white',
        tension: '0.2',
        pointRadius: '0',
      },
      {
        data: [1, 6, 3, 8, 1, 8, 6],
        borderColor: '#5BDC90',
        tension: '0.2',
        pointRadius: '0',
      },
      {
        data: [0, 5, 2, 5, 2, 7, 5],
        borderColor: '#FFE500',
        tension: '0.2',
        pointRadius: '0',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 9,
      },
    },
  };

  return (
    <div className=" 2xl:h-[350px] 2xl:w-[800px] xl:h-[300px] xl:w-[700px] lg:h-[250px] lg:w-[600px] md:h-[200px] md:w-[500px] sm:h-[150px] sm:w-[500px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;

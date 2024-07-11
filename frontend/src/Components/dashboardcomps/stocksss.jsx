import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Equipment A', 'Equipment B', 'Equipment C', 'Equipment D'],
  datasets: [
    {
      label: 'Available Equipment',
      data: [12, 19, 3, 5],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function EquipmentStickChart() {
  return (
    <div>
      <h2>Available Equipment</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['In Warehouse', 'Dispatched', 'Installed Awaiting Confirmation'],
  datasets: [
    {
      data: [30, 50, 20],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

export default function DeliveryPieChart() {
  return (
    <div>
      <h2>Delivery Status</h2>
      <Pie data={data} />
    </div>
  );
}

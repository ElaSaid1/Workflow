import React from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';


// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  // Data for the Bar Chart
  const barData = {
    labels: ['Equipment 1', 'Equipment 2', 'Equipment 3', 'Equipment 4'],
    datasets: [
      {
        label: 'Available Equipment',
        data: [12, 19, 3, 5],
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'],
      },
    ],
  };

  // Data for the Pie Chart
  const pieData = {
    labels: ['Waiting in Warehouse', 'Dispatched but not Installed', 'Installed but Awaiting Confirmation'],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
      },
    ],
  };

  // Threshold for equipment stock
  const lowStockThreshold = 5;
  const equipmentStock = {
    'Equipment 1': 4,
    'Equipment 2': 10,
    'Equipment 3': 2,
    'Equipment 4': 7,
  };

  const lowStockItems = Object.entries(equipmentStock).filter(([key, value]) => value < lowStockThreshold);

  return (
    <div className="container">
      <div className="header">
        <h1>Dashboard</h1>
      </div>
      <div className="chart-container">
        <div className="chart card">
          <h2>Available Equipment</h2>
          <Bar data={barData} />
        </div>
        <div className="chart card">
          <h2>Delivery Status</h2>
          <Pie data={pieData} />
        </div>
      </div>
      <div className="low-stock card">
        <h2>Low Stock Equipment</h2>
        {lowStockItems.length > 0 ? (
          <ul>
            {lowStockItems.map(([item, stock]) => (
              <li key={item}>{item}: {stock} left</li>
            ))}
          </ul>
        ) : (
          <p>All equipment stocks are above the threshold.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

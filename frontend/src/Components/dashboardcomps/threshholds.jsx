import React from 'react';
import { Table } from 'react-bootstrap';

const equipmentData = [
  { name: 'Equipment A', quantity: 2 },
  { name: 'Equipment B', quantity: 5 },
  { name: 'Equipment C', quantity: 1 },
  { name: 'Equipment D', quantity: 4 },
];

const threshold = 3;

export default function EquipmentThreshold() {
  const belowThreshold = equipmentData.filter(item => item.quantity < threshold);

  return (
    <div>
      <h2>Equipment Below Threshold</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Equipment</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {belowThreshold.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

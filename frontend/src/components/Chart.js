import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables);


const BarChart = () => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    // Make an API call to fetch employee data and update the state
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setEmployeeData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const departments = [...new Set(employeeData.map(employee => employee.department))];
  const departmentCounts = departments.map(department => {
    return employeeData.filter(employee => employee.department === department).length;
  });

  const chartData = {
    labels: departments,
    datasets: [
      {
        label: 'Number of Employees',
        data: departmentCounts,
        backgroundColor:  [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        background: 'rgba(	228,	220,	207, 0.2)',
        borderRadius: '7px',
        boxShadow: '0 2px 5px #ccc',
        padding: '10px',
        position: 'absolute',
        margin: 'auto',
        width: '80%'
        },
    ]
  };

  return (
    <div>
       <h2>Employee Department Distribution</h2>
      
      <Bar className='BarChart' data={chartData} />
    </div>
  );
};

export default BarChart;

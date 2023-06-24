
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeTable from './EmployeeTable';
import EmployeeForm from './EmployeeForm';

const EmployeeDashboard = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

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

  const handleEmployeeSelect = (employee) => {
    setSelectedEmployee(employee);
    setShowForm(true);
  };

  const handleEmployeeAdd = (employee) => {
    axios.post('http://localhost:5000/api/data', employee)
      .then(response => {
        setEmployeeData([...employeeData, response.data]);
        window.location.reload(false)
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleEmployeeUpdate = (employee) => {
    axios.put(`http://localhost:5000/api/data/${employee._id}`, employee)
      .then(response => {
        const index = employeeData.findIndex(e => e.id === employee._id);
        const newData = [...employeeData];
        newData[index] = response.data;
        setEmployeeData(newData);
        window.location.reload(false)
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleEmployeeDelete = (_id) => {
    axios.delete(`http://localhost:5000/api/data/${_id}`)
      .then(response => {
        setEmployeeData(employeeData.filter(employee => employee._id !== _id));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    
    <div className='EmployeeTable'>
      <h2>Employee Dashboard</h2>
     <EmployeeTable employeeData={employeeData} onEmployeeSelect={handleEmployeeSelect} onDelete={handleEmployeeDelete} />
      {showForm ? (
        <EmployeeForm employee={selectedEmployee} onAdd={handleEmployeeAdd} onUpdate={handleEmployeeUpdate} onCancel={() => setShowForm(false)} />
      ) : (
        <button className='btn btn-outline-success' onClick={() => {setShowForm(true)}}>Add Employee</button>
      )}
    </div>
  );
};

export default EmployeeDashboard;

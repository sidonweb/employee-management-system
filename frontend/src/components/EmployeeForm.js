import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ employee, onAdd, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    age: '',
    department: '',
    empstatus: ''
  });

  useEffect(() => {
    if (employee) {
      setFormData({
        name: employee.name,
        address: employee.address,
        age: employee.age,
        department: employee.department,
        empstatus: employee.empstatus
      });
    } else {
      setFormData({
        key:'',
        name: '',
        address: '',
        age: '',
        department: '',
        empstatus: ''
      });
    }
  }, [employee]);

  const handleChange = (event) => {
    
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    

    if (employee) {
      onUpdate({
        ...employee,
        ...formData
      });
    } else {
      onAdd({
        ...employee,
        ...formData
      });
    }

    setFormData({
      key:'',
      name: '',
      address: '',
      age: '',
      department: '',
      empstatus: ''
    });

    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </label>
      <label>
        Age:
        <input type="text" name="age" value={formData.age} onChange={handleChange} />
      </label>
      <label>
        Department:
        <input type="text" name="department" value={formData.department} onChange={handleChange} />
      </label>
      <label>
        Status:
        <input type="text" name="empstatus" value={formData.empstatus} onChange={handleChange} />
      </label>
      <button className='btn btn-outline-success' type="submit">{employee ? 'Update' : 'Add'}</button>
      <button className='btn btn-outline-danger' type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EmployeeForm;

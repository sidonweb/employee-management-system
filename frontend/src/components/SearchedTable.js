import React from 'react';

function DataTable({ data }) {
  return (

    

    <table className='serach-table'>
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Address</th>
          <th>Age</th>
          <th>Department</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr key={data._id}>
          <td>{data._id}</td>
          <td>{data.name}</td>     
          <td>{data.address}</td>
          <td>{data.age}</td>
          <td>{data.department}</td>
          <td>{data.empstatus}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default DataTable;


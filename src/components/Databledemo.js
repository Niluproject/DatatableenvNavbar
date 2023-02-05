import React from 'react'
import DataTable from 'react-data-table-component';
import data from './data.json';

const columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Phone',
    selector: 'phone',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
  },
  {
    name: 'DOB',
    selector: 'dob',
  },
];

function Databledemo() {
  return (
    <div>
    <h3>DataTable in React</h3>
      <DataTable
        title="Employees"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
      />
    </div>
  )
}

export default Databledemo
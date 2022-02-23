import './Table.css';
import NavBar from './NavBar';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Name', width: 125, description: 'Displays the Name of the staff members' },
  { field: 'two', headerName: 'Job Title', width: 125, description: 'Displays what Job title the staff members has' },
  { field: 'three', headerName: 'Store', width: 120, description: 'Displays the store in which the staff members works' },
  { field: 'four', headerName: 'Department', width: 110, description: 'Displays the department in which the staff members works' },
  { field: 'five', headerName: 'Product Permissions', width: 175, description: 'Displays on which product the staff members has permissions' },
  { field: 'six', headerName: 'Permission Level', width: 155, description: 'Displays the permission Level for the staff members' },
];

const rows = [
  { id: 'HussnainZafar', two: 'Sales Assistant', three: 'Peterborough', four: 'Sales', five: 'Gadgets', six: 'Sales'},
  { id: 'HussnainZafar', two: 'Sales Assistant', three: 'Peterborough', four: 'Sales', five: 'Toys, Gadgets', six: 'Sales'},
  { id: 'HussnainZafar', two: 'Senior  Assistant', three: 'Peterborough', four: 'Sales', five: 'Toys', six: 'Senior'},
  { id: 'HussnainZafar', two: 'Sales Assistant', three: 'Peterborough', four: 'Sales', five: 'Gadgets', six: 'Sales'},
  { id: 'HussnainZafar', two: 'Sales Assistant', three: 'Peterborough', four: 'Sales', five: 'Toys', six: 'Sales'},
  { id: 'HussnainZafar', two: 'Senior  Assistant', three: 'Peterborough', four: 'Sales', five: 'Gadgets', six: 'Senior'},
  { id: 'HussnainZafar', two: 'Senior  Assistant', three: 'Peterborough', four: 'Sales', five: 'Toys, Gadgets', six: 'Senior'},
  { id: 'HussnainZafar', two: 'Senior  Assistant', three: 'Peterborough', four: 'Sales', five: 'Toys, Gadgets', six: 'Senior'},
  { id: 'HussnainZafar', two: 'Sales Assistant', three: 'Peterborough', four: 'Sales', five: '', six: 'Sales'},
];

export default function DataTable() {
  return (
    <div style={{ height: 370, width: '100%' }}>
      <NavBar title='Staff'/>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

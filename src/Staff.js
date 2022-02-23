import './Table.css';
import NavBar from './NavBar';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const axios = require('axios').default;

const columns = [
  { field: 'id', headerName: 'Name', width: 125, description: 'Displays the Name of the staff members' },
  { field: 'two', headerName: 'Job Title', width: 125, description: 'Displays what Job title the staff members has' },
  { field: 'three', headerName: 'Store', width: 120, description: 'Displays the store in which the staff members works' },
  { field: 'four', headerName: 'Department', width: 110, description: 'Displays the department in which the staff members works' },
  { field: 'five', headerName: 'Product Permissions', width: 175, description: 'Displays on which product the staff members has permissions' },
  { field: 'six', headerName: 'Permission Level', width: 155, description: 'Displays the permission Level for the staff members' },
];

const rows = [
  { id: 'Hussnain Zafar', two: 'Sales Assistant', three: 'Peterborough', four: 'Sales', five: 'Gadgets', six: 'Sales'},
  { id: 'Lucinda Bradford', two: 'Sales Assistant', three: 'Peterborough', four: 'Sales', five: 'Toys, Gadgets', six: 'Sales'},
  { id: 'Samah Cano', two: 'Senior  Assistant', three: 'Peterborough', four: 'Sales', five: 'Toys', six: 'Senior'},
  { id: 'Jamelia Finch', two: 'Sales Assistant', three: 'Peterborough', four: 'Sales', five: 'Gadgets', six: 'Sales'},
  { id: 'Sandra Coombes', two: 'Sales Assistant', three: 'Peterborough', four: 'Sales', five: 'Toys', six: 'Sales'},
  { id: 'Kaylee Alcock', two: 'Senior  Assistant', three: 'Peterborough', four: 'Sales', five: 'Gadgets', six: 'Senior'},
  { id: 'Ellesha Whitley', two: 'Senior  Assistant', three: 'Peterborough', four: 'Sales', five: 'Toys, Gadgets', six: 'Senior'},
  { id: 'Emile Acevedo', two: 'Senior  Assistant', three: 'Peterborough', four: 'Sales', five: 'Toys, Gadgets', six: 'Senior'},
  { id: 'Jimmie Molina', two: 'Sales Assistant', three: 'Peterborough', four: 'Sales', five: '', six: 'Sales'},
];

// Make a request for a user with a given ID
axios.get('https://localhost/mod005434-groupdesignproject-jayhawkdev/src/php/staffTable.php')
  .then(function (response) { console.log(response); })
  .catch(function (error) { console.log(error); });

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
      <div>

      </div>
    </div>
  );
}

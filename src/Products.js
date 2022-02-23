import './Table.css';
import NavBar from './NavBar';
import Logo from './Logo.png';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Image', width: 115, type: 'number', description: 'Displays the Name of the staff members' },
  { field: 'two', headerName: 'Product name', width: 165, description: 'Displays what Job title the staff members has' },
  { field: 'three', headerName: 'Quantity Available', type: 'number', width: 170, description: 'Displays the store in which the staff members works' },
  { field: 'four', headerName: 'Reorder Level', type: 'number', width: 140, description: 'Displays the department in which the staff members works' },
  { field: 'five', headerName: 'Stock Status', width: 130, description: 'Displays on which product the staff members has permissions' },
  { field: 'six', headerName: 'Quantity To Order', width: 155, description: 'Displays the permission Level for the staff members' },
];

const rows = [
  { id: '1', two: 'Nerf N-Strike ', three: 100, four: 10, five: 'Authorised', six: ''},
  { id: '2', two: 'LEGO Classic Bricks', three: 124, four: 20, five: 'Unauthorised', six: ''},
  { id: '3', two: 'Polaroid Play 3D Pen', three: 90, four: 9, five: 'In Process', six: ''},
  { id: '4', two: 'USB Power Bank', three: 87, four: 8, five: 'In Process', six: ''},
  { id: '5', two: 'Spider Catcher', three: 45, four: 6, five: 'Unauthorised', six: ''},
  { id: '6', two: 'Star Wars USB Cup', three: 25, four: 5, five: 'Authorised', six: ''},
];

export default function DataTable() {
  return (
    <div style={{ height: 370, width: '100%' }}>
      <NavBar title='Products'/>
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
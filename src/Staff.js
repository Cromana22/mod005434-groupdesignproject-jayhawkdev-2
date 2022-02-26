import './Table.css';
import NavBar from './NavBar';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import useFetch from './php/useFetch';

export default function DataTable() {
  const columns = [
    { field: 'id', headerName: 'Staff Id', width: 125, description: 'Displays staff id numbers' },
    { field: 'name', headerName: 'Name', width: 125, description: 'Displays staff member names' },
    { field: 'job', headerName: 'Job Title', width: 125, description: 'Displays staff members job title' },
    { field: 'store', headerName: 'Store', width: 120, description: 'Displays the store in which the staff members works' },
    { field: 'dept', headerName: 'Department', width: 110, description: 'Displays the department in which the staff members works' },
    { field: 'products', headerName: 'Product Permissions', width: 175, description: 'Displays the products the staff members can order' },
    { field: 'permissions', headerName: 'Permission Level', width: 155, description: 'Displays the staff user access level' },
  ];

  let rows = [];

  let content = [];
  let { response, loading, error }  = useFetch('http://127.0.0.1:80/mod005434-groupdesignproject-jayhawkdev/src/php/staffTable.php');
  //let { response, loading, error }  = useFetch('https://jaerae.co.uk/GroupDesignProject/src/php/staffTable.php');
  if (response !== null) { content = response };

  content.forEach(staff => {
    rows.push(
      { id: staff.staffId,
        name: staff.title+" "+staff.firstName+" "+staff.surname,
        job: staff.jobTitle,
        store: staff.shopId,
        dept: staff.deptId,
        products: 'Hard Code',
        permissions: 'Hard Code'
      },
    );
  });

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

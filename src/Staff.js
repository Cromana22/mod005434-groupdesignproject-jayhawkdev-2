import './Table.css';
import NavBar from './NavBar';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import useFetch from './php/useFetch';

export default function DataTable() {
  const columns = [
    { field: 'id', headerName: 'Staff Id', type: 'string', width: 125, description: 'Displays staff id numbers'},
    { field: 'name', headerName: 'Name', type: 'string', width: 125, description: 'Displays staff member names'},
    { field: 'job', headerName: 'Job Title', type: 'string', width: 125, description: 'Displays staff members job title'},
    { field: 'store', headerName: 'Store', type: 'string', width: 120, description: 'Displays the store in which the staff members works'},
    { field: 'dept', headerName: 'Department', type: 'string', width: 110, description: 'Displays the department in which the staff members works'},
    { field: 'products', headerName: 'Product Permissions', type: 'string', width: 175, description: 'Displays the products the staff members can order'},
    { field: 'permissions', headerName: 'Permission Level', type: 'string', width: 155, description: 'Displays the staff user access level'},
  ];

  let rows = [];
  let { response, loading, error }  = useFetch('http://127.0.0.1:80/mod005434-groupdesignproject-jayhawkdev/src/php/staffTable.php');
  //let { response, loading, error }  = useFetch('https://jaerae.co.uk/src/php/staffTable.php');
  
  if (response !== null) { 
    response.forEach(staff => {
      rows.push(
        { id: staff.staffId,
          name: staff.title+" "+staff.firstName+" "+staff.surname,
          job: staff.jobTitle,
          store: staff.shopName,
          dept: staff.deptName,
          products: staff.productTypes,
          permissions: staff.accessLevel
        }
      );
    });
  };

  if (error !== null) {
    console.log("There was a problem loading the data.")
  }

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

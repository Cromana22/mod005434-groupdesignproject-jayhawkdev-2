import './Table.css';
import NavBar from './NavBar';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import useFetch from './php/useFetch';
import phpUrl from './php/phpUrls';

export default function DataTable(props) {
  const {basketCount} = props;

  const columns = [
   { field: 'id', headerName: 'PO Number', width: 110, description: 'Unique Purchase Order number/ID' },
   { field: 'raisedby', headerName: 'Raised By', width: 120, description: 'Shows which staff created the Purchase Order' },
   { field: 'raiseddate', headerName: 'Raised Date', width: 150, description: 'The date the Purchase Order was raised' },
   { field: 'supplier', headerName: 'Supplier', width: 120, description: 'The supplier for the order' },
   { field: 'total', headerName: 'Total Value', width: 100, description: 'The total price including VAT' },
   { field: 'status', headerName: 'Status', width: 100, description: 'Current state of the Purchase Order' }
 ];

  let rows = [];
  let { response, loading, error }  = useFetch(phpUrl+'/poTable.php');
  
  if (response !== null) { 
    response.forEach(po => {
      rows.push(
        { id: po.ponumber,
          raisedby: po.raisedby,
          raiseddate: po.raiseddate,
          supplier: po.supplier,
          total: "£"+po.total,
          status: po.status
        }
      );
    });
  };
  
  if (error !== null) {
    console.log("There was a problem loading the data.")
  }

  return (
    <div style={{ height: 370, width: '100%' }}>
      <NavBar title='Purchase Orders' basketCount={basketCount}/>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      <br /><br />

      <form action={phpUrl+"/poInsert.php"} method="POST">
        <input type="text" name="staffId" placeholder="Staff Id" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

import './Table.css';
import NavBar from './NavBar';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { PriceChange } from '@mui/icons-material';

const columns = [
  { field: 'id', headerName: 'PO Number', type: 'number', width: 110, description: 'Unique Purchase Order number/ID' },
  { field: 'raisedby', headerName: 'Raised By', width: 120, description: 'Shows which staff member rasied the Purchase Orders' },
  { field: 'raiseddate', headerName: 'Raised Date', width: 150, description: 'The date the Purchase Order was Raised' },
  { field: 'supplier', headerName: 'Supplier', width: 120, description: 'The supplier for the order' },
  { field: 'price', headerName: 'Total Value', width: 100, type: 'price',  description: 'The total price excluding VAT?' },
  { field: 'status', headerName: 'Status', width: 100, description: 'Status of the approval or rejection of the Purchase Order' },
];

const rows = [
  { id: '#QB123456', raisedby: 'HussnainZafar', raiseddate: '20/01/2022  10:38AM', supplier: 'Bitmore Inc.', price: 10.67, status: 'Authorised'},
  { id: '#AC789006', raisedby: 'HussnainZafar', raiseddate: '20/01/2022  10:38AM', supplier: 'Bitmore Inc.', price: 690.20, status: 'Authorised'},
  { id: '#TY122156', raisedby: 'HussnainZafar', raiseddate: '20/01/2022  10:38AM', supplier: 'Bitmore Inc.', price: 50.80, status: 'Unauthorised'},
  { id: '#QB857390', raisedby: 'HussnainZafar', raiseddate: '20/01/2022  10:38AM', supplier: 'Bitmore Inc.', price: 9.99, status: 'Authorised'},
  { id: '#GH159753', raisedby: 'HussnainZafar', raiseddate: '20/01/2022  10:38AM', supplier: 'Bitmore Inc.', price: 27.00, status: 'Unauthorised'},
  { id: '#NJ3578464', raisedby: 'HussnainZafar', raiseddate: '20/01/2022  10:38AM', supplier: 'Bitmore Inc.', price: 87.12, status: 'Unauthorised'},
];

export default function DataTable() {
  return (
    <div style={{ height: 370, width: '100%' }}>
      <NavBar title='Purchase Orders'/>
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

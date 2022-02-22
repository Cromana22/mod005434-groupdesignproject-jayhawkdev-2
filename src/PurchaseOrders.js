import './PurchaseOrders.css';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'PO Number', type: 'number', width: 110 },
  { field: 'raisedby', headerName: 'Raised By', width: 150 },
  { field: 'raiseddate', headerName: 'Raised Date', width: 150 },
  { field: 'supplier', headerName: 'Supplier', width: 130 },
  { field: 5, headerName: 'Total Value', width: 100 },
  { field: 'status', headerName: 'Status', width: 110 },
];

const rows = [
  { id: '#QB123456', raisedby: 'HussnainZafar', raiseddate: '20/01/2022  10:38AM', supplier: 'Bitmore Inc.', 5: 10.67, status: 'Authorised'},
  { id: '#AC789006', raisedby: 'HussnainZafar', raiseddate: '20/01/2022  10:38AM', supplier: 'Bitmore Inc.', 5: 690.20, status: 'Authorised'},
  { id: '#TY122156', raisedby: 'HussnainZafar', raiseddate: '20/01/2022  10:38AM', supplier: 'Bitmore Inc.', 5: 50.80, status: 'Unauthorised'},
  { id: '#QB857390', raisedby: 'HussnainZafar', raiseddate: '20/01/2022  10:38AM', supplier: 'Bitmore Inc.', 5: 9.99, status: 'Authorised'},
  { id: '#GH159753', raisedby: 'HussnainZafar', raiseddate: '20/01/2022  10:38AM', supplier: 'Bitmore Inc.', 5: 27.00, status: 'Unauthorised'},
  { id: '#NJ3578464', raisedby: 'HussnainZafar', raiseddate: '20/01/2022  10:38AM', supplier: 'Bitmore Inc.', 5: 87.12, status: 'Unauthorised'},
];

export default function DataTable() {
  return (
    <div style={{ height: 370, width: '100%' }}>
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

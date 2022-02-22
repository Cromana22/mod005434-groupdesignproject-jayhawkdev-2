import './PurchaseOrders.css';
import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'PO Number', type: 'number', width: 120 },
  { field: 'productName', headerName: 'Raised By', type: 'text', width: 150 },
  { field: 'qtyAvailable', headerName: 'Raised Date', type: 'date', width: 130 },
  { field: 'age', headerName: 'Supplier', type: 'text', width: 130},
  { field: 'stockstatus', headerName: 'Total Value', width: 150},
  { field: 'qtytoorder', headerName: 'Status', width: 150 },
];

const rows = [
  { id: 1, productName: 'Nerf N-Strike', qtyAvailable: 50, age: 35 },
  { id: 2, productName: 'LEGO Classic bricks', qtyAvailable: 50, age: 42 },
  { id: 3, productName: 'Polaroid Play 3D Pen', qtyAvailable: 50, age: 45 },
  { id: 4, productName: 'USB Powerbank', qtyAvailable: 50, age: 16 },
  { id: 5, productName: 'Spider catcher', qtyAvailable: 50, age: 20 },
  { id: 6, productName: 'Star Wars USB Cup', qtyAvailable: 50, age: 150 },
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

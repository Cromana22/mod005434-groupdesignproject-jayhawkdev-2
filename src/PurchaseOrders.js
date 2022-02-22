import './PurchaseOrders.css';
import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Image', width: 90 },
  { field: 'productName', headerName: 'Product Name', width: 150 },
  { field: 'qtyAvailable', headerName: 'Quantity Available', width: 150 },
  { field: 'age', headerName: 'Reorder Level', type: 'number', width: 150},
  { field: 'stockstatus', headerName: 'Stock Status', width: 150 },
  { field: 'qtytoorder', headerName: 'Quantity To Order', width: 150 },
  { field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 170,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
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

import './Table.css';
import NavBar from './NavBar';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import useFetch from './php/useFetch';

export default function DataTable() {

  const columns = [
    { field: 'id', headerName: 'Product Code', width: 115, type: 'string', description: 'Displays the product code'},
    { field: 'image', headerName: 'Image', width: 115, type: 'string', description: 'Displays an image of the product'},
    { field: 'productname', headerName: 'Product name', type: 'string', width: 165, description: 'Displays the product name'},
    { field: 'available', headerName: 'Quantity Available', type: 'number', width: 170, description: 'Displays the stock available'},
    { field: 'reorderlevel', headerName: 'Reorder Level', type: 'number', width: 140, description: 'Displays the quantity where we need to reorder stock' },
    { field: 'status', headerName: 'Stock Status', type: 'string', width: 130, description: 'Displays the status of stock' },
    { field: 'orderamount', headerName: 'Quantity To Order', width: 155, description: 'Displays the selected amount to order' },
  ];
  
  let rows = [];
  let { response, loading, error }  = useFetch('http://127.0.0.1:80/mod005434-groupdesignproject-jayhawkdev/src/php/productTable.php');
  //let { response, loading, error }  = useFetch('https://jaerae.co.uk/src/php/staffTable.php');
  
  if (response !== null) { 
    response.forEach(product => {
      let activePO = ""
      if (product.activePo == 1) { activePO = " PO"; }

      let itemStatus = "";
      if (product.available <= product.reorderLevel) { itemStatus = "Red"; }
      else if (product.available <= product.reorderLevel*1.1) { itemStatus = "Yellow" }
      else { itemStatus = "Green" }
  
      rows.push(
        { id: product.productCode,
          image: product.image,
          productname: product.name,
          available: product.available,
          reorderlevel: product.reorderLevel,
          status: itemStatus+activePO,
          orderamount: product.maxQuantity
        }
      );
    });
  };
  
  if (error !== null) {
    console.log("There was a problem loading the data.")
  }

  return (
    <div style={{ height: 650, width: '100%' }}>
      <NavBar title='Products'/>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}
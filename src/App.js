import './App.css';
import LoginPage from './LoginPage';
import Products from './Products';
import PurchaseOrders from './PurchaseOrders';
import Staff from './Staff';
import Layout from './Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >                                     
        <Route path="" element={<LoginPage />} />                                       
        < Route path = "products" element = {<Products />}>                         
            <Route path=":id" element={<productdetail />} />                        
        </Route>
        <Route path="purchaseorders" element={<PurchaseOrders />} >
          <Route path=":id" element={<purchaseorderdetail />} />
        </Route>
        <Route path="staff" element={<Staff />} >
          <Route path=":id" element={<staffdetail />} />
        </Route>
        <Route path="reports" element={<reports/>} >
          <Route path=":id" element={<reportdetail />} />
        </Route>
        <Route path="help" element={<help />} />
        <Route path="*" element={<pagenotfound />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

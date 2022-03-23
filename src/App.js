import './App.css';
import LoginPage from './LoginPage';
import Products from './Products';
import PurchaseOrders from './PurchaseOrders';
import Staff from './Staff';
import StaffAdd from './StaffAdd';
import StaffEdit from './StaffEdit';
import Help from './Help';
import Layout from './Layout';
import PlacedPo from './PlacedPo';
import Basket from './Basket';
import Checkout from './Checkout';
import Reports from'./Reports';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import useFetch from './php/useFetch';
import phpUrl from './php/phpUrls';

function App() {
  let { response }  = useFetch(phpUrl+'/getBasket.php');
  let basketCount = 0;

  if (response !== null) {
    basketCount = Object.keys(response).length;
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >                                     
        <Route path="" element={<LoginPage />} />
        <Route path = "products" element = {<Products basketCount={basketCount} />} />
        <Route path="purchaseorders/:id" element={<PlacedPo basketCount={basketCount} />} />
        <Route path="purchaseorders" element={<PurchaseOrders basketCount={basketCount} />} />
        <Route path="staff" element={<Staff basketCount={basketCount} />} />
        <Route path="addstaff" element={<StaffAdd basketCount={basketCount} />} />
        <Route path="editstaff" element={<StaffEdit basketCount={basketCount} />} />
        <Route path="reports" element={<Reports basketCount={basketCount} />} />
        <Route path="help" element={<Help basketCount={basketCount} />} />
        <Route path="placedpo" element={<PlacedPo basketCount={basketCount} />} />
        <Route path="basket" element={<Basket basketCount={basketCount} />} />
        <Route path="checkout" element={<Checkout basketCount={basketCount} />} />
        <Route path="*" element={<pagenotfound basketCount={basketCount} />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

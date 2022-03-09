import './App.css';
import LoginPage from './LoginPage';
import Products from './Products';
import PurchaseOrders from './PurchaseOrders';
import Staff from './Staff';
import Help from './Help';
import Layout from './Layout';
import PlacedPo from './PlacedPo';
import Basket from './Basket';
import Checkout from './Checkout';
import Reports from'./Reports';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import { useState } from "react";

function App() {
  const [basket, setBasket] = useState([]);
  let basketCount = basket.length;

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >                                     
        <Route path="" element={<LoginPage />} />
        < Route path = "products" element = {<Products basket={basket} setBasket={setBasket} basketCount={basketCount} />} />
        <Route path="purchaseorders" element={<PurchaseOrders basketCount={basketCount} />} >
          <Route path=":id" element={<purchaseorderdetail basketCount={basketCount} />} />
        </Route>
        <Route path="staff" element={<Staff basketCount={basketCount} />} >
          <Route path=":id" element={<staffdetail basketCount={basketCount} />} />
        </Route>
        <Route path="reports" element={<Reports basketCount={basketCount} />} >
          <Route path=":id" element={<reportdetail basketCount={basketCount} />} />
        </Route>
        <Route path="help" element={<Help basketCount={basketCount} />} />
        <Route path="placedpo" element={<PlacedPo basketCount={basketCount} />} />
        <Route path="basket" element={<Basket basket={basket} setBasket={setBasket} basketCount={basketCount} />} />
        <Route path="checkout" element={<Checkout basket={basket} setBasket={setBasket} basketCount={basketCount} />} />
        <Route path="*" element={<pagenotfound basketCount={basketCount} />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

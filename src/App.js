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
  let loggedin = 0;
  let accessLevel = 0;
  let productTypes = 0;
  let staffId = "";

  if (response !== null) {
    basketCount = Object.keys(response.basket).length;
    loggedin = response.loggedin;
    accessLevel = response.accessLevel;
    productTypes = response.productTypes;
    staffId = response.staffId;

    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >                                 
          <Route path="" element={<LoginPage />} />
          <Route path = "products" element = {<Products basketCount={basketCount} loggedin={loggedin} accessLevel={accessLevel} productTypes={productTypes} />} />
          <Route path="purchaseorders/:id" element={<PlacedPo basketCount={basketCount} loggedin={loggedin} accessLevel={accessLevel} staffIdButton={staffId} />} />
          <Route path="purchaseorders" element={<PurchaseOrders basketCount={basketCount} loggedin={loggedin} accessLevel={accessLevel} />} />
          <Route path="staff" element={<Staff basketCount={basketCount} loggedin={loggedin} accessLevel={accessLevel} />} />
          <Route path="addstaff" element={<StaffAdd basketCount={basketCount} loggedin={loggedin} accessLevel={accessLevel} />} />
          <Route path="editstaff" element={<StaffEdit basketCount={basketCount} loggedin={loggedin} accessLevel={accessLevel} />} />
          <Route path="reports" element={<Reports basketCount={basketCount} loggedin={loggedin} accessLevel={accessLevel} />} />
          <Route path="help" element={<Help basketCount={basketCount} loggedin={loggedin} accessLevel={accessLevel} />} />
          <Route path="placedpo" element={<PlacedPo basketCount={basketCount} accessLevel={accessLevel} />} />
          <Route path="basket" element={<Basket basketCount={basketCount} loggedin={loggedin} accessLevel={accessLevel} />}  />
          <Route path="checkout" element={<Checkout basketCount={basketCount} loggedin={loggedin} accessLevel={accessLevel} />} />
          <Route path="*" element={<Products basketCount={basketCount} loggedin={loggedin} accessLevel={accessLevel} productTypes={productTypes} />} />
        </Route>
      </Routes>
      </BrowserRouter>
    );
  }

  else {
    return null
  }
}

export default App;

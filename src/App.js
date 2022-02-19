import './App.css';
import Navbar from './NavBar';
import LoginPage from './LoginPage';
import PurchaseOrders from './PurchaseOrders';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';


function App() {
  return (
      <Router>
          <div className="App">
            <Navbar title="Home"/>
            <div className="content">
            <Switch>
            <PurchaseOrders />
            </Switch>
            </div>
          </div>
        </Router>
  );
}

export default App;

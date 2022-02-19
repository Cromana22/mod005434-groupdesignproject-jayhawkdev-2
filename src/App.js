import './App.css';
import Navbar from './NavBar';
import LoginPage from './LoginPage';
import Products from './Products';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';


function App() {
  return (
      <Router>
          <div className="App">
            <Navbar title="Home"/>
            <div className="content">
            <Switch>
            <Products />
            </Switch>
            </div>
          </div>
        </Router>
  );
}

export default App;

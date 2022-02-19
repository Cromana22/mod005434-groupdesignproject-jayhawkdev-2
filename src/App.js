import './App.css';
import Navbar from './NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar title = "Products"/>
          <div className="content">
          </div>
      </div>
    </Router>
  );
}

export default App;

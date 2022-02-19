import './App.css';
import Navbar from './NavBar';
import LoginPage from './LoginPage';
import Products from './Products';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
      <Router>
          <div className="App">
            <Navbar title="Products"/>
            <div className="content">
            <Switch>
            <Route path='/products'>
              <Products />
            </Route>
            </Switch>
            </div>
          </div>
        </Router>
  );
}

export default App;

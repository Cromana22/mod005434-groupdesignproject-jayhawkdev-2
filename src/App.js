import './App.css';
import Navbar from './NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginPage from './LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar title="Products"/>
          <div className="content">
            <Switch>
              <Route exact path="/login">
                <LoginPage />
              </Route>
            </Switch>
          </div>
        </div>
    </Router>
    
  );
}

export default App;

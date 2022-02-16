import './NavBar.css';
import { Link } from "react-router-dom";
import Logo from './Logo.png';
import Container  from 'react-bootstrap';

const Navbar  = () => {
    return ( 
       <div class="container">
       <div className="navbar">
            <img id="logo" src={Logo}></img>
            <h1>Products</h1>
            <button>logout</button> 
            </div>

            <div className="menu">
          <h1>Products</h1>
          </div>
      </div>
     );
}
 
export default Navbar;
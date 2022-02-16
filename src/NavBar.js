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
               <button>Logout</button> 
          </div>

          <div className="products">
               <div class="row g-3">
               <h1>Products</h1>
               </div>
          </div>
      </div>
     );
}
 
export default Navbar;
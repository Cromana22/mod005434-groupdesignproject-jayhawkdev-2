import './NavBar.css';
import { Link } from "react-router-dom";
import Logo from './Logo.png';

const Navbar  = () => {
    return ( 
       <nav className="navbar">
            <img id="logo" src={Logo}></img>
            <h1>Products</h1>
            <button>logout</button>
       </nav>
     );
}
 
export default Navbar;
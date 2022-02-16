import './Navbar.css';
import { Link } from "react-router-dom";
import Logo from './Logo.png';

const Navbar  = () => {
    return ( 
       <nav className="navbar">
            <img id="logo" src={Logo}></img>
       </nav>
     );
}
 
export default Navbar;
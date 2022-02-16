import './NavBar.css';
import { Link } from "react-router-dom";
import Logo from './Logo.png';
import Stack from 'react-bootstrap/Stack'

const Navbar  = () => {
    return ( 
         <nav className="menu">
          <div className="navbar">
               <img id="logo" src={Logo}></img>
               <h1>Products</h1>
               <button>Logout</button> 
          </div>

          <div className="Menu">
               <div class="row g-3">
                    <div className="links"> 
                         <Stack direction="horizontal" gap={5}> 
                              <Link to="#">Products</Link>
                              <Link to="#">Purchase Orders</Link>
                              <Link to="#">Staff</Link>
                              <Link to="#">Report</Link>
                              <Link to="#">Help/Contact us</Link>
                         </Stack>
                    </div>
               </div>
          </div>
          </nav>
     );
}
 
export default Navbar;
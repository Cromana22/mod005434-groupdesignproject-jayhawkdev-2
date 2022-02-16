import './NavBar.css';
import { Link } from "react-router-dom";
import Logo from './Logo.png';
import Stack from 'react-bootstrap/Stack'

const Navbar  = (props) => {
     const {title} = props
    return ( 
         <nav className="menu">
          <div className="navbar">
               <img id="logo" src={Logo}> </img>
               <h1>{title}</h1>
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
                              <form action="/" method="get">
                                   <label htmlFor="header-search">
                                        <span className="visually-hidden">Search blog posts</span>
                                   </label>
                                   <input
                                        type="text"
                                        id="header-search"
                                        placeholder="Search blog posts"
                                        name="s" 
                                   />
                                   <button type="submit">Search</button>
                              </form>
                         </Stack>
                    </div>
               </div>
          </div>
          </nav>
     );
}
 
export default Navbar;
import './NavBar.css';
import { Link } from "react-router-dom";
import Logo from './Logo.png';
import Stack from 'react-bootstrap/Stack'

const Navbar  = (props) => {
     const {title} = props
    return ( 
         <nav className="menu">
          <div className="navbar">
               <img id="logo" src={Logo}/>
               <h1>{title}</h1>
               <button>Logout</button> 
          </div>

          <div class="row g-3">
               <div class="col-lg-auto col-lg-auto"> 
                    <Link to="#">Products</Link>
               </div>
               <div class="col-lg-auto col-lg-auto">
               <Link to="#">Purchase Orders</Link>
               </div>
               <div class="col-lg-auto col-lg-auto"> 
               <Link to="#">Staff</Link>
               </div>
               <div class="col-lg-auto col-lg-auto"> 
               <Link to="#">Report</Link>
               </div>
               <div class="col-lg-auto col-lg-auto">
               <Link to="#">Help/Contact us</Link>
               </div>

               <div class="col-lg-auto col-lg-auto"> 
                    <form action="/" method="get">
                              <label htmlFor="header-search">
                                   <span className="visually-hidden">Keyword, Product....</span>
                              </label>
                              <input
                                   type="text"
                                   id="header-search"  
                                   placeholder="Keyword, Product...."
                                   name="s" 
                              />
                              <button type="submit">Search</button>
                    </form>
               </div>
                         
                         
                         
                         
                         
                    
               </div>
          </nav>
     );
}
 
export default Navbar;
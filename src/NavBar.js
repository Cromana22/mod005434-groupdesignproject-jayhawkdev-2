import './NavBar.css';
import { Link } from "react-router-dom";
import Logo from './Logo.png';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Navbar  = (props) => {
     const {title} = props
    return ( 
         <nav className="menu">
          <div className="navbar">
          <Link to="#"><img id="logo" src={Logo}/></Link>
               <h1>{title}</h1>
               <Link href='./login'><button>Logout</button></Link> 
          </div>
          
          <Row>
               <Col><Link to="#">Products</Link></Col>
               <Col><Link to="#">Purchase Orders</Link> </Col>
               <Col><Link to="#">Staff</Link></Col>
               <Col><Link to="#">Report</Link> </Col>
               <Col><Link to="#">Help/Contact us</Link></Col>
               <Col id="last" xs={6}> 
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
               </Col>
          </Row>
          
     </nav>
     );
}
 
export default Navbar;
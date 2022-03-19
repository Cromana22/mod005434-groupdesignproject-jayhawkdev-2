import './NavBar.css';
import { Link } from "react-router-dom";
import Logo from './Logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faCircle } from '@fortawesome/free-solid-svg-icons';
import phpUrl from './php/phpUrls';

const navbar = (props) => {
     const { title, basketCount } = props;

     return (
     
          <nav className="menu">
           
               
               <div className="navbar">
                   <a id="logo-link" href="/products"><img id="logo" src={Logo} href="/products" /></a>
                    <h1>{title}</h1>
                   
                    <Link to="/basket">
                    
                         <span id='basketLink'>
                              <FontAwesomeIcon id='basketIcon' icon={faBasketShopping} />
                              <FontAwesomeIcon id='basketCircle' icon={faCircle} />
                              <span id='basketCount'>{basketCount}</span>
                         </span>
                         
                    </Link>
                    <button id="logout-btn" onClick={() => {window.location.href=phpUrl+"/logout.php";}}>Logout</button>
               </div>

               <div className='barmenu'>
                    <Navbar bg="light" expand="lg">
                         <Container fluid>
                              <Navbar.Toggle aria-controls="navbarScroll" />
                              <Navbar.Collapse id="navbarScroll">
                                   <Nav
                                        className="me-auto my-2 my-lg-0"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll
                                   >
                                        <Nav.Link href="/products">Products</Nav.Link>
                                        <Nav.Link href="/purchaseorders">Purchase Orders</Nav.Link>
                                        <Nav.Link href="/staff">Staff</Nav.Link>
                                        <Nav.Link href="/reports">Report</Nav.Link>
                                        <Nav.Link href="/help">Help/Contact Us</Nav.Link>
                                        <Nav.Link href="/placedpo">Placed Po's</Nav.Link>
                                   </Nav>
                              </Navbar.Collapse>
                         </Container>
                    </Navbar>
               </div>
          </nav>
     );
}

export default navbar;
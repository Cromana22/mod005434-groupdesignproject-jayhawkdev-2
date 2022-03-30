import './NavBar.css';
import React from 'react';
import Logo from './Logo.png';
import './NavBar.css';
import { Link } from "react-router-dom";
import phpUrl from './php/phpUrls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faCircle } from '@fortawesome/free-solid-svg-icons';
import {Navbar, Nav,  Container } from 'react-bootstrap';
const navbar = (props) => {
     const { title, basketCount } = props;
          return (
               <nav className='menu sticky-top'>
               <div className='navbar'>
                    <Navbar bg="" expand="lg">
                         <Container fluid>
                         <Navbar.Brand id="logo-link" href="/products">
                              <img id="logo" src={Logo} href="/products"/>
                         </Navbar.Brand>
                         <Navbar.Collapse className='align-items-center justify-content-center collapse show' id="navbarScroll">
                         <h1>{title}</h1>                             
                         </Navbar.Collapse>
                         <div className='basket-icon'>
                         <Link to="/basket">
                              <span id='basketLink'>
                                   <FontAwesomeIcon id='basketIcon' icon={faBasketShopping} />
                                   <FontAwesomeIcon id='basketCircle' icon={faCircle} />
                                   <span id='basketCount'>{basketCount}</span>
                              </span>
                         </Link>
                         </div>
                         <button id="logout-btn" onClick={() => {window.location.href=phpUrl+"/logout.php";}}>Logout</button>   
                         </Container>
                         </Navbar>
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
                                   </Nav>
                              </Navbar.Collapse>
                         </Container>
                    </Navbar>
               </div>
               
          </nav>


          );
     }

export default navbar;
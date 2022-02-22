import './NavBar.css';
import { Link } from "react-router-dom";
import Logo from './Logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';



const navbar = (props) => {
     const { title } = props
     return (
          <nav className="menu">
               <div className="navbar">
                    <img id="logo" src={Logo} href="/products" />
                    <h1>{title}</h1>
                    <Link to='/login'><button>Logout</button></Link>
               </div>
               <div className='barmenu'>
                    <Navbar bg="light" expand="lg">
                         <Container fluid>
                              <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                              <Navbar.Toggle aria-controls="navbarScroll" />
                              <Navbar.Collapse id="navbarScroll">
                                   <Nav
                                        className="me-auto my-2 my-lg-0"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll
                                   >
                                        <Nav.Link href="#action1">Home</Nav.Link>
                                        <Nav.Link href="#action2">Link</Nav.Link>
                                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                                             <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                             <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                             <NavDropdown.Divider />
                                             <NavDropdown.Item href="#action5">
                                                  Something else here
                                             </NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="#" disabled>
                                             Link
                                        </Nav.Link>
                                   </Nav>
                                   <Form className="d-flex">
                                        <FormControl
                                             type="search"
                                             placeholder="Search"
                                             className="me-2"
                                             aria-label="Search"
                                        />
                                        <Button variant="outline-success">Search</Button>
                                   </Form>
                              </Navbar.Collapse>
                         </Container>
                    </Navbar>
               </div>
          </nav>
     );
}

export default navbar;
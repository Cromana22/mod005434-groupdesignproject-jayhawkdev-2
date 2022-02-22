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



const navbar  = (props) => {
     const {title} = props
    return ( 
         <nav className="menu">
          <div className="navbar">
          <img id="logo" src={Logo} href="/products"/>
               <h1>{title}</h1>
               <Link to='/login'><button>Logout</button></Link> 
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
        <Nav.Link href="#action1">Products</Nav.Link>
        <Nav.Link href="#action2">Purchase Orders</Nav.Link>
        <Nav.Link href="#action2">Staff</Nav.Link>
        <Nav.Link href="#action2">Report</Nav.Link>
        <Nav.Link href="#action2">Help/Contact Us</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Products, Basket, PO..."
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
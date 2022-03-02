import './LoginPage.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from './Logo.png';

const LoginPage  = () => {
    return (
      <div className='LoginPage'>
        <div className='loginform'>
          <img id="login-logo" src={Logo}/>
          <Form>

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Enter username" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
          
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <div id="loginbtn">
              <Button className="login" variant="primary" type="submit" href="/products">Log In</Button>
            </div>

          </Form>
        </div>
      </div>
    );
}
     
    export default LoginPage;
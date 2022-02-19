import './LoginPage.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginPage  = () => {
    return (
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
        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>
    );
}
     
    export default LoginPage;
import './LoginPage.css';
import Logo from './Logo.png';
import phpUrl from './php/phpUrls';
import useFetch from './php/useFetch';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginPage  = () => {
  let { response, loading, error }  = useFetch(phpUrl+'/getCookies.php');
  console.log(response);
  
  return (
    <div className='LoginPage'>
      <div className='loginform'>
        <img id="login-logo" src={Logo}/>

        <Form method='POST' action={phpUrl+"/login.php"} >
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Staff ID</Form.Label>
            <Form.Control type="username" name="staffId" placeholder="Enter your Staff ID" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" name="remember" label="Remember Me" />
          </Form.Group>

          <div id="loginbtn">
            <Button className="login" variant="primary" type="submit" name="submit">Log In</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
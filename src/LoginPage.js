import './LoginPage.css';
import Logo from './Logo.png';
import phpUrl from './php/phpUrls';
import useFetch from './php/useFetch';

const LoginPage  = () => {
  let { response, loading, error }  = useFetch(phpUrl+'/getCookies.php');
  console.log(response);
  
  return (
    <div className='LoginPage'>
      <div className='loginform'>
        <img id="login-logo" src={Logo}/>

        <form method='POST' action={phpUrl+"/login.php"} >
          <label>Staff ID:</label><br />
          <input type="text" id="staffId" name="staffId" placeholder='e.g ABC01' /><br />
          <label>Password:</label><br />
          <input type="password" id="password" name="password" placeholder="Enter your password" /><br />
          <input type="checkbox" id="remember" name="remember" />
          <label> Remember Me</label><br />
          <input type="submit" id="submit" name="submit" value="Log In" />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
import NavBar from './NavBar';
import phpUrl from './php/phpUrls';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import webUrl from './php/webUrls';
import './StaffAddEdit.css';

const StaffAdd = (props) => {
  const { basketCount, loggedin, accessLevel } = props;
  if (loggedin !== 'Y') { window.location.replace(webUrl)};
  if (accessLevel !== "Manager")  { window.location.replace(webUrl+'/products')};

  return (
    <div className="staff">
      <NavBar title='Add New Staff' basketCount={basketCount} accessLevel={accessLevel} />
      <div className="AddStaffForm">
        <form method="POST" action={phpUrl + "/staffadd.php"}>
          <div className='d-flex add-staff-container'>
            <div>
          <label>Staff ID: </label>
          <input className="wider" id='add-staff-inp' type='text' name='staffId' required></input><br />
          
          <label>Title: </label>
          <Form.Select className="wider" id='title-inp' aria-label="Default select example" name='title' required>
          <option value="">--Title--</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Mx">Mx</option>
            <option value="Sir">Sir</option>
            <option value="Ms">Ms</option>
          </Form.Select><br />
          
          
          <label>First Name: </label>
          <input className="wider" id='add-staff-inp' type='text' name='firstName' required></input><br />
          <label>Surname: </label>
          <input className="wider" id='add-staff-inp'  type='text' name='surname' required></input><br />
          <label>Email: </label>
          <input className="wider" id='add-staff-inp' type='text' name='email' required></input><br />
          <label>Job Title: </label>
          <input className="wider" id='add-staff-inp'  type='text' name='jobTitle' required></input><br />
          <label>Shop: </label>
          <input className="wider" id='add-staff-inp'  type='text' name='shopName'></input><br />
          <label>Department: </label>
          <input className="wider" id='add-staff-inp'  type='text' name='deptName'></input><br />
          <label className="product-resp-inp">Product Responsibilities:</label>
          <Form.Select className="wider product-resp-inp" id='product-resp-inp' multiple aria-label="Default select Product Type" name='productTypes[]'>
            <option value="T">Toys</option>
            <option value="G">Gadgets</option>
          </Form.Select><br />
          <label>Access Level: </label>
          <Form.Select className="wider" id='title-inp-p'  aria-label="Default select Access Level" name='accessLevel' required>
            <option value="">--Access Level--</option>
            <option value="Sales">Sales</option>
            <option value="Senior Sales">Senior Sales</option>
            <option value="Manager">Manager</option>
            <option value="Finance">Finance</option>
          </Form.Select><br />
          <label>Password: </label>
          <input className="wider" id='title-inp'  type='password' name='password' required></input><br />
          <div className='submit-cancel-btn'>
          <button id='submit-btn' type='submit'>Submit</button>
          <Link to="/staff" >
              <button id='cancel-btn'>Cancel</button>
          </Link>
          </div>
          </div>
          </div>
        </form>
        
      </div>
    </div>
  );
}

export default StaffAdd;

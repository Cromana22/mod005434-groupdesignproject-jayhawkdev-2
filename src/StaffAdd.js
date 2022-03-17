import NavBar from './NavBar';
import phpUrl from './php/phpUrls';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const StaffAdd = (props) => {
  const { basketCount } = props;

  return (
    <div className="staff">
      <NavBar title='Add New Staff' basketCount={basketCount} />
      <div className="AddStaffForm">
        <form method="POST" action={phpUrl + "/staffadd.php"}>
          <label>Staff ID: </label><input type='text' name='staffId' required></input><br />
          <label>Title: </label><Form.Select aria-label="Default select example" name='title' required>
          <option value="">--Title--</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Mx">Mx</option>
            <option value="Sir">Sir</option>
            <option value="Ms">Ms</option>
          </Form.Select><br />
          <label>First Name: </label><input type='text' name='firstName' required></input><br />
          <label>Surname: </label><input type='text' name='surname' required></input><br />
          <label>Email: </label><input type='text' name='email' required></input><br />
          <label>Job Title: </label><input type='text' name='jobTitle' required></input><br />
          <label>Shop: </label><input type='text' name='shopName'></input><br />
          <label>Department: </label><input type='text' name='deptName'></input><br />
          <label>Product Responsibilities: </label><Form.Select multiple aria-label="Default select Product Type" name='productTypes[]' >
            <option value="T">Toys</option>
            <option value="G">Gadgets</option>
          </Form.Select><br />
          <label>Access Level: </label><Form.Select aria-label="Default select Access Level" name='accessLevel' required>
            <option value="">--Access Level--</option>
            <option value="Sales">Sales</option>
            <option value="Senior Sales">Senior Sales</option>
            <option value="Manager">Manager</option>
            <option value="Finance">Finance</option>
          </Form.Select><br />
          <label>Password: </label><input type='password' name='password' required></input><br />
          <button type='submit'>Submit</button>
          <Link to="/staff" >
              <button>Cancel</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default StaffAdd;

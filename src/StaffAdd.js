import NavBar from './NavBar';
import phpUrl from './php/phpUrls';
import Form from 'react-bootstrap/Form';

const StaffAdd = (props) => {
  const { basketCount } = props;

  return (
    <div className="staff">
      <NavBar title='Add New Staff' basketCount={basketCount} />
      <div className="AddStaffForm">
        <form method="POST" action={phpUrl + "/staffadd.php"}>
          <label>Staff ID: </label><input type='text' name='staffId' required></input><br />
          <label>Title: </label><Form.Select aria-label="Default select example">
            <option>Choose Title</option>
            <option value="1">Mr</option>
            <option value="2">Ms</option>
            <option value="3">Miss</option>
            <option value="4">Sir</option>
          </Form.Select><br />
          <label>First Name: </label><input type='text' name='firstName' required></input><br />
          <label>Surname: </label><input type='text' name='surname' required></input><br />
          <label>Email: </label><input type='text' name='email' required></input><br />
          <label>Job Title: </label><input type='text' name='jobTitle' required></input><br />
          <label>Shop: </label><input type='text' name='shopName'></input><br />
          <label>Department: </label><input type='text' name='deptName'></input><br />
          <label>Product Responsibilities: </label><Form.Select aria-label="Default select Product Type">
            <option>Choose Product Type</option>
            <option value="1">Toys</option>
            <option value="2">Gadgets</option>
            <option value="3">Toys and Gadgets</option>
            <option value="3">Up to comment</option>
          </Form.Select><br /><br /><br />
          <label>Access Level: </label><Form.Select aria-label="Default select Access Level">
            <option>Choose Access Level</option>
            <option value="1">Senior Sales</option>
            <option value="2">Manager</option>
            <option value="3">Finance</option>
            <option value="3">Sales</option>
          </Form.Select><br /><br />
          <label>Password: </label><input type='text' name='password' required></input><br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default StaffAdd;

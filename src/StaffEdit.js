import NavBar from './NavBar';
import phpUrl from './php/phpUrls';
import Form from 'react-bootstrap/Form';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

const StaffEdit = (props) => {
  const { basketCount } = props;
  const location = useLocation()
  const { details } = location.state;
  const prod = details.productTypes;
  let prodArray = [];

  if (prod !== null) {
    prodArray = prod.split(', ');
  }
  let products = []
  if (prodArray.includes("Toys")) { products.push("T") };
  if (prodArray.includes("Gadgets")) { products.push("G") };
  
  return (
    <div className="staff">
      <NavBar title='Edit Staff' basketCount={basketCount} />
      <div className="EditStaffForm AddStaffForm d-flex add-staff-container">
        <div className='d-flex add-staff-container'>
        <form method="POST" action={phpUrl + "/staffedit.php"}>
          <label>Staff ID: </label><input id='add-staff-inp' type='text' name='staffId' defaultValue={details.staffId} required readOnly></input><br />
          <label>Title: </label><Form.Select id='add-staff-inp' aria-label="Default select example" defaultValue={details.title} name='title' required >
            <option value="">--Title--</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Mx">Mx</option>
            <option value="Sir">Sir</option>
            <option value="Ms">Ms</option>
          </Form.Select><br />
          <label>First Name: </label><input id='add-staff-inp' type='text' name='firstName' defaultValue={details.firstName} required></input><br />
          <label>Surname: </label><input id='add-staff-inp' type='text' name='surname' defaultValue={details.surname} required></input><br />
          <label>Job Title: </label><input id='add-staff-inp' type='text' name='jobTitle' defaultValue={details.jobTitle} required></input><br />
          <label>Shop: </label><input id='add-staff-inp' type='text' name='shopName' defaultValue={details.shopName} ></input><br />
          <label>Department: </label><input id='add-staff-inp' type='text' name='deptName' defaultValue={details.deptName} ></input><br />
          <label>Product<span>Responsibilities: </span></label><Form.Select id='product-resp-inp' multiple aria-label="Default select Product Type" name='productTypes[]' defaultValue={products}>
            <option value="T" >Toys</option>
            <option value="G" >Gadgets</option>
          </Form.Select><br />
          <label>Access Level: </label><Form.Select id='title-inp-p' aria-label="Default select Access Level" defaultValue={details.accessLevel} name='accessLevel' required >
            <option value="">--Access Level--</option>
            <option value="Sales">Sales</option>
            <option value="Senior Sales">Senior Sales</option>
            <option value="Manager">Manager</option>
            <option value="Finance">Finance</option>
          </Form.Select><br /><br />
          <div className='submit-cancel-btn'>
          <button id='submit-btn' type='submit'>Submit</button>
          <Link to="/staff" >
              <button id='cancel-btn'>Cancel</button>
          </Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default StaffEdit;

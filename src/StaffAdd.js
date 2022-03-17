import NavBar from './NavBar';
import phpUrl from './php/phpUrls';

const StaffAdd = (props) => {
  const { basketCount } = props;

  return (
    <div className="staff">
      <NavBar title='Add New Staff' basketCount={basketCount} />
      <div className="AddStaffForm">
        <form method="POST" action={phpUrl+"/staffadd.php"}>
          <label>Staff ID: </label><input type='text' name='staffId' required></input><br />
          <label>Title: </label><input type='text' name='title' required></input><br />
          <label>First Name: </label><input type='text' name='firstName' required></input><br />
          <label>Surname: </label><input type='text' name='surname' required></input><br />
          <label>Email: </label><input type='text' name='email' required></input><br />
          <label>Job Title: </label><input type='text' name='jobTitle' required></input><br />
          <label>Shop: </label><input type='text' name='shopName'></input><br />
          <label>Department: </label><input type='text' name='deptName'></input><br />
          <label>Product Responsibilities: </label><input type='text' name='productTypes'></input><br />
          <label>Access Level: </label><input type='text' name='accessLevel' required></input><br />
          <label>Password: </label><input type='text' name='password' required></input><br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default StaffAdd;

import NavBar from './NavBar';
import phpUrl from './php/phpUrls';

const StaffAdd = (props) => {
  const { basketCount } = props;

  return (
    <div className="staff">
      <NavBar title='Add New Staff' basketCount={basketCount} />
      <div className="AddStaffForm">
        <form method="POST" action={phpUrl+"/staffadd.php"}>
          <label>Staff ID: </label><input type='text' name='staffId'></input><br />
          <label>Title: </label><input type='text' name='title'></input><br />
          <label>First Name: </label><input type='text' name='firstName'></input><br />
          <label>Surname: </label><input type='text' name='surname'></input><br />
          <label>Email: </label><input type='text' name='email'></input><br />
          <label>Job Title: </label><input type='text' name='jobTitle'></input><br />
          <label>Shop: </label><input type='text' name='shopId'></input><br />
          <label>Department: </label><input type='text' name='deptId'></input><br />
          <label>Product Responsibilities: </label><input type='text' name='productTypes'></input><br />
          <label>Access Level: </label><input type='text' name='accessLevel'></input><br />
          <label>Password: </label><input type='text' name='password'></input><br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default StaffAdd;

import React from "react";
import NavBar from './NavBar';
import useFetch from './php/useFetch';
import phpUrl from './php/phpUrls';
import StaffTableRow from "./StaffTableRow";
import { Link } from "react-router-dom";
import './Staff.css';
import webUrl from "./php/webUrls";

const Staff = (props) => {
  const { basketCount, loggedin, accessLevel } = props;
  if (loggedin !== 'Y') { window.location.replace(webUrl)};
  if (accessLevel !== "Manager")  { window.location.replace(webUrl+'/products')};

  let rows = [];
  let rowCount = 1;
  let { response }  = useFetch(phpUrl+'/staffTable.php');
  
  if (response !== null) { 
    response.forEach(staff => {
      rows.push(
          <StaffTableRow key={rowCount} details={staff} rowCount={rowCount} />
      );
      rowCount++;
    });
  };

  return (
    <div className="staff">
      <NavBar title='Staff' basketCount={basketCount} accessLevel={accessLevel} />
      <div className="Stafftable">
        <table id='Staff-table'>
          <thead>
            <tr className='Staff-tr'>
              <th>Staff ID</th>
              <th>Name</th>
              <th>Job Title</th>
              <th>Store</th>
              <th>Department</th>
              <th>Product Permissions</th>
              <th>Permission Level</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
      <div className="add-staff">
      <Link to="/addstaff"><button>Add New Staff</button></Link>
      </div>
    </div>
  );
}

export default Staff;

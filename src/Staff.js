import './Staff.css';
import NavBar from './NavBar';
import useFetch from './php/useFetch';
import phpUrl from './php/phpUrls';
import StaffTableRow from './StaffTableRow';

const Staff = (props) => {
  const { basketCount } = props;
  
  let rows = [];
  let rowCount = 1;
  let { response }  = useFetch(phpUrl+'/staffTable.php');
  
  if (response !== null) { 
    response.forEach(staff => {
      rows.push(
          <StaffTableRow details={staff} rowCount={rowCount} />
      );
      rowCount++;
    });
  };

  return (
    <div className="staff">
      <NavBar title='Staff' basketCount={basketCount} />
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
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Staff;

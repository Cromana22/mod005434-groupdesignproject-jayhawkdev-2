import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import phpUrl from './php/phpUrls';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function deleteStaff(staffId, firstname, surname){
  if (confirm("Are you sure you want to delete "+firstname + " " + surname+"? This is irreversible.") == true) { 
    window.location.href = phpUrl+"/staffdelete.php?staffId="+staffId;
  }
}

function StaffTableRow(props) {
  const { details, rowCount } = props;

  if (details !== null) {
    return (
      <tr id={rowCount} className='Staff-tr'>
        <td>{details.staffId}</td>
        <td>{details.title + " " + details.firstName + " " + details.surname}</td>
        <td>{details.jobTitle}</td>
        <td>{details.shopName}</td>
        <td>{details.deptName}</td>
        <td>{details.productTypes}</td>
        <td>{details.accessLevel}</td>
        <td>
          <Link to="/editstaff" state={{ details: details }} >
            <button>
              <FontAwesomeIcon id={"edit"+rowCount} icon={faPen} />
            </button>
          </Link>
          <button>
            <FontAwesomeIcon id={"delete"+rowCount} icon={faTrashCan} onClick={() => deleteStaff(details.staffId, details.firstName, details.surname)} />
          </button>
        </td>
      </tr>
    );
  }
  else {
    return (null)
  }
}

export default StaffTableRow;

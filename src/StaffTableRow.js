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
      </tr>
    );
  }
  else {
    return (null)
  }
}

export default StaffTableRow;

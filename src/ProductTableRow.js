function ProductTableRow(props) {
    const { details, rowCount} = props;
  
    if (details !== null) { 
    return (
        <tr id={rowCount} className='products-tr'>
            <td>{details.image}</td>
            <td>{details.name}</td>
            <td>{details.available}</td>
            <td>{details.reorderLevel}</td>
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

export default ProductTableRow;
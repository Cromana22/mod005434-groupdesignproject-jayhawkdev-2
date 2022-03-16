import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{contact.staffId}</td>
            <td>{contact.fullname}</td>
            <td>{contact.jobTitle}</td>
            <td>{contact.shopName}</td>
            <td>{contact.deptName}</td>
            <td>{contact.productTypes}</td>
            <td>{contact.accessLevel}</td>
            <td>
                <button
                    type="button"
                    onClick={(event) => handleEditClick(event, contact)}
                >
                    Edit
                </button>
                <button type="button" onClick={() => handleDeleteClick(contact.id)}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ReadOnlyRow;
import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import NavBar from './NavBar';
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const Staff = (props) => {
  const { basketCount } = props;

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    staffId: "",
    fullname: "",
    jobTitle: "",
    shopName: "",
    deptName: "",
    productTypes: "",
    accessLevel: "",
  });

  const [editFormData, setEditFormData] = useState({
    staffId: "",
    fullname: "",
    jobTitle: "",
    shopName: "",
    deptName: "",
    productTypes: "",
    accessLevel: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      staffId: addFormData.staffId,
      fullname: addFormData.fullname,
      jobTitle: addFormData.jobTitle,
      shopName: addFormData.shopName,
      deptName: addFormData.deptName,
      productTypes: addFormData.productTypes,
      accessLevel: addFormData.accessLevel,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      staffId: editContactId.staffId,
      fullname: editContactId.fullname,
      jobTitle: editContactId.jobTitle,
      shopName: editContactId.shopName,
      deptName: editContactId.deptName,
      productTypes: editContactId.productTypes,
      accessLevel: editContactId.accessLevel,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      staffId: contact.staffId,
      fullname: contact.fullname,
      jobTitle: contact.jobTitle,
      shopName: contact.shopName,
      deptName: contact.deptName,
      productTypes: contact.productTypes,
      accessLevel: contact.accessLevel,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <NavBar title='Purchase Orders' basketCount={basketCount} />
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Staff Id</th>
              <th>Full Name</th>
              <th>Job Title</th>
              <th>Shop Name</th>
              <th>Dept. Name</th>
              <th>Product Types</th>
              <th>Access Level</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          required="required"
          placeholder="Enter a Staff Id..."
          name="staffId"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          required="required"
          placeholder="Enter an Full Name..."
          name="fullname"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          required="required"
          placeholder="Enter a job Title..."
          name="jobTitle"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          required="required"
          placeholder="Enter an shop Name..."
          name="shopName"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          required="required"
          placeholder="Enter an Dept. Name..."
          name="deptName"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          required="required"
          placeholder="Enter an Product Types..."
          name="productTypes"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          required="required"
          placeholder="Enter an Access Level..."
          name="accessLevel"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Staff;

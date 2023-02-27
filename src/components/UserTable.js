import { useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, editUser, sortUser } from "../actions/actions";
import EditForm from "./EditForm";

const UserTable = () => {
  let [updateData, setUpdateData] = useState({});
  const [show, setShow] = useState(false);
  const [order, setOrder] = useState("ASC");
  const handleClose = () => setShow(false);
  const userData = useSelector((state) => state.tableReducer.personDetails);
  console.log(userData);

  const name = useRef();
  const age = useRef();
  const gender = useRef();

  const dispatch = useDispatch();

  const handleAddFormData = (event) => {
    event.preventDefault();
    const formData = {
      id: Math.floor(Math.random() * 100),
      name: name.current.value,
      age: age.current.value,
      gender: gender.current.value
    };
    if (
      name.current.value === "" ||
      age.current.value === "" ||
      gender.current.value === ""
    ) {
      alert("Please fill out all the fields");
    } else {
      dispatch(addUser(formData));
      alert("Data added successfully");
      (name.current.value = ""),
        (age.current.value = ""),
        (gender.current.value = "");
    }
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEditData = (editedData) => {
    console.log(editedData);
    setShow(true);
    setUpdateData(editedData);
    dispatch(editUser(editedData));
  };
  const handleSortData = (col) => {
    if (order === "ASC") {
      const sorted = userData.sort((a, b) => {
        if (col === "age") {
          return a[col] - b[col];
        } else {
          return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1;
        }
      });
      dispatch(sortUser(sorted));
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = userData.sort((a, b) => {
        if (col === "age") {
          return b[col] - a[col];
        } else {
          return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1;
        }
      });
      dispatch(sortUser(sorted));
      setOrder("ASC");
    }
  };
  return (
    <>
      <h1>User Details</h1>
      <form className="text-left container" onSubmit={handleAddFormData}>
        <div>
          <label>Name : </label>
          <input type="text" className="form-control-sm" ref={name} />
        </div>
        <br />
        <div>
          <label>Age : </label>
          <input type="number" className="form-control-sm" ref={age} />
        </div>
        <br />
        <div>
          <label>Gender : </label>
          <input type="text" className="form-control-sm" ref={gender} />
        </div>
        <br />

        <button className="btn btn-primary" type="submit">
          ADD PERSON
        </button>
      </form>
      <br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th onClick={() => handleSortData("name")}>Name</th>
            <th onClick={() => handleSortData("age")}>Age</th>
            <th onClick={() => handleSortData("gender")}>Gender</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((person) => {
            return (
              <tr key={person.id}>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.gender}</td>
                <td>
                  {" "}
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleEditData(person)}
                  >
                    {" "}
                    Edit{" "}
                  </button>{" "}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteUser(person.id)}
                  >
                    {" "}
                    Delete{" "}
                  </button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm
            user={updateData}
            handleEditData={handleEditData}
            onHide={handleClose}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserTable;

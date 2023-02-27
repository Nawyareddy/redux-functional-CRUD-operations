import { useState } from "react";

const EditForm = ({ user, handleEditData, onHide }) => {
  const id = user.id;
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);

  const userData = { name, age, gender, id };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleEditData(userData);
    alert("Updated Successfully");
    onHide();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <input
            type="text"
            className="form-control"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <br />
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </form>
      <br />
    </>
  );
};

export default EditForm;

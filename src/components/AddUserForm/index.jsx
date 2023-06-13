import React, { useState } from "react";
import { AddButton, Container,TextInputBox } from "./styledComponents";

function AddUserForm({ addUser }) {
  const [stdName, setStdName] = useState("");
  const [stdNo, setStdNo] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const onStdNameChange = (e) => {
    setStdName(e.target.value);
  };

  const onStdNoChange = (e) => {
    if (!isNaN(e.target.value)) setStdNo(e.target.value);
  };

  const onPhoneNoChange = (e) => {
    if (!isNaN(e.target.value)) setPhoneNo(e.target.value);
  };

  const onAddUser = () => {
    if (!stdName.length) {
      alert("stdName cannot be empty");
      return;
    }

    if (!stdNo.length) {
      alert("stdNo cannot be empty");
      return;
    }

    if (!phoneNo.length) {
      alert("phoneNo cannot be empty");
      return;
    }

    addUser({ stdNo, stdName, phoneNo });
  };

  return (
    <Container>
      <table>
        <tr>
          <td>Std Name</td>
          <td>
            <TextInputBox
              type="text"
              value={stdName}
              onChange={onStdNameChange}
            />
          </td>
        </tr>
        <tr>
          <td>Std No</td>
          <td>
            <TextInputBox type="text" value={stdNo} onChange={onStdNoChange} />
          </td>
        </tr>
        <tr>
          <td>Phone No</td>
          <td>
            <TextInputBox
              type="text"
              value={phoneNo}
              onChange={onPhoneNoChange}
            />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <AddButton onClick={onAddUser}>Add</AddButton>
          </td>
        </tr>
      </table>
    </Container>
  );
}
export default AddUserForm;

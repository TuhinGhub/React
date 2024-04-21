import React from "react";

const Ques5 = (props) => {
  const { name, email, username, phoneNo } = props;
  return (
    <div>
      <h1>Profile View</h1>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td data-testid="nameDisplay">{name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td data-testid="emailDisplay">{email}</td>
          </tr>
          <tr>
            <td>Username</td>
            <td data-testid="usernameDisplay">{username}</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td data-testid="phoneDisplay">{phoneNo}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Ques5;
import React from "react";

function UserInfo(props) {
  return (
    <div>
      <h2>Details</h2>

      <p>Name: {props.user.name}</p>
      <p>Email: {props.user.email}</p>
      <p>Location: {props.user.location}</p>
    </div>
  );
}

export default UserInfo;
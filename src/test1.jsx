import React, { useState } from "react";

const usersData = [
  { userid: 1, name: "upinderjit singh", age: 24 },
  { userid: 2, name: "varinder singh", age: 25 },
  { userid: 3, name: "sukhwinder singh", age: 26 },
  { userid: 4, name: "harpal singh", age: 26 },
];

const User = () => {
  const [users, setUsers] = useState(usersData);
  const deleteUser = (useridToDelete) => {
    const updatedUsers = users.filter((user) => user.userid !== useridToDelete);
    setUsers(updatedUsers);
  };
  return (
    <>
      <div style={{ display: "flex", padding: "20px", gap: "20px" }}>
        {users.map((user, index) => (
          <div
            style={{
              width: "100px",
              backgroundColor: "lightblue",
              padding: "20px",
            }}
          >
            <p>{user.userid}</p>
            <strong>{user.name}</strong>
            <p>{user.age}</p>
            <button type="button" onClick={() => deleteUser(user.userid)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default User;

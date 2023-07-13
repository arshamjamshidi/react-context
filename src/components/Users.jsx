import React from "react";

import { useUsers } from "../context/users/reducer";
import { clearUsers, fetchUsers } from "../context/users/actions";

const Users = () => {
  const { users: data, dispatch } = useUsers();

  return (
    <div>
      <h1>Users</h1>

      {!data.users.length ? (
        <button onClick={() => dispatch(fetchUsers())}>fetch users</button>
      ) : (
        <button onClick={() => dispatch(clearUsers())}>clear</button>
      )}

      {data.loading && <h3 style={{ color: "skyblue" }}>Loading...</h3>}

      {data.error && <h3 style={{ color: "red" }}>{data.error}</h3>}

      {!data.loading && !data.error && data.users.length ? (
        <ul>
          {data.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Users;

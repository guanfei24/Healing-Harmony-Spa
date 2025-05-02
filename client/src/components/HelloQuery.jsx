import React, { useEffect, useState } from "react";

export default function HelloQuery() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            users {
                id
                name
                email
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.users) {
          setUsers(data.data.users);
        } else {
          setUsers("Failed to fetch data");
        }
      })
      .catch((err) => {
        console.error(err);
        setUsers("Error fetching data");
      });
  }, []);

  return (
    <div>
      <h3>GraphQL Response:</h3>
      {users?.map((user) => {
        return (
          <div key={user.id}>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        );
      })}
    </div>
  );
}

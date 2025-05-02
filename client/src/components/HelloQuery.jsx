import React, { useEffect, useState } from "react";

export default function HelloQuery() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            hello
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.hello) {
          setMessage(data.data.hello);
        } else {
          setMessage("Failed to fetch data");
        }
      })
      .catch((err) => {
        console.error(err);
        setMessage("Error fetching data");
      });
  }, []);

  return (
    <div>
      <h3>GraphQL Response:</h3>
      <p>{message}</p>
    </div>
  );
}

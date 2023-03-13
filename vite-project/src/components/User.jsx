import React, { useState } from "react";

function User() {
  const [name, setName] = useState("Ahmet");

  console.log("User re-render");

  const data = {
    name,
    age: 30,
  };

  return (
    <div>
      <div>User</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <button onClick={() => setName("Mehmet")}>change name</button>
    </div>
  );
}

export default User;

import React, { useEffect, useState } from "react";

const PageOne = () => {
  const allusers = ["alex", "james", "jasmine", "mira", "john"];
  const [users, setusers] = useState(allusers);
  const serachHandling = (name) => {
    const use = allusers.filter((us) => us === name);
    setusers(use);
  };

  return (
    <>
      <button>shuffle</button>
      <input
        type="text"
        onChange={(e) => {
          serachHandling(e.target.value);
        }}
      />
      <ul>
        {users.map((user) => {
          return <li key={user}>{user}</li>;
        })}
      </ul>
    </>
  );
};

export default PageOne;

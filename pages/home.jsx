import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/user";

function Home() {
  const [users, setUsers] = useState([]);

  async function main() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
    console.log(data);
  }
  useEffect(() => {
    main();
  }, []);

  const pixels = "3px";

  return (
    <div>
      {users.map((user) => {
        <User key={user.id}id={user.id} name={user.name} email={user.email} />;
      })}
    </div>
  );
}

export default Home;

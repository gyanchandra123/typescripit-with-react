import React, { useState } from "react";

type authUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState({} as authUser);

  const handleLogin = () => {
    setUser({
      name: "gyan",
      email: "gsingh@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser({
      name: "",
      email: "",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>log in</button>
      <button onClick={handleLogout}>log out</button>
      <div>user name is : {user.name} </div>
      <div>user email is :{user.email} </div>
    </div>
  );
};

export default User;

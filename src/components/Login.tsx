import React, { useState } from "react";

const Login = () => {
  const [isLogin, setisLogin] = useState(false);

  const handleLogin = () => {
    setisLogin(true);
  };
  const handleLogout = () => {
    setisLogin(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>log in</button>
      <button onClick={handleLogout}>log out</button>
      <div>{isLogin ? "log in" : "log out"}</div>
    </div>
  );
};

export default Login;

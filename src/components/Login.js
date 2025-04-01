import React, { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      User Name:
      <input
        type="text"
        id="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      Password:
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button id="login" onClick={() => console.log(userName, password)}>
        Login
      </button>
    </div>
  );
}

export default Login;

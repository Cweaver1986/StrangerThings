import React, { useState } from "react";
import { login } from "../api/auth";

const Login = ({}) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          console.log(username, password);
          const data = await login(username, password);
          const token = data.data.token;
          console.log(token);
          localStorage.setItem("token", token);
        }}
      >
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          value={username}
          type="text"
          required
          minLength={5}
          placeholder="username"
          onChange={(event) => setUserName(event.target.value)}
        ></input>
        <label htmlFor="password">Password :</label>
        <input
          value={password}
          type="password"
          required
          minLength={7}
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export const Logout = () => {
  localStorage.clear();
  setToken();
};

export default Login;

import React, { useState, useEffect } from "react";
import { fetchMe } from "../api/auth";
import { registerUser } from "../api/auth";

const Register = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const getMe = async () => {
      const data = await fetchMe(token);
      setUser(data);
      // console.log("user", user);
    };
    if (token) {
      getMe();
    }
  }, [token]);

  return (
    <div>
      <h1>Register</h1>
      <form
        onSubmit={async (event) => {
          try {
            event.preventDefault();
            console.log(password, username);
            const token = await registerUser(username, password);
            setToken(token);
            localStorage.setItem("token", token);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <label htmlFor="username">Username :</label>
        <input
          value={username}
          type="text"
          required
          minLength={5}
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

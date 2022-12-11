import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/posts">
          Posts
        </NavLink>
        <NavLink className="navlink" to="/newpost">
          New Post
        </NavLink>
        <NavLink className="navlink" to="/register">
          Register
        </NavLink>
        <NavLink className="navlink" to="/login">
          Login
        </NavLink>
      </nav>
    </>
  );
};

export default NavBar;

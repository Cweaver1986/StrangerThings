import { useState, useEffect } from "react";
import { getPosts } from "./api/auth";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Register from "./components/Register";
import NewPost from "./components/NewPost";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
